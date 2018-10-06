using adspro_test.Dtos;
using adspro_test.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace adspro_test.Interfaces
{
    public interface IUserRepository
    {
        Task<UserDto> GetUser(string id);
        Task<List<UserDto>> GetUsersInRole(string roleName);
        Task<bool> IsInRole(string userId, string roleName);
    }
}