using System;
using System.ComponentModel.DataAnnotations;
using Ebrahim.Blog.DomainClasses.AuditableEntity;

namespace Ebrahim.Blog.DomainClasses.Logger
{
    public class LogItem : IAuditableEntity
    {
        public int Id { set; get; }
        public Guid Guid { get; set; }

        public int EventId { get; set; }

        public string Url { get; set; }

        public string RequestHeader { get; set; }

        public string RequestMethod { get; set; }

        public string RequestBody { get; set; }

        public string LogLevel { get; set; }

        public string Logger { get; set; }

        public string Message { get; set; }

        public string StateJson { get; set; }

        [MaxLength(1000)]
        public string CreatedByBrowserName { get; set; }

        [MaxLength(225)]
        public string CreatedByIp { get; set; }
        
        public int? CreatedByUserId { get; set; }
    }
}
