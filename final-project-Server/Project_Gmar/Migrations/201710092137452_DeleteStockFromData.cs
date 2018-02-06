namespace Project_Gmar.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeleteStockFromData : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Items", "Stock");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Items", "Stock", c => c.Long(nullable: false));
        }
    }
}
