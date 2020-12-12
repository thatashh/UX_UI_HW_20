// Side NavBar
function openNav() {
  document.getElementById("mySidenav").style.width = "700px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// Anchor Scroll
$(document).ready(function() {

var scrollLink = $('.scroll');

scrollLink.click(function(e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $(this.hash).offset().top
  }, 1100);
});

})
// AOS Animations
AOS.init({
duration: 1200,
})

