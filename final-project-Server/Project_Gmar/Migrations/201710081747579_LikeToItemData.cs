namespace Project_Gmar.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LikeToItemData : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Items", "Like", c => c.Long(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Items", "Like");
        }
    }
}
