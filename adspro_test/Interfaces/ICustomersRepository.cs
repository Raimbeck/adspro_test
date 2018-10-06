using adspro_test.Dtos;
using adspro_test.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace adspro_test.Interfaces
{
    public interface ICustomersRepository
    {
        Task<IEnumerable<CustomerDto>> GetCustomers();
        Task<Customer> GetCustomer(Guid id);
        Task<Customer> CreateCustomer(CustomerDto dto);
        Task<bool> UpdateCustomer(Guid id, CustomerDto dto);
        Task<bool> DeleteCustomer(Guid id);
    }
}