namespace Project_Gmar.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeleteDataFromDB : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Customers", "Name");
            DropColumn("dbo.Customers", "LastName");
            DropColumn("dbo.Customers", "Address");
            DropColumn("dbo.Customers", "Password");
            DropColumn("dbo.Customers", "Date");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Customers", "Date", c => c.DateTime(nullable: false));
            AddColumn("dbo.Customers", "Password", c => c.String());
            AddColumn("dbo.Customers", "Address", c => c.String());
            AddColumn("dbo.Customers", "LastName", c => c.String());
            AddColumn("dbo.Customers", "Name", c => c.String());
        }
    }
}
