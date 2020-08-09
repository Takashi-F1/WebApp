using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using MovieDB.Data;
using MovieDB.Models;

namespace MovieDB.Pages.Movies
{
    public class IndexModel : PageModel
    {
        private readonly MovieDB.Data.MovieDBContext _context;

        public IndexModel(MovieDB.Data.MovieDBContext context)
        {
            _context = context;
        }

        public IList<Movie> Movie { get;set; }

        public async Task OnGetAsync()
        {
            Movie = await _context.Movie.ToListAsync();
        }
    }
}
