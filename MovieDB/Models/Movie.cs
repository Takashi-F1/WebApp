using System;
using System.ComponentModel.DataAnnotations;

namespace MovieDB.Models
{
    public class Movie
    {
        public int ID { get; set; }
        public string Title { get; set; }

        [DataType(DataType.Date)] 
        //↑これがあることで、日付フィールドに自国情報を入力する必要ない＆日付の身が表示される。
        public DateTime ReleaseDate { get; set; }
        public string Genre { get; set; }//ジャンル
        public decimal Price { get; set; }
    }
}
