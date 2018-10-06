using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace adspro_test.Models
{
    [Table("Addresses")]
    public class Address
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public Guid StreetId { get; set; }
        public Street Street { get; set; }

        [Required]
        public string PostalCode { get; set; }

        [Required]
        public string City { get; set; }
    }
}