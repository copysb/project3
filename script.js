document.addEventListener('DOMContentLoaded', function() {
  // Book button animation
  const bookBtn = document.querySelector('.book-btn');
  if (bookBtn) {
      bookBtn.addEventListener('click', () => {
          bookBtn.style.transform = 'scale(0.95)';
          setTimeout(() => {
              bookBtn.style.transform = 'scale(1)';
          }, 200);
          alert('Appointment booked! Meow! 🐾');
      });
  }

  // Play button animation
  const playButton = document.querySelector('.play-button');
  if (playButton) {
      playButton.addEventListener('click', () => {
          playButton.style.backgroundColor = '#ff7a3d';
          setTimeout(() => {
              playButton.style.backgroundColor = '#ffc039';
          }, 300);
          alert('Playing a cute cat video! 🎥');
      });
  }

  // Dots animation
  const dots = document.querySelectorAll('.dot');
  let activeDotIndex = 0;
  
  if (dots.length > 0) {
      setInterval(() => {
          dots[activeDotIndex].classList.remove('active');
          activeDotIndex = (activeDotIndex + 1) % dots.length;
          dots[activeDotIndex].classList.add('active');
      }, 3000);
  }

  // Service items animation
  const serviceButtons = document.querySelectorAll('.service-item');
  serviceButtons.forEach(button => {
      button.addEventListener('click', () => {
          button.style.transform = 'scale(0.95)';
          setTimeout(() => {
              button.style.transform = 'scale(1)';
          }, 200);
          alert(`You selected: ${button.querySelector('span').textContent}`);
      });
  });

  // Navigation links animation
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
          link.style.transform = 'translateY(-2px)';
      });
      link.addEventListener('mouseleave', () => {
          link.style.transform = 'translateY(0)';
      });
  });

  // Contact button animation
  const contactBtn = document.querySelector('.contact-btn');
  if (contactBtn) {
      contactBtn.addEventListener('mouseenter', () => {
          contactBtn.style.transform = 'translateY(-3px)';
      });
      contactBtn.addEventListener('mouseleave', () => {
          contactBtn.style.transform = 'translateY(0)';
      });
  }

  // User icon animation
  const userIcon = document.querySelector('.user-icon');
  if (userIcon) {
      userIcon.addEventListener('click', () => {
          userIcon.style.transform = 'scale(1.2)';
          setTimeout(() => {
              userIcon.style.transform = 'scale(1)';
          }, 300);
          alert('User profile clicked! 🐱');
      });
  }

  // Logo animation
  const logo = document.querySelector('.logo');
  if (logo) {
      const logoIcon = logo.querySelector('span');
      logo.addEventListener('mouseenter', () => {
          logoIcon.style.transform = 'rotate(15deg)';
      });
      logo.addEventListener('mouseleave', () => {
          logoIcon.style.transform = 'rotate(0)';
      });
  }

  // Social icons animation
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
          icon.style.transform = 'translateY(-5px) scale(1.1)';
      });
      icon.addEventListener('mouseleave', () => {
          icon.style.transform = 'translateY(0) scale(1)';
      });
      icon.addEventListener('click', (e) => {
          e.preventDefault();
          icon.style.transform = 'scale(0.9)';
          setTimeout(() => {
              icon.style.transform = 'scale(1.1)';
          }, 200);
          
          const platform = icon.querySelector('i').className.split('-')[1];
          alert(`Redirecting to our ${platform} page! 🐾`);
      });
  });

  // Services scroll functionality
  const servicesScroll = document.querySelector('.services-scroll');
  const scrollLeftBtn = document.querySelector('.scroll-left');
  const scrollRightBtn = document.querySelector('.scroll-right');
  
  if (servicesScroll && scrollLeftBtn && scrollRightBtn) {
      const serviceItems = document.querySelectorAll('.service-item');
      let visibleItems = 4;
      
      const updateVisibleItems = () => {
          const containerWidth = document.querySelector('.services-container').offsetWidth;
          const itemWidth = serviceItems[0]?.offsetWidth + 20; // width + gap
          visibleItems = Math.max(1, Math.floor(containerWidth / itemWidth));
      };
      
      const scrollServices = (direction) => {
          const scrollAmount = direction === 'left' ? -1 : 1;
          const itemWidth = serviceItems[0].offsetWidth + 20;
          servicesScroll.scrollBy({
              left: scrollAmount * itemWidth * visibleItems,
              behavior: 'smooth'
          });
      };
      
      const checkScrollButtons = () => {
          const scrollLeft = servicesScroll.scrollLeft;
          const maxScroll = servicesScroll.scrollWidth - servicesScroll.clientWidth;
          
          scrollLeftBtn.disabled = scrollLeft <= 10;
          scrollRightBtn.disabled = scrollLeft >= maxScroll - 10;
      };
      
      scrollLeftBtn.addEventListener('click', () => scrollServices('left'));
      scrollRightBtn.addEventListener('click', () => scrollServices('right'));
      
      servicesScroll.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', () => {
          updateVisibleItems();
          checkScrollButtons();
      });
      
      // Touch events for mobile swipe
      let touchStartX = 0;
      let touchEndX = 0;
      
      servicesScroll.addEventListener('touchstart', (e) => {
          touchStartX = e.changedTouches[0].screenX;
      }, {passive: true});
      
      servicesScroll.addEventListener('touchend', (e) => {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
      }, {passive: true});
      
      const handleSwipe = () => {
          if (touchEndX < touchStartX - 50) {
              scrollServices('right');
          } else if (touchEndX > touchStartX + 50) {
              scrollServices('left');
          }
      };
      
      // Initialize
      updateVisibleItems();
      checkScrollButtons();
      
      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
          if (e.target.tagName === 'BODY') {
              if (e.key === 'ArrowLeft') {
                  scrollServices('left');
              } else if (e.key === 'ArrowRight') {
                  scrollServices('right');
              }
          }
      });
  }
});