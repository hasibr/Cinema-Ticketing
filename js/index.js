// initialize_movie_gallery();

// (function(){
//   $('.carousel-showmanymoveone .item').each(function(){
//     var itemToClone = $(this);

//     for (var i=1;i<6;i++) {
//       itemToClone = itemToClone.next();

//       // wrap around if at end of item collection
//       if (!itemToClone.length) {
//         itemToClone = $(this).siblings(':first');
//       }

//       // grab item, clone, add marker class, add to collection
//       itemToClone.children(':first-child').clone()
//         .addClass("cloneditem-"+(i))
//         .appendTo($(this));
//     }
//   });
// }());

// function initialize_movie_gallery() {
//   imageDir = "resources/movie_posters/"
//   galleryItems = [imageDir + "1_coco.jpg",
//                   imageDir + "2_justice_league.jpg",
//                   imageDir + "3_wonder.jpg",
//                   imageDir + "4_thor_ragnarok.jpg",
//                   imageDir + "5_star_wars_the_last_jedi.jpg",
//                   imageDir + "6_murder_on_the_orient_express.jpg",
//                   imageDir + "7_daddys_home_2.jpg",
//                   imageDir + "8_the_star.jpg",
//                   imageDir + "9_lady_bird.jpg",
//                   imageDir + "10_another_wolfcop.jpg",
//                   imageDir + "11_the_disaster_artist.jpg",
//                   imageDir + "12_the_man_who_invented_christmas.jpg",
//                   imageDir + "13_roman_j_israel_esq.jpg",
//                   imageDir + "14_three_billboards_outside_ebbing_missouri.jpg",
//                   imageDir + "15_a_bad_moms_christmas.jpg"];

//   // Create and add carousel items
//   for (var i = 0; i < galleryItems.length; i++) {
//     var item_div = document.createElement("div");
//     item_div.className = "item";
//     if (i == 0) {
//       item_div.className += " active";
//     }
//     var item_div_inner = document.createElement("div");
//     item_div_inner.className = "col-xs-12 col-sm-6 col-md-2";
//     var a = document.createElement("a");
//     a.href = "#";

//     var movie_poster = document.createElement("img");
//     movie_poster.className = "img-responsive";
//     movie_poster.src = galleryItems[i];
//     a.appendChild(movie_poster);
//     var movie_title = document.createElement("h5");
//     movie_title.className = "movie_title";
//     movie_title.innerHTML = "Movie Title"
//     var movie_genre = document.createElement("h6");
//     movie_genre.className = "movie_genre";
//     movie_genre.innerHTML = "Sci-fi / Romance"

//     item_div_inner.appendChild(a);
//     item_div_inner.appendChild(movie_title);
//     item_div_inner.appendChild(movie_genre);
//     item_div.appendChild(item_div_inner);

//     document.getElementById("carousel_items").appendChild(item_div);
//   }
// }

// /*  Function which unhides the movie description <div> and updates it with the
//     movie synopsys and trailer link, is called when an item from gallery is clicked
// */
// $('.img-responsive').click(function() {

//   MyFunction();
//   return false;
// });
