using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace adspro_test.Models
{
    [Table("Statistics")]
    public class Statistic
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int TotalProfiles { get; set; }

        public int AdminProfiles { get; set; }

        public int CustomerProfiles { get; set; }

        public int ProfilesAdded { get; set; }

        public int ProfilesDeleted { get; set; }
    }
}