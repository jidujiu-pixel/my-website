// 产品筛选
const filterBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');

// 默认显示体育竞技
products.forEach(p=>{
  if(p.dataset.category==='cloud'){p.classList.add('show')} else {p.classList.remove('show')}
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.category;
    products.forEach(p=>{
      if(p.dataset.category === cat){p.classList.add('show')}else{p.classList.remove('show')}
    });
  });
});

// 手机折叠菜单
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', ()=>{
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// 汉堡动画
hamburger.addEventListener('click', ()=>{
  const spans = hamburger.querySelectorAll('span');
  spans[0].classList.toggle('rotate1');
  spans[1].classList.toggle('fade');
  spans[2].classList.toggle('rotate2');
});
