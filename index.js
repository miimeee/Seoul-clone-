$(function () {
  // 슬라이드 배너
  // function bannerSlide() {
  //   $(".slide-images").animate({ left: "-2779px" }, 2500, function () {
  //     $(".slide-images").css({ left: "-397px" });
  //     $(".slide-images > li:first-child").insertAfter(".slide-images > li:last-child")
  //   });
  // }
  // setInterval(bannerSlide, 10000);

  let first = 0;
  let maxWidth = -2779;
  let moveWidth = -397;

  function nextBtn() {
    first += moveWidth;
    if (first <= maxWidth) {
      first = 0;
    }
    $(".slide-images").css({ left: first + "px" });
  }

  function prevBtn() {
    first -= moveWidth;
    if (first > 0) {
      first = maxWidth - moveWidth;
    }
    $(".slide-images").css({ left: first + "px" });
  }

  $(".next-btn").click(nextBtn);
  $(".prev-btn").click(prevBtn);

  // related-site
  $(".site-list li").click(function () {
    $(this).children().toggleClass("active");
    $(this).siblings().children().removeClass("active");
  });

  // 외부 영역 클릭 시 active 클래스 제거
  $(document).click(function (event) {
    console.log(event.target.closest(".site-list"));
    if ($(event.target).closest(".site-list").length === 0) {
      $(".site-list li").children().removeClass("active");
    }
  });
});
