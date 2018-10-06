using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace adspro_test.Dtos
{
    public class StreetDto
    {
        public Guid? Id { get; set; }

        [Required]
        public string Street1{ get; set; }

        public string Street2 { get; set; }
    }
}