namespace adspro_test.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddStatistics : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Statistics",
                c => new
                    {
                        Id = c.Int(nullable: false),
                        TotalProfiles = c.Int(nullable: false),
                        AdminProfiles = c.Int(nullable: false),
                        CustomerProfiles = c.Int(nullable: false),
                        ProfilesAdded = c.Int(nullable: false),
                        ProfilesDeleted = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);

            Sql("INSERT INTO [dbo].[Statistics] ([Id], [TotalProfiles], [AdminProfiles], [CustomerProfiles], [ProfilesAdded], [ProfilesDeleted]) VALUES (1, 0, 0, 0, 0, 0)");
        }
        
        public override void Down()
        {
            DropTable("dbo.Statistics");
        }
    }
}
