using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieDB.Models
{
    public class Movie
    {
        public int ID { get; set; }

        [Display(Name = "タイトル")]
        public string Title { get; set; }

        [Display(Name ="公開日")]
        [DataType(DataType.Date)] 
        //↑これがあることで、日付フィールドに時刻情報を入力する必要ない＆日付の身が表示される。
        public DateTime ReleaseDate { get; set; }

        [Display(Name = "ジャンル")]
        public string Genre { get; set; }//ジャンル

        [Display(Name = "制作費")]
        public decimal Price { get; set; }

        [Display(Name = "点数")]
        public int Rating { get; set; }
    }
}
