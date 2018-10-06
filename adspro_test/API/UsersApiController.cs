using adspro_test.Interfaces;
using adspro_test.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace adspro_test.API
{
    [RoutePrefix("api/users")]
    public class UsersApiController : ApiController
    {
        private readonly IUserRepository repository;

        public UsersApiController()
        {
            repository = new UserRepository();
        }

        [Authorize(Roles = "Admin, Customer")]
        [HttpGet]
        [Route("{id}")]
        public async Task<IHttpActionResult> GetCurrentUser(string id)
        {
            return Ok(await repository.GetUser(id));
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        [Route("byRole/{roleName}")]
        public async Task<IHttpActionResult> GetUsersByRoleName(string roleName)
        {
            var users = await repository.GetUsersInRole(roleName);
            return Ok(users);
        }

        [Authorize]
        [HttpGet]
        [Route("isInRole/{userId}/{roleName}")]
        public async Task<IHttpActionResult> IsInRole(string userId, string roleName)
        {
            var response = await repository.IsInRole(userId, roleName);
            return Ok(response);
        }
    }
}
