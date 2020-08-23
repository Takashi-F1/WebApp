using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
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

        #region 検索用プロパティ
        //SearchString：ユーザーが検索テクストボックスに入力した値が入る
        [BindProperty(SupportsGet = true)]
        public string SearchString { get; set; }

        public SelectList Genres { get; set; }

        //ユーザーが選択したジャンルが入る。
        [BindProperty(SupportsGet = true)]
        public string MovieGenre { get; set; }
        #endregion

        public async Task OnGetAsync()
        {
            var movies = from m in _context.Movie
                         select m;
            if (!string.IsNullOrEmpty(SearchString))
            {
                movies = movies.Where(s => s.Title.Contains(SearchString));
            }
            if (!string.IsNullOrEmpty(MovieGenre))
            {
                movies = movies.Where(x => x.Genre==MovieGenre);
            }

            Movie = await movies.ToListAsync();
            //Movie = await _context.Movie.ToListAsync();
            var genreList = await _context.Movie.OrderBy(m => m.Genre)
                                                .Select(m => m.Genre)
                                                .Distinct()
                                                .ToListAsync();
            Genres = new SelectList(genreList);
        }
    }
}
