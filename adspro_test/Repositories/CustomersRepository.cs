using adspro_test.Dtos;
using adspro_test.Interfaces;
using adspro_test.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace adspro_test.Repositories
{
    public class CustomersRepository : ICustomersRepository
    {
        private readonly ApplicationDbContext context;
        private readonly IUserRepository userRepository;
        private readonly IStatisticRepository statisticRepository;

        public CustomersRepository()
        {
            userRepository = new UserRepository();
            statisticRepository = new StatisticRepository();
            this.context = new ApplicationDbContext();
        }

        public async Task<Customer> GetCustomer(Guid id)
        {
            var customer = await context.Customers         
                .Include(cust => cust.User)
                .Include(cust => cust.Emails)
                .Include(cust => cust.Phones)
                .Include(cust => cust.Changes)
                .Include(cust => cust.Addresses.Select(addr => addr.Street))
                .SingleOrDefaultAsync(cust => cust.Id == id);

            return customer;
        }

        public async Task<IEnumerable<CustomerDto>> GetCustomers()
        {
            var customers = await context.Customers
                .Include(cust => cust.Emails)
                .Include(cust => cust.Phones)
                .Include(cust => cust.Addresses.Select(addr => addr.Street))
                .ToListAsync();

            return Mapper.Map<IEnumerable<Customer>, IEnumerable<CustomerDto>>(customers);
        }

        public async Task<bool> UpdateCustomer(Guid id, CustomerDto dto)
        {
            var customer = await GetCustomer(id);
            if (customer == null)
                return false;

            Mapper.Map(dto, customer);

            var issuer = await userRepository.GetUser(dto.IssuerId);
            if (issuer == null)
                return false;

            var change = new Change()
            {
                UserName = issuer.Email,
                IsAdminChange = issuer.IsAdmin,
                DateChanged = DateTime.Now
            };

            customer.Changes.Add(change);

            return await context.SaveChangesAsync() > 0;
        }

        public async Task<bool> DeleteCustomer(Guid id)
        {
            var customer = await GetCustomer(id);
            if (customer == null)
                return false;

            var isAdmin = await userRepository.IsInRole(customer.User.Id, "Admin");

            customer.User.CustomerId = null;
            customer.User = null;

            context.Changes.RemoveRange(customer.Changes);
            context.Customers.Remove(customer);

            return await context.SaveChangesAsync() > 0 && await statisticRepository.ProfileDeleted(isAdmin);
        }

        public async Task<Customer> CreateCustomer(CustomerDto dto)
        {
            var user = await context.Users.FirstOrDefaultAsync(u => u.Id == dto.UserId);
            var customer = Mapper.Map<CustomerDto, Customer>(dto);
            var isAdmin = await userRepository.IsInRole(user.Id, "Admin");

            customer.User = user;
            context.Customers.Add(customer);

            await context.SaveChangesAsync();

            user.CustomerId = customer.Id;

            var issuer = await userRepository.GetUser(dto.IssuerId);
            if (issuer == null)
                return null;

            var change = new Change()
            {
                UserName = issuer.Email,
                IsAdminChange = issuer.IsAdmin,
                DateChanged = DateTime.Now
            };

            customer.Changes.Add(change);

            if (await context.SaveChangesAsync() > 0 && await statisticRepository.ProfileAdded(isAdmin))
                return customer;

            return null;
        } 
    }
}