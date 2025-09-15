export const scrollToProducts = () => {
  const productsSection = document.getElementById('all-products');
  if (productsSection) {
    // Get any fixed header height
    const header = document.querySelector('header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    
    // Calculate the element's position relative to the viewport
    const elementPosition = productsSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 20);

    // Smooth scroll to element with offset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
