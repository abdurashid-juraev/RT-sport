//-------------VARIABLES-------------------
const tabBtns = document.querySelectorAll(".tab__nav-link");
const tabContentItems = document.querySelectorAll(".tab__content-item");
const tabInnerBtns = document.querySelectorAll(".tab__inner-link");
const tabInnerContentItems = document.querySelectorAll(
  ".tab__inner__content-item"
);
const tabMobileBtn = document.querySelector(".tab__btn-sm");
const tabMobileContent = document.querySelector(".tab__nav");
const tabCloseBtn = document.querySelector(".tab__btn-close");
const body = document.querySelector("body");
//--------------Main-Tab--------------------------------------------------
tabBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    //-----------------Remove-Active-Classes-------------------
    tabMobileContent.classList.remove("active");
    body.classList.remove("shadow");
    tabMobileBtn.classList.remove("active");
    tabBtns.forEach((btn) => btn.classList.remove("active"));
    //--------------------------------------------------------
    item.classList.add("active");
    tabContentItems.forEach((contentItem) =>
      contentItem.classList.remove("active")
    );
    tabContentItems[index].classList.add("active");
  });
});
//--------------Inner-Tab--------------------------------------------------
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

//---------------Mobile-Tab-------------------------------------------------
tabMobileBtn.addEventListener("click", () => {
  tabMobileContent.classList.toggle("active");
  body.classList.add("shadow");
  tabMobileBtn.classList.toggle("active");
});
tabCloseBtn.addEventListener("click", () => {
  tabMobileContent.classList.remove("active");
  body.classList.remove("shadow");
  tabMobileBtn.classList.remove("active");
});
//---------------AOS---------------------------------------------------------
AOS.init();
// window.addEventListener("load", () => {}, { once: true });
