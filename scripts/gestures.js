$(document).ready(function() {

  // Page load animation

  $("#pinky").animate({
    "height": "240px",
    "margin-top": "80px"
    }, 1000);
  $("#ring").animate({
    "height": "340px",
    "margin-top": "20px"
    }, 1000);
  $("#middle").animate({
    "height": "360px",
    "margin-top": "0"
    }, 1000);
  $("#index").animate({
    "height": "340px",
    "margin-top": "20px"
    }, 1000);
  $("#thumb").animate({
    "height": "190px",
    "margin-top": "110px"
    }, 1000);

  // Metal animation

  $("#metal").click(function() {
    $("#pinky").animate({
      "height": "440px",
      "margin-top": "50px"
      }, 500);
    $("#ring").animate({
      "height": "340px",
      "margin-top": "190px"
      }, 500);
    $("#middle").animate({
      "height": "360px",
      "margin-top": "170px"
      }, 500);
    $("#index").animate({
      "height": "530px",
      "margin-top": "0px"
      }, 500);
    $("#thumb").animate({
      "height": "190px",
      "margin-top": "280px"
      }, 500);
  });

  // Bird animation

  $("#bird").click(function() {
    $("#pinky").animate({
      "height": "240px",
      "margin-top": "280px"
      }, 500);
    $("#ring").animate({
      "height": "340px",
      "margin-top": "220px"
      }, 500);
    $("#middle").animate({
      "height": "560px",
      "margin-top": "0"
      }, 500);
    $("#index").animate({
      "height": "420px",
      "margin-top": "140px"
      }, 500);
    $("#thumb").animate({
      "height": "190px",
      "margin-top": "310px"
      }, 500);
  });

  // Scout animation

  $("#scout").click(function() {
    $("#pinky").animate({
      "height": "240px",
      "margin-top": "280px"
      }, 500);
    $("#ring").animate({
      "height": "340px",
      "margin-top": "220px"
      }, 500);
    $("#middle").animate({
      "height": "560px",
      "margin-top": "0"
      }, 500);
    $("#index").animate({
      "height": "530px",
      "margin-top": "30px"
      }, 500);
    $("#thumb").animate({
      "height": "190px",
      "margin-top": "310px"
      }, 500);
  });

  // Tea animation

  $("#tea").click(function() {
    $("#pinky").animate({
      "height": "440px",
      "margin-top": "0px"
      }, 500);
    $("#ring").animate({
      "height": "340px",
      "margin-top": "140px"
      }, 500);
    $("#middle").animate({
      "height": "360px",
      "margin-top": "120px"
      }, 500);
    $("#index").animate({
      "height": "340px",
      "margin-top": "140px"
      }, 500);
    $("#thumb").animate({
      "height": "190px",
      "margin-top": "230px"
      }, 500);
  });

  // Fist animation

  $("a").click(function() {
    $("#pinky").animate({
      "height": "240px",
      "margin-top": "80px"
      }, 500);
    $("#ring").animate({
      "height": "340px",
      "margin-top": "20px"
      }, 500);
    $("#middle").animate({
      "height": "360px",
      "margin-top": "0"
      }, 500);
    $("#index").animate({
      "height": "340px",
      "margin-top": "20px"
      }, 500);
    $("#thumb").animate({
      "height": "190px",
      "margin-top": "110px"
      }, 500);
    return false;
  });

  // Button animation

  $("button").hover(
    function() {
      $(this).stop().animate({
        "margin-left": "60px",
        "margin-right": "40px"
        }, 100);
      }, // end mouseover
    function() {
      $(this).stop().animate({
        "margin": "50px"
        }, 100);
      } //end mouseout
  ); // end of hover

}); // end of ready