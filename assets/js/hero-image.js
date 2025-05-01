const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
  if (window.innerWidth >= 768) return; // Exit if screen is 768px or wider

  const maxScroll = window.innerHeight * 0.55;
  const scrollY = window.scrollY;
  const scrollRatio = Math.min(scrollY / maxScroll, 1);

  const translateX = -40 * scrollRatio;

  heroImage.style.transform = `translateX(${translateX}%)`;
});
