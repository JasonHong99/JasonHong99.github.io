//offset the navbar
$(function() {
  var topoffset = 80; //variable for menu height
  //Use smooth scrolling when clicking on navigation
  $('.navbar-nav a').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
});

//presenting the appropiate job tab
//even listener on navbar and if clicked change active element
//grab element, see if it is actively
//change opoacity of associated <P>
$("document").ready(function() {
    $("#jobbtn1").on("click", showJob);
    $("#jobbtn2").on("click", showJob);
    $("#jobbtn3").on("click", showJob);
});

function showJob(){
  var targetNum = this.id.substr(6,1);
  //change button
  $(".job-btns").each(function() {
    if($(this).hasClass("active")){
      $(this).removeClass("active");
    };
  });
  $("#" + this.id).addClass("active");
  //change opacity
  $(".jobs").each(function(index) {
    if(index == (targetNum-1)){
      $(this).fadeTo(300, 1).removeClass("hidden").addClass("exposed");
    }
    else{
      $(this).fadeTo(300, 0.1).removeClass("exposed").addClass("hidden");
    };
  });
}
