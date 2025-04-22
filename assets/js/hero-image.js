const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
  const maxScroll = window.innerHeight * .55; // adjust how much scroll range affects motion
  const scrollY = window.scrollY;
  const scrollRatio = Math.min(scrollY / maxScroll, 1);

  // Let's say we want to shift the image left by up to 1em + 25% of its width
  // You can tweak this percentage based on the width of your image and design
  const translateX = -40 * scrollRatio; // shift left up to 25%

  heroImage.style.transform = `translateX(${translateX}%)`;
});