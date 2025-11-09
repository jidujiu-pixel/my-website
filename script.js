document.addEventListener('DOMContentLoaded', function(){
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  function showCategory(cat){
    productCards.forEach(card=>{
      card.style.display = card.getAttribute('data-category') === cat ? 'block' : 'none';
    });
  }

  filterBtns.forEach(btn=>{
    btn.addEventListener('click', function(){
      filterBtns.forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.getAttribute('data-category');
      showCategory(cat);
      const el = document.querySelector('#products');
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  if(filterBtns.length>0){
    filterBtns[0].classList.add('active');
    showCategory(filterBtns[0].getAttribute('data-category'));
  }

  // 特性区滚动动画
  const featureCards = document.querySelectorAll('.feature-card');
  function checkFeatures(){
    const triggerBottom = window.innerHeight * 0.85;
    featureCards.forEach(card=>{
      const top = card.getBoundingClientRect().top;
      if(top < triggerBottom){
        card.classList.add('show');
      }
    });
  }
  window.addEventListener('scroll', checkFeatures);
  checkFeatures();
});
