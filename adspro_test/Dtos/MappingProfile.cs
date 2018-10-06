using adspro_test.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace adspro_test.Dtos
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<Customer, CustomerDto>().ForMember(dt => dt.UserId, opt => opt.MapFrom(c => c.User.Id));
            CreateMap<CustomerDto, Customer>()
                .ForMember(cu => cu.Id, opt => opt.Ignore())
                .ForMember(cu => cu.Changes, opt => opt.Ignore());

            CreateMap<Phone, PhoneDto>();
            CreateMap<PhoneDto, Phone>().ForMember(ph => ph.Id, opt => opt.Ignore());

            CreateMap<Email, EmailDto>();
            CreateMap<EmailDto, Email>().ForMember(em => em.Id, opt => opt.Ignore());

            CreateMap<Street, StreetDto>();
            CreateMap<StreetDto, Street>().ForMember(st => st.Id, opt => opt.Ignore());

            CreateMap<Address, AddressDto>();
            CreateMap<AddressDto, Address>().ForMember(ad => ad.Id, opt => opt.Ignore());

            CreateMap<Change, ChangeDto>();
            CreateMap<ChangeDto, Change>().ForMember(ch => ch.Id, opt => opt.Ignore());
        }
    }
}