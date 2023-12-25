const navbar = document.getElementById("sticky-nav");

function handleScroll() {
  if (window.scrollY > 0) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.left = '0';
    navbar.style.width = '100%';
    navbar.style.backgroundColor = 'white';
    navbar.style.boxShadow = '0 -2px 10px 0 rgba(0, 0, 0, 0.15)';
    navbar.style.opacity = '0.95';
  } else {
    navbar.style.position = 'static';
    navbar.style.boxShadow = 'none';
    navbar.style.opacity = '1';

  }
}

// Listen for the scroll event and call the handleScroll function
window.addEventListener('scroll', handleScroll);



