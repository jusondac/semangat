// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap
$(document).ready(function(){
  function checkTime(i) {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
  }

  function word(time) {
    if( time >= 10 && time <= 14 ){
      document.getElementById('word').innerHTML = "Selamat Siang Semua" ;
    } else if ( time >= 15 && time <= 17 ) {
      document.getElementById('word').innerHTML = "Selamat Sore Semua" ;
    } else if ( time >= 19 && time <= 23 ) {
      document.getElementById('word').innerHTML = "Selamat Malam Semua" ;
    } else if ( time >= 0 && time <= 3) {
      document.getElementById('word').innerHTML = "Masih Malam" ;
    } else if ( time >= 4 && time <= 9) {
      document.getElementById('word').innerHTML = "Selamat Pagi Semua" ;
    }
  }

  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      word(h);
      var ampm = h >= 12 ? ' pm' : ' am';
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('time').innerHTML = h + " : " + m + " : " + s;
      t = setTimeout(function () {
          startTime()
      }, 500);
  }
  startTime();
  $('span#covid').click(function(){
    $(this).fadeOut(3000)
  });
});
