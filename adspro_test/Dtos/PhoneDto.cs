﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace adspro_test.Dtos
{
    public class PhoneDto
    {
        public Guid? Id { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public string Value { get; set; }
    }
}