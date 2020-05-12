using System;
using System.Collections.Generic;
using Ebrahim.Blog.DomainClasses.AuditableEntity;

namespace Ebrahim.Blog.DomainClasses.Identity
{
    public class User
    {
        public User()
        {
            UserRoles = new HashSet<UserRole>();
            UserTokens = new HashSet<UserToken>();
        }
        public int Id { get; set; }

        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NationalCode { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string NormalizedEmail { get; set; }
        public string NormalizedUsername { get; set; }
        public bool IsActive { get; set; }
        public DateTimeOffset? LastLoggedIn { get; set; }
        public string SerialNumber { get; set; }

         public virtual ICollection<UserRole> UserRoles { get; set; }

        public virtual ICollection<UserToken> UserTokens { get; set; }
    }
}
