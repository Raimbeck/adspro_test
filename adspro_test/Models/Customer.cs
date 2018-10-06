using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace adspro_test.Models
{
    [Table("Customers")]
    public class Customer
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [StringLength(255, MinimumLength = 1)]
        public string Name { get; set; }

        [StringLength(255, MinimumLength = 1)]
        public string Surname { get; set; }

        [MaxLength(255)]
        public string MiddleName { get; set; }

        public ApplicationUser User { get; set; }    
      
        public string Notes { get; set; }
        
        [Required]
        public ICollection<Address> Addresses { get; set; }

        [Required]
        public ICollection<Phone> Phones { get; set; }

        public ICollection<Email> Emails { get; set; }

        public ICollection<Change> Changes { get; set; }

        public Customer()
        {
            Addresses = new Collection<Address>();
            Phones = new Collection<Phone>();
            Emails = new Collection<Email>();
            Changes = new Collection<Change>();
        }
    }
}