using System;
using System.Collections.Generic;
using Ebrahim.Blog.DomainClasses.AuditableEntity;

namespace Ebrahim.Blog.DomainClasses.Identity
{
    public class Role : IAuditableEntity
    {

        public Role()
        {
            UserRoles = new HashSet<UserRole>();
        }
        public int Id { get; set; }

        public string Name { get; set; }

        public virtual ICollection<UserRole> UserRoles { get; set; }
    }
}
