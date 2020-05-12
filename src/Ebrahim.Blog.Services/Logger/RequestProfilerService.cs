using System;
using System.Threading.Tasks;
using Ebrahim.Blog.Common.GuardToolkit;
using Ebrahim.Blog.DataLayer.Context;
using Ebrahim.Blog.DomainClasses.Logger;
using Microsoft.EntityFrameworkCore;

namespace Ebrahim.Blog.Services.Logger
{
    public interface IRequestProfilerService
    {
        Task AddAsync(RequestProfiler requestProfiler);
    }
    public class RequestProfilerService: IRequestProfilerService
    {
        private readonly IUnitOfWork _uow;
        private readonly DbSet<RequestProfiler> _requestProfiler;
        public RequestProfilerService(IUnitOfWork uow)
        {
            _uow = uow;
            _uow.CheckArgumentIsNull(nameof(_uow));

            _requestProfiler = _uow.Set<RequestProfiler>();
        }

        public Task AddAsync(RequestProfiler requestProfiler)
        {
            _requestProfiler.Add(requestProfiler);
            return _uow.SaveChangesAsync();
            
        }
    }
}
