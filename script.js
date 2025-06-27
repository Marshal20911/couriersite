document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Tracking form submission
  const trackingForm = document.getElementById('tracking-form');
  const trackingResult = document.getElementById('tracking-result');
  
  if (trackingForm) {
    trackingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const trackingNumber = document.getElementById('tracking-number').value.trim();
      
      // Simulate tracking lookup
      if (trackingNumber) {
        // In a real app, you would make an API call here
        simulateTrackingLookup(trackingNumber);
      }
    });
  }

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (name && email && message) {
        // In a real app, you would send this data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      }
    });
  }

  // Login/Register button functionality
  const loginBtn = document.querySelector('.btn-login');
  const registerBtn = document.querySelector('.btn-register');
  
  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      alert('Login functionality would be implemented here.');
    });
  }
  
  if (registerBtn) {
    registerBtn.addEventListener('click', function() {
      alert('Registration functionality would be implemented here.');
    });
  }

  // Pricing plan selection
  document.querySelectorAll('.pricing-card button').forEach(button => {
    button.addEventListener('click', function() {
      const plan = this.closest('.pricing-card').querySelector('h3').textContent;
      alert(`You selected the ${plan} plan. This would proceed to checkout in a real application.`);
    });
  });

  // Function to simulate tracking lookup
  function simulateTrackingLookup(trackingNumber) {
    // Show loading state
    trackingResult.innerHTML = '<p>Looking up tracking information...</p>';
    trackingResult.style.display = 'block';
    
    // Simulate API delay
    setTimeout(() => {
      // Generate random status for demo purposes
      const statuses = [
        'Package is in transit',
        'Package out for delivery',
        'Package delivered',
        'Package delayed',
        'Package at local facility'
      ];
      
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      const randomLocation = ['New York', 'Los Angeles', 'Chicago', 'Miami', 'Dallas'][Math.floor(Math.random() * 5)];
      const randomDate = new Date();
      randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 5));
      
      trackingResult.innerHTML = `
        <h3>Tracking Results for: ${trackingNumber}</h3>
        <div class="tracking-details">
          <p><strong>Status:</strong> ${randomStatus}</p>
          <p><strong>Last Location:</strong> ${randomLocation}</p>
          <p><strong>Last Update:</strong> ${randomDate.toLocaleString()}</p>
          <p><strong>Estimated Delivery:</strong> ${new Date(randomDate.getTime() + (2 * 24 * 60 * 60 * 1000)).toLocaleDateString()}</p>
        </div>
      `;
    }, 1500);
  }
});
