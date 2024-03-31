$(function () {
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
