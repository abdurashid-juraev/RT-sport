const tabBtns = document.querySelectorAll(".tab__nav-link");
const tabInnerBtns = document.querySelectorAll(".tab__inner-link");

function activeTab(btn) {
  btn.forEach((item) => {
    item.addEventListener("click", () => {
      btn.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
}
activeTab(tabBtns);
activeTab(tabInnerBtns);

const tabContentItems = document.querySelectorAll(".tab__content-item");
tabBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    tabContentItems.forEach((item) => {
      item.classList.remove("active");
    });
    tabContentItems[index].classList.add("active");
  });
});
