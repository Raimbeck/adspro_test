namespace adspro_test.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedAdmins : DbMigration
    {
        public override void Up()
        {
            Sql(@"
                INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'082c80a7-64c9-4e7e-a237-1f3aea240140', N'admin3@adspro.com', 0, N'AGtJfO0yWEPY9WgBZDs4vohzfu2jW40b3uBsEeBL8xdTMIOq0r2U+MhkEC3Kd0Gkqg==', N'6d6c5660-bf6d-4b36-af2a-7617e6e7cdef', NULL, 0, 0, NULL, 1, 0, N'admin3@adspro.com')
                INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'1d7850ed-7046-4e6e-9898-657661ddcc70', N'admin1@adspro.com', 0, N'AAc6ywRT5lrHj+IQkWKe2qzXlhz9YAvFADYbc+KZTxoKZGITHe36oiCOx9B0hOgBXg==', N'd48d666a-b2a0-473f-b6cb-0d0bc2d517bd', NULL, 0, 0, NULL, 1, 0, N'admin1@adspro.com')
                INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'85929ba5-f9d5-4b2e-b7fc-d85f13019ae6', N'admin2@adspro.com', 0, N'AEpCrNQ5ZjlyYAm6pqCFppoRIS5iYOl77cH4icfSPGNS+N1RQfGdUPJanAcFn6AZpA==', N'ec1f6d8c-b54b-433a-8041-bee0bcad87d5', NULL, 0, 0, NULL, 1, 0, N'admin2@adspro.com')

                INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'208856f3-cbbd-4ddd-8ba3-5b792b077c52', N'Admin')
                INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'd9d8290c-ba24-4ff9-add3-4a7faa52df8c', N'Customer')

                INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'082c80a7-64c9-4e7e-a237-1f3aea240140', N'208856f3-cbbd-4ddd-8ba3-5b792b077c52')
                INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'1d7850ed-7046-4e6e-9898-657661ddcc70', N'208856f3-cbbd-4ddd-8ba3-5b792b077c52')
                INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'85929ba5-f9d5-4b2e-b7fc-d85f13019ae6', N'208856f3-cbbd-4ddd-8ba3-5b792b077c52')
            ");
        }
        
        public override void Down()
        {
        }
    }
}
