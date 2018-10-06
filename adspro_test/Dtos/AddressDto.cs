using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace adspro_test.Dtos
{
    public class AddressDto
    {
        public Guid? Id { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public string PostalCode { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public StreetDto Street { get; set; }
    }
}