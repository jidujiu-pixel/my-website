// 检测 JavaScript
document.body.classList.remove("no-js");

// 汉堡菜单
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 产品筛选
const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.dataset.category;
    productCards.forEach(card => {
      if(card.dataset.category === category || category === "all") {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  });
});

// 视频错误处理
function handleVideoError(video) {
  video.style.display = "none";
}
