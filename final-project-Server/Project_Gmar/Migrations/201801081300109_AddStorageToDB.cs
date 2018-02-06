namespace Project_Gmar.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddStorageToDB : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Storages",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        ItemName = c.String(),
                        StorageItem = c.Long(nullable: false),
                        Category = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Storages");
        }
    }
}
