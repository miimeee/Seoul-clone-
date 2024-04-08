$(function () {
  // 주요뉴스 & 시민참여 변경구간
  $(".issue-slide01-title").click(function(){
    $(this).parent().addClass("active")
    $(this).parent().siblings(".main-issue-slide02").removeClass("active")
  })
  $(".issue-slide02-title").click(function(){
    $(this).parent().addClass("active")
    $(this).parent().siblings(".main-issue-slide01").removeClass("active")
  })

  // 주요뉴스 & 시민참여 슬라이드
  $(".contents-wrap-inner ul").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  })

  // 슬라이드 배너
  $(".slide-images").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: $(".prev-btn"),
    nextArrow: $(".next-btn"),
  });

  $(".slide-images").on("afterChange", function (event, slick, currentSlide) {
    $(".slide-number p").text(currentSlide + 1);
  });

  $(".stop-btn").click(function () {
    $(".slide-images").slick("slickPause");
    $(this).addClass("on");
    $(this).siblings(".play-btn").removeClass("on");
  });

  $(".play-btn").click(function () {
    $(".slide-images").slick("slickPlay");
    $(this).addClass("on");
    $(this).siblings(".stop-btn").removeClass("on");
  });

  // related-site
  $(".site-list li").click(function () {
    $(this).children().toggleClass("active");
    $(this).siblings().children().removeClass("active");
  });

  // 외부 영역 클릭 시 active 클래스 제거
  $(document).click(function (event) {
    if ($(event.target).closest(".site-list").length === 0) {
      $(".site-list li").children().removeClass("active");
    }
  });
});
