let AboutOffset = $("#About").offset().top;


$(window).scroll(function () {
    let wScroll = $(window).scrollTop();

    if(wScroll > AboutOffset -50){
        $("#Nav-Scroll").css("backgroundColor" ,"black")
        $("#Nav-Scroll").addClass("pad")
        $("a").css({"color": "rgba(255, 255, 255, 0.5)"});
        // $(".navbar-brand").css("color" , "black");
        
        
        // $(".navbar-brand").addClass("color")
        // $(".navbar-brand").css("color" , "black")
    }else
    {
        $('#Nav-Scroll').css("backgroundColor" , "transparent")
        $("a").css({"color": "rgba(255, 255, 255, 0.5)"});
    }

    
    
})


// $(".menu-logo").click(function () {
//     let mneu= $(".mneu-tap-item").outerWidth();
//     if ($(".mneu-tap-item").css("left")== "0px")
//     {
//         $(".mneu-tap-item").animate({left:`-${mneu}`}, 1000) ;
//     }
     
//     else
//     {
//         $(".mneu-tap-item").animate({left:`0px`}, 1000);
//     }
   
    
// })


// var muWidth = 0,
//     isTrue = !0;

//     $(".menu-logo").click(function () {
//         isTrue
//         ? ($(".mneu-tap-item").addClass(".open-menu").removeClass(".close-menu"),
//         (muWidth = $(".mneu-tap-item").width() - 10),
//         $(".menu").css("left", muWidth),
//         $(".fa-align-justify").toggleClass("fa-times"),
//         $(".nav-tab-menu .item1").animate({ opacity: "1", paddingTop: "25px" }, 1100),
//         $(".nav-tab-menu .item2").animate({ opacity: "1", paddingTop: "25px" }, 1200),
//         $(".nav-tab-menu .item3").animate({ opacity: "1", paddingTop: "25px" }, 1300),
//         $(".nav-tab-menu .item4").animate({ opacity: "1", paddingTop: "25px" }, 1400),

        
//     })


var nvWidth = 0,
    isTrue = !0;
$(".menu-logo").click(function () {
    isTrue
        ? ($(".mneu-tap-item").addClass("open-menu").removeClass("close-menu"),
          (nvWidth = $(".mneu-tap-item").outerWidth() ),
          $(".menu").css("left", nvWidth),
          $(".fa-align-justify").toggleClass("fa-times"),
          $(".mneu-tap-item .item1").animate({ opacity: "1", left: "25px" }, 1100),
          $(".mneu-tap-item .item2").animate({ opacity: "1", left: "25px" }, 1200),
          $(".mneu-tap-item .item3").animate({ opacity: "1", left: "25px" }, 1300),
          $(".mneu-tap-item .item4").animate({ opacity: "1", left: "25px" }, 1400),
          (isTrue = !isTrue))
        : ($(".mneu-tap-item").addClass("close-menu").removeClass("open-menu"),
          $(".fa-align-justify").toggleClass("fa-times"),
          $(".menu").css("left", 0),
          $(".mneu-tap-item li").animate({ opacity: "0", left: "500px" }, 500),
          (isTrue = !isTrue));
          
});





//$(".mneu-tap-item i").css({"color": "black"});