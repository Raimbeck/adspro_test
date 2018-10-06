using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace adspro_test.Models
{
    [Table("Changes")]
    public class Change
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public DateTime DateChanged { get; set; }

        public string UserName { get; set; }

        public bool IsAdminChange { get; set; }
    }
}