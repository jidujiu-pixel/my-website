// 立即移除no-js类，表示JavaScript已启用
document.body.classList.remove('no-js');

// 错误处理函数
function handleVideoError(videoElement) {
  console.log('视频加载失败，使用静态背景');
  videoElement.style.display = 'none';
}

// 安全的DOM加载检测
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  try {
    // 产品筛选
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');
    
    if (filterBtns.length && products.length) {
      // 默认显示体育竞技
      products.forEach(p => {
        if(p.dataset.category === 'cloud') {
          p.classList.add('show');
        } else {
          p.classList.remove('show');
        }
      });

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.dataset.category;
          products.forEach(p => {
            if(p.dataset.category === cat) {
              p.classList.add('show');
            } else {
              p.classList.remove('show');
            }
          });
        });
      });
    }

    // 手机折叠菜单
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
      });

      // 点击导航链接后关闭移动菜单
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
        });
      });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // 表单提交处理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢您的咨询！我们会尽快与您联系。');
        this.reset();
      });
    }

    console.log('网站初始化成功');
    
  } catch (error) {
    console.error('初始化错误:', error);
  }
}

// 添加全局错误处理
window.addEventListener('error', function(e) {
  console.error('全局错误:', e.error);
});

// 确保页面在加载失败时仍有基本内容显示
window.addEventListener('load', function() {
  document.body.style.visibility = 'visible';
});