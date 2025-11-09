// 产品筛选功能
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        productCards.forEach(card => {
            if(card.getAttribute('data-category') === category || category === 'all'){
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 特性区动画
const featureCards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, {threshold: 0.2});

featureCards.forEach(card => observer.observe(card));
