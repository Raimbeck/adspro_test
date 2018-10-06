using adspro_test.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace adspro_test.Interfaces
{
    public interface IStatisticRepository
    {
        Task<Statistic> GetStatistic();
        Task<bool> ProfileAdded(bool isAdmin);
        Task<bool> ProfileDeleted(bool isAdmin);
    }
}