{
  const fixBtn = document.querySelector("#fix-btn");

  fixBtn.addEventListener("click", () => {
    if (fixBtn.classList.contains("active")) {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  });
  document.addEventListener("scroll", () => {
    let scTop = document.documentElement.scrollTop;
    if (scTop > 250) {
      fixBtn.classList.add("active");
      fixBtn.classList.remove("not-active");
    } else {
      fixBtn.classList.remove("active");
      fixBtn.classList.add("not-active");
    }
  });
}
