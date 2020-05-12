using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Ebrahim.Blog.DataLayer.Migrations
{
    public partial class V2020_05_06_2319 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ip",
                table: "LogItems");

            migrationBuilder.CreateTable(
                name: "RequestProfilers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Guid = table.Column<Guid>(nullable: false),
                    Address = table.Column<string>(nullable: true),
                    RequestHeader = table.Column<string>(nullable: true),
                    RequestBody = table.Column<string>(nullable: true),
                    RequestMethod = table.Column<string>(nullable: true),
                    RequestDate = table.Column<DateTimeOffset>(nullable: false),
                    ResponseBody = table.Column<string>(nullable: true),
                    ResponseHeader = table.Column<string>(nullable: true),
                    ResponseDate = table.Column<DateTimeOffset>(nullable: false),
                    ResponsStatus = table.Column<int>(nullable: false),
                    CreatedByBrowserName = table.Column<string>(maxLength: 1000, nullable: true),
                    CreatedByIp = table.Column<string>(maxLength: 255, nullable: true),
                    CreatedByUserId = table.Column<int>(nullable: true),
                    CreatedDateTime = table.Column<DateTime>(nullable: true),
                    ModifiedByBrowserName = table.Column<string>(maxLength: 1000, nullable: true),
                    ModifiedByIp = table.Column<string>(maxLength: 255, nullable: true),
                    ModifiedByUserId = table.Column<int>(nullable: true),
                    ModifiedDateTime = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RequestProfilers", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RequestProfilers");

            migrationBuilder.AddColumn<string>(
                name: "Ip",
                table: "LogItems",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
