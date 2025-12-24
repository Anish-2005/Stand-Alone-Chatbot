// Debounce flag to prevent multiple rapid clicks
let isOpening = false;

// Create animated particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 15;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 60 + 20;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
    
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
    chatbot.style.filter = 'drop-shadow(0 0 20px rgba(102, 126, 234, 0.8))';
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
  
  // Create notification element
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: ${isMobile ? '90px' : '100px'};
    ${isMobile ? 'left: 50%; transform: translateX(-50%);' : 'right: 24px;'}
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: ${isMobile ? '14px 20px' : '16px 24px'};
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    font-weight: 500;
    animation: ${isMobile ? 'slideInUp' : 'slideInRight'} 0.3s ease-out;
    max-width: ${isMobile ? '90%' : '300px'};
    text-align: center;
    font-size: ${isMobile ? '0.95rem' : '1rem'};
  `;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = `${isMobile ? 'slideOutDown' : 'slideOutRight'} 0.3s ease-out`;
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Initialize on page load
window.addEventListener('load', function() {
  createParticles();
});
