namespace adspro_test.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddChange : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Changes",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        DateChanged = c.DateTime(nullable: false),
                        UserName = c.String(),
                        IsAdminChange = c.Boolean(nullable: false),
                        Customer_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Customers", t => t.Customer_Id)
                .Index(t => t.Customer_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Changes", "Customer_Id", "dbo.Customers");
            DropIndex("dbo.Changes", new[] { "Customer_Id" });
            DropTable("dbo.Changes");
        }
    }
}
