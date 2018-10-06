using adspro_test.Interfaces;
using adspro_test.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace adspro_test.Repositories
{
    public class StatisticRepository: IStatisticRepository
    {
        private ApplicationDbContext context;
        private readonly IUserRepository userRepository;

        public StatisticRepository()
        {
            context = new ApplicationDbContext();
            userRepository = new UserRepository();
        }

        public async Task<Statistic> GetStatistic()
        {
            return await context.Statistics.SingleOrDefaultAsync(st => st.Id == 1);
        }

        public async Task<bool> ProfileAdded(bool isAdminProfile)
        {
            var statistic = await GetStatistic();
            if (statistic == null)
                throw new Exception("No statistic entry in DB.");

            statistic.ProfilesAdded += 1;
            statistic.TotalProfiles += 1;

            if (isAdminProfile)
                statistic.AdminProfiles += 1;
            else
                statistic.CustomerProfiles += 1;

            return await context.SaveChangesAsync() > 0;
        }

        public async Task<bool> ProfileDeleted(bool isAdminProfile)
        {
            var statistic = await GetStatistic();
            if (statistic == null)
                throw new Exception("No statistic entry in DB.");

            statistic.ProfilesDeleted += 1;
            statistic.TotalProfiles -= 1;

            if (isAdminProfile)
                statistic.AdminProfiles -= 1;
            else
                statistic.CustomerProfiles -= 1;

            return await context.SaveChangesAsync() > 0;
        }
    }
}