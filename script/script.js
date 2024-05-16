$(function(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
  AOS.init(); // 자바스크립트로 init()을 해야 동작한다.
  
  
  // slick
  
  $('.slick_list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
  infinite : true, 	//무한 반복 옵션
  draggable : true, 	//드래그 가능 여부 
  arrows : false,
  responsive: [ // 반응형 웹 구현 옵션
      {  
          breakpoint: 960, //화면 사이즈 960px
          settings: {
              //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
              slidesToShow:3 
          } 
      },
      { 
          breakpoint: 768, //화면 사이즈 768px
          settings: {	
              //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
              slidesToShow:2 
          } 
      }
  ]
  });
  
  
  
  
  // 스크롤탑바 버튼
  $(".up_btn").click(function(){
  $("html,body").animate({scrollTop: 0}, 600);
  });
  
  $(window).scroll(function(){
  
  var $scrollTop = $(this).scrollTop();
  
  if ($scrollTop > 1000) {
    $(".up_btn").css({ opacity: 1, visibility: "visible" });
  } else {
    $(".up_btn").css({ opacity: 0, visibility: "hidden" });
  }
  
  });
  
  
});