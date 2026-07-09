// ===================== Rajwada Royal Dining — Static Build JS =====================
document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Data ---------- */
  var menuData = [
    {
      category: 'STARTERS (Shuruaat)',
      icon: 'flame',
      items: [
        { name: 'Tandoori Galouti Kebab', desc: 'Melt-in-mouth lamb delicacies smoked with cloves and ghee.', price: 'Rs.650' },
        { name: 'Amritsari Fish Tikka', desc: 'River sole marinated in ajwain and stone-ground spices, char-grilled.', price: 'Rs.580' },
        { name: 'Dahi Ke Sholay', desc: 'Crispy bread rolls stuffed with hung curd, bell peppers, and fresh coriander.', price: 'Rs.420' }
      ]
    },
    {
      category: 'MAINS (Shahi Thali)',
      icon: 'utensils',
      items: [
        { name: 'Nihari Gosht', desc: 'Prime cuts of lamb slow-cooked for 12 hours in a rich bone marrow broth.', price: 'Rs.950' },
        { name: 'Murgh Makhani Royale', desc: 'Tender chicken simmered in a velvet tomato and fenugreek reduction.', price: 'Rs.720' },
        { name: 'Dal Bukhara', desc: 'Black lentils stewed overnight over dying embers, finished with white butter.', price: 'Rs.480' },
        { name: 'Kashmiri Rogan Josh', desc: 'Aromatic lamb curry flavored with ratanjot and fennel, straight from the valley.', price: 'Rs.880' }
      ]
    },
    {
      category: 'BREADS & RICE',
      icon: 'wheat',
      items: [
        { name: 'Ulta Tawa Paratha', desc: 'Saffron-laced bread baked on an inverted griddle.', price: 'Rs.180' },
        { name: 'Saffron Biryani (Hyderabadi)', desc: 'Long-grain basmati and marinated meat, sealed with dough and cooked in dum.', price: 'Rs.690' }
      ]
    },
    {
      category: 'DESSERTS',
      icon: 'dessert',
      items: [
        { name: 'Shahi Tukda with Rabri', desc: 'Fried bread steeped in cardamom syrup, crowned with reduced saffron milk.', price: 'Rs.350' },
        { name: 'Gulkand Kulfi', desc: 'Rich traditional ice cream infused with rose petals and pistachios.', price: 'Rs.280' }
      ]
    },
    {
      category: 'THE ROYAL BAR',
      icon: 'wine',
      items: [
        { name: 'Signature Saffron Sour', desc: 'A regal twist on the classic sour with pure Kashmiri saffron.', price: 'Rs.850' },
        { name: 'Rose & Cardamom Fizz', desc: 'A refreshing effervescent blend of floral rose and warm cardamom.', price: 'Rs.700' }
      ]
    }
  ];

  var menuIcons = {
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    utensils: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
    wheat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/></svg>',
    dessert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c-2-3-1-6 0-8"/><path d="M14 20c2-3 1-6 0-8"/><path d="M5 8a7 7 0 0 1 14 0 5 5 0 0 1-5 5H10a5 5 0 0 1-5-5Z"/></svg>',
    wine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/></svg>'
  };

  var experiences = [
    { title: 'Live Ghazal Nights', desc: 'Lose yourself in soulful melodies performed live by maestro vocalists every evening under the glow of crystal chandeliers.', icon: 'music', image: 'images/exp-ghazal.jpg' },
    { title: 'Private Dining Rooms', desc: 'Intimate, frescoed chambers with dedicated butler service, offering complete privacy for your most exclusive gatherings.', icon: 'door', image: 'images/exp-dining.jpg' },
    { title: "Sommelier's Wine Pairing", desc: 'A carefully curated cellar featuring rare vintages, perfectly paired with our robust Indian flavors by our resident sommelier.', icon: 'grape', image: 'images/exp-wine.jpg' }
  ];

  var experienceIcons = {
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    door: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"/></svg>',
    grape: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="14" r="3"/><circle cx="9" cy="9" r="3"/><circle cx="9" cy="19" r="3"/><circle cx="13" cy="14" r="3"/><circle cx="17" cy="9" r="3"/><circle cx="17" cy="19" r="3"/><circle cx="13" cy="4" r="3"/></svg>'
  };

  var galleryImages = [
    'images/gallery-1.jpg',
    'images/gallery-2.jpg',
    'images/gallery-3.jpg',
    'images/gallery-4.jpg',
    'images/gallery-5.jpg',
    'images/gallery-6.jpg'
  ];

  /* ---------- Render Menu ---------- */
  var menuGrid = document.getElementById('menuGrid');
  menuData.forEach(function (section, idx) {
    var el = document.createElement('div');
    el.className = 'menu__category reveal-on-scroll';
    el.style.setProperty('--delay', (idx * 0.1) + 's');
    el.dataset.delay = '';

    var itemsHtml = section.items.map(function (item) {
      return (
        '<div class="menu__item">' +
          '<div class="menu__item-head">' +
            '<h4 class="menu__item-name">' + item.name + '</h4>' +
            '<span class="menu__item-dash"></span>' +
            '<span class="menu__item-price">' + item.price + '</span>' +
          '</div>' +
          '<p class="menu__item-desc">' + item.desc + '</p>' +
        '</div>'
      );
    }).join('');

    el.innerHTML =
      '<div class="menu__category-head">' + menuIcons[section.icon] +
      '<h3 class="menu__category-name">' + section.category + '</h3></div>' +
      '<div class="menu__items">' + itemsHtml + '</div>';

    menuGrid.appendChild(el);
  });

  /* ---------- Render Experience ---------- */
  var experienceGrid = document.getElementById('experienceGrid');
  experiences.forEach(function (exp, idx) {
    var el = document.createElement('div');
    el.className = 'experience__card reveal-on-scroll';
    el.dataset.delay = '';
    el.style.setProperty('--delay', (idx * 0.2) + 's');
    el.innerHTML =
      '<div class="experience__img-wrap gold-ring-hover">' +
        '<img src="' + exp.image + '" alt="' + exp.title + '" loading="lazy" />' +
        '<div class="experience__icon"><span>' + experienceIcons[exp.icon] + '</span></div>' +
      '</div>' +
      '<h3 class="experience__title">' + exp.title + '</h3>' +
      '<p class="experience__desc">' + exp.desc + '</p>';
    experienceGrid.appendChild(el);
  });

  /* ---------- Render Gallery ---------- */
  var galleryGrid = document.getElementById('galleryGrid');
  galleryImages.forEach(function (src, idx) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gallery__item reveal-on-scroll';
    btn.dataset.delay = '';
    btn.style.setProperty('--delay', (idx * 0.1) + 's');
    btn.setAttribute('aria-label', 'Open gallery image ' + (idx + 1));
    btn.innerHTML =
      '<img src="' + src + '" alt="Gallery image ' + (idx + 1) + '" loading="lazy" />' +
      '<div class="gallery__item-overlay"></div>';
    btn.addEventListener('click', function () { openLightbox(src); });
    galleryGrid.appendChild(btn);
  });

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  /* IMPORTANT: called AFTER all JS-rendered items (menu/experience/gallery)
     are already appended to the DOM, so every .reveal-on-scroll is captured. */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.reveal-on-scroll').forEach(function (el) {
    observer.observe(el);
  });

  /* ---------- Smooth scroll for [data-scroll] buttons ---------- */
  document.querySelectorAll('[data-scroll]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.querySelector(btn.getAttribute('data-scroll'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---------- Lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('is-open');
  }
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightboxImg.src = '';
  }
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ---------- Testimonials carousel ---------- */
  var slides = document.querySelectorAll('.testimonials__slide');
  var dotsWrap = document.getElementById('testimonialDots');
  var current = 0;
  var isPaused = false;
  var carousel = document.getElementById('testimonialCarousel');

  slides.forEach(function (_, idx) {
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', 'Go to testimonial ' + (idx + 1));
    if (idx === 0) dot.classList.add('is-active');
    dot.addEventListener('click', function () { goToSlide(idx); });
    dotsWrap.appendChild(dot);
  });
  var dots = dotsWrap.querySelectorAll('button');

  function goToSlide(idx) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = idx;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }

  var testimonialTimer = setInterval(function () {
    if (isPaused) return;
    goToSlide((current + 1) % slides.length);
  }, 6000);

  carousel.addEventListener('mouseenter', function () { isPaused = true; });
  carousel.addEventListener('mouseleave', function () { isPaused = false; });

  /* ---------- Scroll to top button ---------- */
  var scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('is-visible');
    } else {
      scrollTopBtn.classList.remove('is-visible');
    }
  });
  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Toast ---------- */
  var toast = document.getElementById('toast');
  var toastTitle = document.getElementById('toastTitle');
  var toastDesc = document.getElementById('toastDesc');
  var toastTimer = null;

  function showToast(title, desc) {
    toastTitle.textContent = title;
    toastDesc.textContent = desc;
    toast.classList.add('is-visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 4000);
  }

  /* ---------- Reservation form validation ---------- */
  var form = document.getElementById('reservationForm');
  var fields = {
    resName: { el: document.getElementById('resName'), err: document.getElementById('errName'), validate: function (v) { return v.trim().length >= 2 ? '' : 'Name is required'; } },
    resPhone: { el: document.getElementById('resPhone'), err: document.getElementById('errPhone'), validate: function (v) { return v.trim().length >= 10 ? '' : 'Valid phone number is required'; } },
    resDate: { el: document.getElementById('resDate'), err: document.getElementById('errDate'), validate: function (v) { return v ? '' : 'Date is required'; } },
    resTime: { el: document.getElementById('resTime'), err: document.getElementById('errTime'), validate: function (v) { return v ? '' : 'Time is required'; } },
    resGuests: { el: document.getElementById('resGuests'), err: document.getElementById('errGuests'), validate: function (v) { return v ? '' : 'Number of guests is required'; } }
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;
    Object.keys(fields).forEach(function (key) {
      var f = fields[key];
      var msg = f.validate(f.el.value);
      f.err.textContent = msg;
      if (msg) valid = false;
    });

    if (!valid) return;

    var name = fields.resName.el.value.trim();
    showToast('Reservation Confirmed', 'We look forward to hosting you, ' + name + '.');
    form.reset();
    Object.keys(fields).forEach(function (key) { fields[key].err.textContent = ''; });
  });

  /* ---------- Footer copyright year ---------- */
  document.getElementById('copyright').textContent =
    '\u00A9 ' + new Date().getFullYear() + ' Rajwada. All rights reserved.';

});
