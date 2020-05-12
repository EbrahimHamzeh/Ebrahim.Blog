using Microsoft.EntityFrameworkCore.Migrations;

namespace Ebrahim.Blog.DataLayer.Migrations
{
    public partial class V2020_05_01_1704 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "LogItems");

            migrationBuilder.AddColumn<string>(
                name: "RequestBody",
                table: "LogItems",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RequestHeader",
                table: "LogItems",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RequestMethod",
                table: "LogItems",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RequestBody",
                table: "LogItems");

            migrationBuilder.DropColumn(
                name: "RequestHeader",
                table: "LogItems");

            migrationBuilder.DropColumn(
                name: "RequestMethod",
                table: "LogItems");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "LogItems",
                type: "int",
                nullable: true);
        }
    }
}
