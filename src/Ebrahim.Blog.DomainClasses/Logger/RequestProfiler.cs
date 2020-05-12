using System;
using System.ComponentModel.DataAnnotations;
using Ebrahim.Blog.DomainClasses.AuditableEntity;

namespace Ebrahim.Blog.DomainClasses.Logger
{
    public class RequestProfiler : IAuditableEntity
    {
        public int Id { get; set; }
        public Guid Guid { get; set; }
        public string Address { get; set; }
        public string RequestHeader { get; set; }
        public string RequestBody { get; set; }
        public string RequestMethod { get; set; }
        public DateTimeOffset RequestDate { get; set; }
        public string ResponseBody { get; set; }
        public string ResponseHeader { get; set; }
        public DateTimeOffset ResponseDate { get; set; }
        public int ResponsStatus { get; set; }

        [MaxLength(1000)]
        public string CreatedByBrowserName { get; set; }

        [MaxLength(225)]
        public string CreatedByIp { get; set; }
        
        public int? CreatedByUserId { get; set; }
    }
}
