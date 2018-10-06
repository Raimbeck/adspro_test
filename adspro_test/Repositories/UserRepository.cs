using adspro_test.Dtos;
using adspro_test.Interfaces;
using adspro_test.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace adspro_test.Repositories
{
    public class UserRepository : IUserRepository
    {
        private ApplicationDbContext context;

        public UserRepository()
        {
            context = new ApplicationDbContext();
        }

        public async Task<UserDto> GetUser(string id)
        {
            var user = await context.Users
                .Select(u => new UserDto() { UserId = u.Id, CustomerId = u.CustomerId, Email = u.Email})
                .FirstOrDefaultAsync(u => u.UserId == id);

            if (user == null)
                return null;

            user.IsAdmin = await IsInRole(user.UserId, "Admin");

            return user;
        }

        public async Task<List<UserDto>> GetUsersInRole(string roleName)
        {
            var role = await context.Roles.SingleOrDefaultAsync(r => r.Name == roleName);
            if (role == null)
                return null;

            var users = await context.Users
                .Where(u => u.Roles.Any(r => r.RoleId == role.Id))
                .Select(u => new UserDto() { UserId = u.Id, Email = u.Email, CustomerId = u.CustomerId })
                .ToListAsync();

            return users;
        }

        public async Task<bool> IsInRole(string userId, string roleName)
        {
            var users = await GetUsersInRole(roleName);
            if (users == null || users.Count == 0)
                return false;

            return users.Any(u => u.UserId == userId);
        }
    }
}