<script>
  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Dynamic Highlight for Active Menu Item
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', () => {
      let currentSection = '';
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          if (pageYOffset >= sectionTop - 60) {
              currentSection = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(currentSection)) {
              link.classList.add('active');
          }
      });
  });

  // Toggle Mobile Navigation
  const mobileMenuButton = document.querySelector('.mobile-menu');
  const mobileNav = document.querySelector('nav ul');

  mobileMenuButton.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
  });

  // Theme Menu Functionality: Dark Mode and Font Size Persistence
  document.addEventListener('DOMContentLoaded', () => {
      // Apply dark mode if saved in localStorage
      if (localStorage.getItem('theme') === 'dark') {
          document.body.classList.add('dark-mode');
          document.querySelector('nav').classList.add('dark-mode');
          document.querySelectorAll('.showcase-item').forEach((item) => {
              item.classList.add('dark-mode');
          });
      }

      // Apply font size if saved in localStorage
      const fontSize = localStorage.getItem('fontSize');
      if (fontSize) {
          document.body.classList.add(`${fontSize}-font`);
      }
  });

  // Dark mode toggle button handler
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle?.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.querySelector('nav').classList.toggle('dark-mode');
      document.querySelectorAll('.showcase-item').forEach((item) => {
          item.classList.toggle('dark-mode');
      });

      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Font size adjustment handler
  const fontSizeOptions = document.querySelectorAll('.font-size-option');
  fontSizeOptions.forEach(option => {
      option.addEventListener('click', () => {
          const size = option.dataset.size;
          document.body.classList.remove('small-font', 'medium-font', 'large-font');
          document.body.classList.add(`${size}-font`);
          localStorage.setItem('fontSize', size);
      });
  });
</script>
