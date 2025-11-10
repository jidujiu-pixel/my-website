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
