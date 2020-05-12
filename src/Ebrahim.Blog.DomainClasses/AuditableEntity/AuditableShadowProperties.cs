using System;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Ebrahim.Blog.DomainClasses.AuditableEntity
{
    public static class AuditableShadowProperties
    {
        public static readonly Func<object, string> EFPropertyCreatedByBrowserName = entity => EF.Property<string>(entity, CreatedByBrowserName);
        public static readonly string CreatedByBrowserName = nameof(CreatedByBrowserName);

        public static readonly Func<object, string> EFPropertyModifiedByBrowserName = entity => EF.Property<string>(entity, ModifiedByBrowserName);
        public static readonly string ModifiedByBrowserName = nameof(ModifiedByBrowserName);

        public static readonly Func<object, string> EFPropertyCreatedByIp = entity => EF.Property<string>(entity, CreatedByIp);
        public static readonly string CreatedByIp = nameof(CreatedByIp);

        public static readonly Func<object, string> EFPropertyModifiedByIp = entity => EF.Property<string>(entity, ModifiedByIp);
        public static readonly string ModifiedByIp = nameof(ModifiedByIp);

        public static readonly Func<object, int?> EFPropertyCreatedByUserId = entity => EF.Property<int?>(entity, CreatedByUserId);
        public static readonly string CreatedByUserId = nameof(CreatedByUserId);

        public static readonly Func<object, int?> EFPropertyModifiedByUserId = entity => EF.Property<int?>(entity, ModifiedByUserId);
        public static readonly string ModifiedByUserId = nameof(ModifiedByUserId);

        public static readonly Func<object, DateTime?> EFPropertyCreatedDateTime = entity => EF.Property<DateTime?>(entity, CreatedDateTime);
        public static readonly string CreatedDateTime = nameof(CreatedDateTime);

        public static readonly Func<object, DateTime?> EFPropertyModifiedDateTime = entity => EF.Property<DateTime?>(entity, ModifiedDateTime);
        public static readonly string ModifiedDateTime = nameof(ModifiedDateTime);

        public static readonly Func<object, Guid> EFPropertyGuid = entity => EF.Property<Guid>(entity, Guid);
        public static readonly string Guid = nameof(Guid);

        public static void AddAuditableShadowProperties(this ModelBuilder modelBuilder)
        {
            foreach (var entityType in modelBuilder.Model.GetEntityTypes().Where(e => typeof(IAuditableEntity).IsAssignableFrom(e.ClrType)))
            {
                modelBuilder.Entity(entityType.ClrType).Property<string>(CreatedByBrowserName).HasMaxLength(1000);
                modelBuilder.Entity(entityType.ClrType).Property<string>(ModifiedByBrowserName).HasMaxLength(1000);

                modelBuilder.Entity(entityType.ClrType).Property<string>(CreatedByIp).HasMaxLength(255);
                modelBuilder.Entity(entityType.ClrType).Property<string>(ModifiedByIp).HasMaxLength(255);

                modelBuilder.Entity(entityType.ClrType).Property<int?>(CreatedByUserId);
                modelBuilder.Entity(entityType.ClrType).Property<int?>(ModifiedByUserId);

                modelBuilder.Entity(entityType.ClrType).Property<DateTime?>(CreatedDateTime);
                modelBuilder.Entity(entityType.ClrType).Property<DateTime?>(ModifiedDateTime);

                modelBuilder.Entity(entityType.ClrType).Property<Guid>(Guid);
            }
        }

        public static void SetAuditableEntityPropertyValues(this ChangeTracker changeTracker, IHttpContextAccessor httpContextAccessor)
        {
            var httpContext = httpContextAccessor?.HttpContext;
            var userAgent = httpContext?.Request?.Headers["User-Agent"].ToString();
            var userIp = httpContext?.Connection?.RemoteIpAddress?.ToString();
            var now = DateTime.UtcNow;
            var userId = getUserId(httpContext);

            var modifiedEntries = changeTracker.Entries<IAuditableEntity>()
                                               .Where(x => x.State == EntityState.Modified);
            foreach (var modifiedEntry in modifiedEntries)
            {
                modifiedEntry.Property(ModifiedDateTime).CurrentValue = now;
                modifiedEntry.Property(ModifiedByBrowserName).CurrentValue = userAgent;
                modifiedEntry.Property(ModifiedByIp).CurrentValue = userIp;
                modifiedEntry.Property(ModifiedByUserId).CurrentValue = userId;
            }

            var addedEntries = changeTracker.Entries<IAuditableEntity>()
                                            .Where(x => x.State == EntityState.Added);
            foreach (var addedEntry in addedEntries)
            {
                addedEntry.Property(CreatedDateTime).CurrentValue = now;
                addedEntry.Property(CreatedByBrowserName).CurrentValue = addedEntry.Property(CreatedByBrowserName).CurrentValue ?? userAgent;
                addedEntry.Property(CreatedByIp).CurrentValue = addedEntry.Property(CreatedByIp).CurrentValue ?? userIp;
                addedEntry.Property(CreatedByUserId).CurrentValue = addedEntry.Property(CreatedByUserId).CurrentValue ?? userId;
                addedEntry.Property(Guid).CurrentValue = (Guid)addedEntry.Property(Guid).CurrentValue == System.Guid.Empty ? System.Guid.NewGuid() : addedEntry.Property(Guid).CurrentValue;
            }
        }

        private static int? getUserId(HttpContext httpContext)
        {
            // int? userId = null;
            // var userIdValue = httpContext?.User?.Identity?.GetUserId();
            // if (!string.IsNullOrWhiteSpace(userIdValue))
            // {
            //     userId = int.Parse(userIdValue);
            // }
            // return userId;


            //throw new NullReferenceException("آقا باید بر اساس identiy خود id کاربر از این طظرق ارسال کنی بریا دیتابیس");


            return 21;
        }
    }
}
