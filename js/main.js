(function () {
  var t = document.getElementById('mob-toggle'), d = document.getElementById('mob-drawer'),
      o = document.getElementById('mob-overlay'), c = document.getElementById('drawer-close');
  if (t && d && o) {
    var openMenu = function () {
      d.removeAttribute('hidden'); o.classList.add('visible');
      t.setAttribute('aria-expanded', 'true'); t.setAttribute('aria-label', 'Close navigation menu');
      document.documentElement.style.overflow = 'hidden';
    };
    var closeMenu = function () {
      d.setAttribute('hidden', ''); o.classList.remove('visible');
      t.setAttribute('aria-expanded', 'false'); t.setAttribute('aria-label', 'Open navigation menu');
      document.documentElement.style.overflow = '';
    };
    t.addEventListener('click', function () { if (t.getAttribute('aria-expanded') === 'true') { closeMenu(); } else { openMenu(); } });
    if (c) { c.addEventListener('click', closeMenu); }
    o.addEventListener('click', closeMenu);
    d.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeMenu(); } });
    window.addEventListener('resize', function () { if (window.innerWidth > 768) { closeMenu(); } });
  }
  var fc = document.getElementById('float-call'), ft = document.querySelector('.site-footer');
  if (fc && ft && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { es.forEach(function (e) { fc.classList.toggle('hide', e.isIntersecting); }); }).observe(ft);
  }
})();
