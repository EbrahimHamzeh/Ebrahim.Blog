using Microsoft.EntityFrameworkCore.Migrations;

namespace Ebrahim.Blog.DataLayer.Migrations
{
    public partial class V2020_05_01_2357 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Ip",
                table: "LogItems",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ip",
                table: "LogItems");
        }
    }
}
