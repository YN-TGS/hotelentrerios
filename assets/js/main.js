/**
 * Hotel Entre Rios - main.js
 * Comportamiento UI: navbar, scroll, galería lightbox, formulario, animaciones
 */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // NAVBAR: scroll effect
  // ============================================================
  const navbar = document.getElementById('navbar');

  const updateNavbar = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // Cerrar menú mobile al hacer clic en un link
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarMain');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  // Active link según sección visible
  const sections = document.querySelectorAll('section[id]');

  const activateNavLink = () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(sec => {
      const top    = sec.offsetTop;
      const height = sec.offsetHeight;
      const id     = sec.getAttribute('id');
      const link   = document.querySelector(`.navbar-nav a[href="#${id}"]`);
      if (link) {
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', activateNavLink, { passive: true });

  // ============================================================
  // BACK TO TOP
  // ============================================================
  const backBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  }, { passive: true });

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ============================================================
  // INTERSECTION OBSERVER: fade-in-up
  // ============================================================
  const fadeEls = document.querySelectorAll('.fade-in-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // ============================================================
  // LIGHTBOX
  // ============================================================
  const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
  const lightbox      = document.getElementById('lightbox');
  const lbImg         = document.getElementById('lbImg');
  const lbCounter     = document.getElementById('lbCounter');
  let currentIndex    = 0;

  const openLightbox = (index) => {
    currentIndex = index;
    lbImg.src = galleryImages[index].src;
    lbCounter.textContent = `${index + 1} / ${galleryImages.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lbImg.src = '';
  };

  const prevImage = () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lbImg.src = galleryImages[currentIndex].src;
    lbCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
  };

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lbImg.src = galleryImages[currentIndex].src;
    lbCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
  };

  // Eventos de galería
  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  document.getElementById('lbClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lbPrev')?.addEventListener('click', prevImage);
  document.getElementById('lbNext')?.addEventListener('click', nextImage);

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Teclado
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  // Touch swipe en lightbox
  let touchStartX = 0;
  lightbox?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  lightbox?.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextImage();
      else          prevImage();
    }
  }, { passive: true });

  // ============================================================
  // FORMULARIO DE CONTACTO (simulado)
  // ============================================================
  const contactForm = document.getElementById('contactForm');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn       = contactForm.querySelector('[type="submit"]');
    const original  = btn.innerHTML;

    btn.disabled  = true;
    btn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Enviando...';

    setTimeout(() => {
      btn.innerHTML = '<i class="bi bi-check-lg me-2"></i>¡Mensaje enviado!';
      btn.style.background = 'var(--color-secondary)';

      setTimeout(() => {
        btn.disabled  = false;
        btn.innerHTML = original;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    }, 1800);
  });

  // ============================================================
  // HERO: cambio dinámico de fondo
  // ============================================================
  const heroImages = [
    'https://www.hotelentrerios.cl/assets/imgs/galeria/hotel/HOTEL-001.JPG',
    'https://www.hotelentrerios.cl/assets/imgs/galeria/hotel/HOTEL-038.JPG',
    'https://www.hotelentrerios.cl/assets/imgs/galeria/hotel/HOTEL-028.JPG',
    'https://www.hotelentrerios.cl/assets/imgs/galeria/hotel/HOTEL-019.JPG',
  ];

  const heroBg = document.querySelector('.hero-bg');
  let heroIdx  = 0;

  if (heroBg && heroImages.length > 1) {
    setInterval(() => {
      heroIdx = (heroIdx + 1) % heroImages.length;
      heroBg.style.opacity = '0.1';
      setTimeout(() => {
        heroBg.style.backgroundImage = `url('${heroImages[heroIdx]}')`;
        heroBg.style.opacity = '0.45';
      }, 600);
    }, 5000);
  }

  // ============================================================
  // AÑO ACTUAL EN FOOTER
  // ============================================================
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
