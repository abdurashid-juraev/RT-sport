const tabBtns = document.querySelectorAll(".tab__nav-link");
const tabContentItems = document.querySelectorAll(".tab__content-item");
const tabInnerBtns = document.querySelectorAll(".tab__inner-link");
const tabInnerContentItems = document.querySelectorAll(
  ".tab__inner__content-item"
);

tabBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    tabBtns.forEach((btn) => btn.classList.remove("active"));
    item.classList.add("active");
    tabContentItems.forEach((contentItem) =>
      contentItem.classList.remove("active")
    );
    tabContentItems[index].classList.add("active");
  });
});
//----------------------------------------------------------------
tabInnerBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    tabInnerBtns.forEach((btn) => btn.classList.remove("active"));
    item.classList.add("active");
    tabInnerContentItems.forEach((contentItem) =>
      contentItem.classList.remove("active")
    );
    tabInnerContentItems[index].classList.add("active");
  });
});
// tabInnerContentItems.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     tabInnerContentItems.forEach((contentItem) =>
//       contentItem.classList.remove("active")
//     );
//     item.classList.add("active");
//   });
// });
