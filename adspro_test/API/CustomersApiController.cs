using adspro_test.Dtos;
using adspro_test.Interfaces;
using adspro_test.Models;
using adspro_test.Repositories;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace adspro_test.API
{
    [RoutePrefix("api/customers")]
    public class CustomersApiController : ApiController
    {
        private readonly ICustomersRepository repository;
        private readonly IUserRepository userRepository;
        private readonly IStatisticRepository statisticRepository;

        public CustomersApiController()
        {
            repository = new CustomersRepository();
            userRepository = new UserRepository();
            statisticRepository = new StatisticRepository();
        }

        [Authorize(Roles = "Admin, Customer")]
        [HttpGet]
        [Route("{id}", Name = "GetCustomer")]
        public async Task<IHttpActionResult> GetCustomer(Guid id)
        {
            var customer = await repository.GetCustomer(id);
            if (customer == null)
                return NotFound();

            return Ok(Mapper.Map<Customer, CustomerDto>(customer));
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> GetCustomers()
        {
            return Ok(await repository.GetCustomers());
        }

        [Authorize(Roles = "Admin, Customer")]
        [HttpPost]
        [Route("")]
        public async Task<IHttpActionResult> CreateCustomer([FromBody]CustomerDto customerDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var customer = await repository.CreateCustomer(customerDto);
            if (customer == null)
                return BadRequest("Could not create a customer.");

            return CreatedAtRoute("GetCustomer", new { id = customer.Id }, customer);
        }

        [Authorize(Roles = "Admin, Customer")]
        [HttpPut]
        [Route("{id}")]
        public async Task<IHttpActionResult> UpdateCustomer(Guid id, [FromBody]CustomerDto customerDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await repository.UpdateCustomer(id, customerDto);
            return Ok(result);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete]
        [Route("{id}")]
        public async Task<IHttpActionResult> DeleteCustomer(Guid id)
        {
            var result = await repository.DeleteCustomer(id);

            return Ok(result);
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        [Route("statistics")]
        public async Task<IHttpActionResult> GetStatistics()
        {
            return Ok(await statisticRepository.GetStatistic());
        }
        
    }
}