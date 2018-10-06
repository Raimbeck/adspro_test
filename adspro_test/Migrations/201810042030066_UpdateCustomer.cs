namespace adspro_test.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateCustomer : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Customers", "User_Id", c => c.String(nullable: false, maxLength: 128));
            AddColumn("dbo.AspNetUsers", "CustomerId", c => c.Guid());
            CreateIndex("dbo.Customers", "User_Id");
            AddForeignKey("dbo.Customers", "User_Id", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Customers", "User_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Customers", new[] { "User_Id" });
            DropColumn("dbo.AspNetUsers", "CustomerId");
            DropColumn("dbo.Customers", "User_Id");
        }
    }
}
