{
  const header = document.querySelector(".header");
  const lanBt = document.getElementById(".lan-bt");
  const lanList = document.getElementById(".lan-list");

  // 스크롤 배경 추가
  let scTop = 0;
  window.addEventListener("scroll", function () {
    scTop = this.document.documentElement.scrollTop;
    if (scTop > 0) {
      header.classList.add("bg");
    } else {
      header.classList.remove("bg");
    }
  });
}
