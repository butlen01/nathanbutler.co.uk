document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    document.documentElement.classList.add('js-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  document.querySelectorAll('.reveal-stagger').forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      child.style.setProperty('--i', i);
    });
  });

  const counters = document.querySelectorAll('[data-count-to]');
  if (counters.length) {
    const animateCount = (el) => {
      const target = parseFloat(el.dataset.countTo);
      const decimals = el.dataset.countTo.includes('.') ? 1 : 0;
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = decimals ? target.toFixed(decimals) : target.toLocaleString();
      };
      requestAnimationFrame(step);
    };
    if ('IntersectionObserver' in window) {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              cio.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => cio.observe(el));
    }
  }
});
