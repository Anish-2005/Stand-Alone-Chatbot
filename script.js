// Debounce flag to prevent multiple rapid clicks
let isOpening = false;
let activeNotification = null;
let resizeTimer;

// Create animated particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;

  particlesContainer.innerHTML = '';
  const particleCount = window.innerWidth <= 768 ? 8 : 14;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 36 + 12;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 12 + 's';
    particle.style.animationDuration = (Math.random() * 8 + 16) + 's';
    
    particlesContainer.appendChild(particle);
  }
}

// Open chatbot programmatically
function openChatbot() {
  // Prevent multiple rapid calls
  if (isOpening) return;
  isOpening = true;
  
  const chatbot = document.querySelector('df-messenger');
  const isMobile = window.innerWidth <= 768;
  
  // On mobile, just guide users to tap the icon directly
  // Programmatic opening is blocked by Dialogflow on mobile
  if (isMobile) {
    showNotification('Tap the chat icon to open');
    setTimeout(() => { isOpening = false; }, 1000);
    return;
  }
  
  // Desktop: try programmatic opening
  if (chatbot) {
    try {
      setTimeout(() => {
        const shadowRoot = chatbot.shadowRoot;
        if (shadowRoot) {
          const button = shadowRoot.querySelector('button') ||
                       shadowRoot.querySelector('.df-messenger-chat-bubble');
          
          if (button) {
            button.click();
            showNotification('Chatbot opened!');
          } else {
            showNotification('Click the chat icon in the corner');
            highlightChatbot();
          }
        } else {
          showNotification('Click the chat icon in the corner');
          highlightChatbot();
        }
        setTimeout(() => { isOpening = false; }, 1000);
      }, 150);
    } catch (error) {
      showNotification('Click the chat icon in the corner');
      highlightChatbot();
      setTimeout(() => { isOpening = false; }, 1000);
    }
  } else {
    setTimeout(() => { isOpening = false; }, 1000);
  }
}

// Highlight chatbot with animation and scroll into view
function highlightChatbot() {
  const chatbot = document.querySelector('df-messenger');
  if (chatbot) {
    // Scroll to make chatbot visible if needed
    chatbot.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Add pulsing animation
    chatbot.style.animation = 'pulse 0.6s ease-in-out 4';
    
    // Add a glow effect
    chatbot.style.filter = 'drop-shadow(0 0 18px rgba(13, 59, 102, 0.55))';
    setTimeout(() => {
      chatbot.style.filter = '';
    }, 2400);
  }
}

// Scroll to features section
function scrollToFeatures() {
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Add a brief highlight effect
    setTimeout(() => {
      featuresSection.style.transition = 'transform 0.3s ease';
      featuresSection.style.transform = 'scale(1.02)';
      setTimeout(() => {
        featuresSection.style.transform = 'scale(1)';
      }, 300);
    }, 500);
  }
}

// Show notification function
function showNotification(message) {
  const isMobile = window.innerWidth <= 768;

  if (activeNotification) {
    activeNotification.remove();
    activeNotification = null;
  }

  const notification = document.createElement('div');
  notification.className = `toast${isMobile ? ' mobile' : ''}`;
  notification.textContent = message;
  activeNotification = notification;
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = `${isMobile ? 'slideOutDown' : 'slideOutRight'} 0.24s ease-out`;
    setTimeout(() => {
      notification.remove();
      if (activeNotification === notification) {
        activeNotification = null;
      }
    }, 240);
  }, 3000);
}

// Initialize on page load
window.addEventListener('load', function() {
  createParticles();
});

window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(createParticles, 180);
});
