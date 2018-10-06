using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace adspro_test.Dtos
{
    public class CustomerDto
    {
        public Guid Id { get; set; }

        [MinLength(1)]
        [MaxLength(255)]
        public string Name { get; set; }

        [MinLength(1)]
        [MaxLength(255)]
        public string Surname { get; set; }

        [MaxLength(255)]
        public string MiddleName { get; set; }

        public string UserId { get; set; }

        public string IssuerId { get; set; }

        public string Notes { get; set; }

        public IEnumerable<EmailDto> Emails { get; set; }

        public IEnumerable<ChangeDto> Changes { get; set; }

        [Required]
        [MinLength(1)]
        public IEnumerable<PhoneDto> Phones { get; set; }

        [Required]
        [MinLength(1)]
        public IEnumerable<AddressDto> Addresses { get; set; }

        public CustomerDto()
        {
            Emails = new List<EmailDto>();
            Changes = new List<ChangeDto>();
            Phones = new PhoneDto[] { };
            Addresses = new AddressDto[] { };
        }
    }
}