using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace adspro_test.Dtos
{
    public class UserDto
    {
        public string UserId { get; set; }
        public string Email { get; set; }
        public Guid? CustomerId { get; set; }
        public bool IsAdmin { get; set; }
    }
}