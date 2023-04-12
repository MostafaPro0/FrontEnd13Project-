import { Movies } from "./movies.js";

export class UI {
  constructor() {
    this.eventmenuopen();
    this.eventexitmenu();
    $('#searchedmovies').fadeOut();
    $('#searchedmovies').html('');
  }
  displaymovies(response) {
    try {
      if (response.length > 0) {
        $('#movies').html('');
        for (let i = 0; i < response.length; i++) {
          let moviename = "";
          if (response[i].original_title == undefined)
            moviename = response[i].original_name;
          else
            moviename = response[i].original_title;
          var imgPath = "https://image.tmdb.org/t/p/w500/";
          $('#movies').append(`
      <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="moviescard">
        <div class="cardlayer">
          <div class="moviedetails row m-auto text-center">
          <h3 id="original_title">${moviename}</h3>
            <h4>${response[i].overview}</h4>
            <h3>rate: ${response[i].vote_average}</h3>
            <h3>${response[i].release_date}</h3>
          </div>
        </div>
        <img src="${imgPath + response[i].poster_path}"  onerror="this.onerror=null;this.src='./images/otherimg.png'" alt="">
      </div>
    </div>
      `);
        }
      }
      else {
        $('#movies').html('<h2>Not Movies Founded</h2>');
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  displaysearched(ssssss, value) {
      $('#searchedmovies').fadeOut();
      $('#searchedmovies').html('');
      if (value == null || value == '')
        return;
      if (ssssss.length > 0) {
        $('#searchedmovies').fadeIn();
        let countfoundedmovie = 0;
        for (let i = 0; i < ssssss.length; i++) {
          if (((ssssss[i].original_title !== undefined) && (ssssss[i].original_title.toLowerCase().includes(value.toLowerCase()) == true || ssssss[i].original_title.toLowerCase().indexOf(value.toLowerCase()) == true ))
           || ((ssssss[i].original_name !== undefined && ssssss[i].original_name.toLowerCase().includes(value.toLowerCase()) == true))) {
            countfoundedmovie++
            let moviename = "";
            if (ssssss[i].original_title == undefined)
              moviename = ssssss[i].original_name;
            else
              moviename = ssssss[i].original_title;

            var imgPath = "https://image.tmdb.org/t/p/w500/";
            $('#searchedmovies').append(`
        <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="moviescard">
          <div class="cardlayer">
            <div class="moviedetails row m-auto text-center">
            <h3 id="original_title">${moviename}</h3>
              <h4>${ssssss[i].overview}</h4>
              <h3>rate: ${ssssss[i].vote_average}</h3>
              <h3>${ssssss[i].release_date}</h3>
            </div>
          </div>
          <img src="${imgPath + ssssss[i].poster_path}"  onerror="this.onerror=null;this.src='./images/otherimg.png'" alt="">
        </div>
      </div>
        `);
          }
        }

        $('#searchedmovies').prepend(`<h2>You found ${countfoundedmovie} Movie</h2>`);
        $('#searchedmovies').append(`<h2>this is The End of Search</h2>`);
      }
      else {
        $('#searchedmovies').html('<h2>Not Movies Founded</h2>');
      }
    
  }
  displaynavbar() {
    $('.moloading').fadeIn(1000 / 1, function () {
      $('.moloading').fadeOut(2000 / 1, function () {
        $('.section1bg').animate({ 'height': '100vh' }, 500 / 1, function () {
          $('.section1bg').animate({ 'width': '100%' }, 500 / 1, function () {
            $('.mostafatext').typeWrite({
              speed: 2,
              repeat: true,
              color: 'white'
            })
            $('.maincontent').slideDown(500 / 1, function () {
              $('.openleftmenuexit').html('<i class="fa fa-align-justify"></i>');
              $('.btnopenleftmenu').slideDown(500 / 1, function () {
                $('.totopicon').animate({ 'bottom': '20px' }, 500 / 1, function () {
                  $('.section1').slideDown(500 / 1, function () {
                      $('.section2').slideDown(500 / 1, function () {

                      });
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  eventexitmenu() {
    $('.exitbtn').click(function (e) {
      $('.btnopenleftmenu').animate({ 'margin-left': '0px' })
      $('.openleftmenuexit').html('<i class="fa fa-align-justify"></i>');
      $('.maincontent').animate({ 'margin-left': '0px' })
      $('.section2').animate({ 'padding-left': '0px' })
      $('.leftMenu').animate({ 'width': '0px', 'left': '-200px' }, 100, function () {
        $('.logo').animate({ 'max-width': '0px' }, 100, function () {
          $('.menutitle').slideToggle(100, function () {
            $('.nav-item').slideToggle(100, function () {
            });
          });
        });
      });
    });
  }
  eventmenuopen() {
    $('.openleftmenuexit').click(function (e) {
      if ($('.leftMenu').css("width") == "0px") {
        $('.btnopenleftmenu').animate({ 'margin-left': '200px' })
        $('.openleftmenuexit').html('<i class="fa fa-align-justify fa-times"></i>');
        $('.maincontent').animate({ 'margin-left': '200px' })
        $('.section2').animate({ 'padding-left': '200px' })
        $('.leftMenu').animate({ 'width': '200px', 'left': '0' }, 250, function () {
          $('.logo').animate({ 'max-width': '40px' }, 250, function () {
            $('.menutitle').slideDown(250, function () {
              $('.nav-item').slideDown(250, function () {
              });
            });
          });
        });
      }
      else {
        $('.btnopenleftmenu').animate({ 'margin-left': '0px' })
        $('.openleftmenuexit').html('<i class="fa fa-align-justify"></i>');
        $('.maincontent').animate({ 'margin-left': '0px' })
        $('.section2').animate({ 'padding-left': '0px' })
        $('.leftMenu').animate({ 'width': '0px', 'left': '-200px' }, 100, function () {
          $('.logo').animate({ 'max-width': '0px' }, 100, function () {
            $('.menutitle').slideToggle(100, function () {
              $('.nav-item').slideToggle(100, function () {
              });
            });
          });
        });
      }
    });
  }
}