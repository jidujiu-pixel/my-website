// 汉堡菜单
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// 产品筛选
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.category;
    productCards.forEach(card=>{
      if(category==='all' || card.dataset.category===category){
        card.classList.add('show');
      }else{
        card.classList.remove('show');
      }
    });
  });
});

// 页面滚动平滑
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
