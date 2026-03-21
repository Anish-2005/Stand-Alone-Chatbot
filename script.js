// Debounce flag to prevent multiple rapid clicks
let isOpening = false;
let activeNotification = null;
let resizeTimer;
let isThemeAnimating = false;

function getStoredTheme() {
  try {
    return localStorage.getItem('theme');
  } catch (error) {
    return null;
  }
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setStoredTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    // Ignore write errors in restricted environments.
  }
}

function getThemeAnimationSettings(triggerElement) {
  const fallbackButton = document.getElementById('themeToggle');
  const source = triggerElement || fallbackButton;
  const width = window.innerWidth;
  const height = window.innerHeight;

  let originX = width - 30;
  let originY = 30;

  if (source && typeof source.getBoundingClientRect === 'function') {
    const rect = source.getBoundingClientRect();
    originX = rect.left + rect.width / 2;
    originY = rect.top + rect.height / 2;
  }

  const maxDistance = Math.max(
    Math.hypot(originX, originY),
    Math.hypot(width - originX, originY),
    Math.hypot(originX, height - originY),
    Math.hypot(width - originX, height - originY)
  );

  return {
    x: Math.round(originX),
    y: Math.round(originY),
    radius: Math.ceil(maxDistance)
  };
}

function setThemeTransitionVars(triggerElement) {
  const settings = getThemeAnimationSettings(triggerElement);
  const root = document.documentElement;

  root.style.setProperty('--theme-switch-x', `${settings.x}px`);
  root.style.setProperty('--theme-switch-y', `${settings.y}px`);
  root.style.setProperty('--theme-switch-radius', `${settings.radius}px`);
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);

  const toggleButton = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');

  if (themeIcon) {
    themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
  }

  if (themeLabel) {
    themeLabel.textContent = isDark ? 'Light' : 'Dark';
  }

  if (toggleButton) {
    toggleButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

function animateThemeChange(nextTheme, triggerElement) {
  if (isThemeAnimating) return;

  const root = document.documentElement;
  const toggleButton = document.getElementById('themeToggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  isThemeAnimating = true;
  setThemeTransitionVars(triggerElement);

  if (toggleButton) {
    toggleButton.classList.add('is-switching');
  }

  const finalize = function () {
    root.classList.remove('theme-transitioning', 'theme-transition-fallback');
    if (toggleButton) {
      toggleButton.classList.remove('is-switching');
    }
    isThemeAnimating = false;
  };

  if (reducedMotion) {
    applyTheme(nextTheme);
    setStoredTheme(nextTheme);
    finalize();
    return;
  }

  if (typeof document.startViewTransition === 'function') {
    try {
      root.classList.add('theme-transitioning');
      const transition = document.startViewTransition(function () {
        applyTheme(nextTheme);
      });

      setStoredTheme(nextTheme);
      transition.finished.catch(function () {
        // Ignore transition runtime errors and keep final theme state.
      }).finally(finalize);
      return;
    } catch (error) {
      root.classList.remove('theme-transitioning');
      // Fall back to CSS-only animation below.
    }
  }

  root.classList.add('theme-transition-fallback');
  applyTheme(nextTheme);
  setStoredTheme(nextTheme);
  setTimeout(finalize, 520);
}

function initTheme() {
  const savedTheme = getStoredTheme();
  const initialTheme = savedTheme || getSystemTheme();
  applyTheme(initialTheme);

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const onSystemThemeChange = function (event) {
    if (!getStoredTheme()) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  };

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', onSystemThemeChange);
  } else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(onSystemThemeChange);
  }
}

function toggleTheme(event) {
  const isCurrentlyDark = document.documentElement.classList.contains('dark');
  const nextTheme = isCurrentlyDark ? 'light' : 'dark';
  const triggerElement = event && event.currentTarget ? event.currentTarget : document.getElementById('themeToggle');
  animateThemeChange(nextTheme, triggerElement);
}

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
    const isDark = document.documentElement.classList.contains('dark');
    chatbot.style.filter = isDark
      ? 'drop-shadow(0 0 18px rgba(139, 92, 246, 0.58))'
      : 'drop-shadow(0 0 18px rgba(79, 70, 229, 0.52))';
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
  initTheme();
  createParticles();
});

window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(createParticles, 180);
});
