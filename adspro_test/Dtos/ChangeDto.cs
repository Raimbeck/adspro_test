using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace adspro_test.Dtos
{
    public class ChangeDto
    {
        public Guid? Id { get; set; }

        [Required]
        public string UserName { get; set; }

        public bool IsAdminChange { get; set; }

        [Required]
        public DateTime DateChanged { get; set; }
    }
}