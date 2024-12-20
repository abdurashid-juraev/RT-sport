const tabBtns = document.querySelectorAll(".tab__nav-link");

tabBtns.forEach((item) => {
  item.addEventListener("click", () => {
    tabBtns.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
