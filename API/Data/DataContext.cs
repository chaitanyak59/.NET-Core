using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        /*DbSet<EntityName> TableName {get; set;}*/
        public DbSet<AppUser> Users { get; set; } = null!;
    }
}