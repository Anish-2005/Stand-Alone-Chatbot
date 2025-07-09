# ChatTicket - Stand-Alone Chatbot Application

<div align="center">
  <img src="Favicon1.ico.png" alt="ChatTicket Logo" width="100" height="100">
  
  **A Sandbox Model for the Major ChatTicket Project**
  
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Dialogflow](https://img.shields.io/badge/Dialogflow-FF9800?style=for-the-badge&logo=dialogflow&logoColor=white)](https://cloud.google.com/dialogflow)
</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Integration](#api-integration)
- [Customization](#customization)
- [Browser Compatibility](#browser-compatibility)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 Overview

ChatTicket is a stand-alone chatbot application that serves as a sandbox model for our major project. This application demonstrates intelligent ticket booking assistance through an AI-powered conversational interface. Built with modern web technologies and integrated with Google's Dialogflow, it provides users with a seamless and intuitive ticket booking experience.

### Purpose
This stand-alone version serves as:
- **Proof of Concept**: Demonstrates core chatbot functionality
- **Development Sandbox**: Safe environment for testing new features
- **Prototype**: Foundation for the larger ChatTicket ecosystem
- **Demo Platform**: Showcases AI capabilities to stakeholders

## ✨ Features

### 🤖 Core Chatbot Features
- **Intelligent Conversation**: Natural language processing for ticket inquiries
- **Multi-intent Support**: Handles various ticket booking scenarios
- **Real-time Responses**: Instant chat interactions
- **Context Awareness**: Maintains conversation context throughout the session

### 🎨 User Interface
- **Modern Design**: Clean, professional interface with gradient backgrounds
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant page load animations and floating chatbot icon
- **Accessible Design**: User-friendly interface following modern UX principles

### 📱 Technical Features
- **Cross-Platform**: Works on all modern browsers
- **Lightweight**: Minimal dependencies for fast loading
- **Secure**: Client-side only implementation for data privacy
- **Scalable**: Easy to extend and customize

## 🛠 Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | HTML5, CSS3, JavaScript | User interface and interactions |
| **AI/ML** | Google Dialogflow | Natural language processing |
| **Styling** | CSS3 with Custom Properties | Responsive design and theming |
| **Assets** | Custom favicon and icons | Branding and visual identity |

## 📁 Project Structure

```
Stand-Alone Chatbot/
├── index.html              # Main application file
├── Favicon1.ico.png         # Application favicon/logo
└── README.md               # This documentation file
```

### File Descriptions

#### `index.html`
The main application file containing:
- **HTML Structure**: Semantic markup for the chatbot interface
- **CSS Styling**: Embedded styles for responsive design and animations
- **JavaScript Logic**: Page animations and Dialogflow integration
- **Dialogflow Integration**: df-messenger component configuration

#### `Favicon1.ico.png`
- Application logo/favicon
- Displayed in browser tabs and as chat icon
- Represents the ChatTicket brand identity

## 🚀 Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for Dialogflow integration)
- Local web server (optional, for development)

### Quick Start

1. **Download the Project**
   ```bash
   # Clone or download the project files
   git clone [repository-url]
   # or download ZIP and extract
   ```

2. **Open the Application**
   ```bash
   # Option 1: Direct file opening
   # Simply double-click index.html
   
   # Option 2: Local server (recommended for development)
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using Live Server (VS Code extension)
   # Right-click index.html > "Open with Live Server"
   ```

3. **Access the Application**
   - Direct: Open `index.html` in your browser
   - Server: Navigate to `http://localhost:8000`

### Development Setup

For developers working on enhancements:

1. **Set up your development environment**
   ```bash
   # Create a new directory for development
   mkdir chatticket-dev
   cd chatticket-dev
   
   # Copy project files
   cp -r "Stand-Alone Chatbot"/* .
   ```

2. **Configure your editor**
   - Install HTML/CSS/JS extensions
   - Set up live reload for development
   - Configure code formatting

## 💻 Usage

### For End Users

1. **Launch the Application**
   - Open the `index.html` file in your web browser
   - Wait for the page to load completely

2. **Interact with the Chatbot**
   - Click on the floating chatbot icon
   - Type your ticket booking queries
   - Follow the chatbot's responses and prompts

3. **Sample Interactions**
   ```
   User: "I need to book a train ticket"
   Bot: "I'd be happy to help you book a train ticket! Where would you like to travel from and to?"
   
   User: "Book a flight from Delhi to Mumbai"
   Bot: "Great! I can help you find flights from Delhi to Mumbai. What's your preferred travel date?"
   ```

### For Developers

1. **Customizing the Interface**
   - Modify CSS variables in `:root` for theme changes
   - Update HTML content for different messaging
   - Adjust responsive breakpoints for different devices

2. **Extending Functionality**
   - Add new intents in Dialogflow console
   - Modify df-messenger configuration
   - Implement additional JavaScript features

## ⚙️ Configuration

### Dialogflow Settings

The chatbot is configured with the following Dialogflow settings:

```html
<df-messenger
  intent="WELCOME"
  chat-title="Chatticket"
  chat-icon="[icon-url]"
  agent-id="f869a013-1615-48d8-a6fb-c732a3460178"
  language-code="en">
</df-messenger>
```

#### Configuration Options

| Parameter | Value | Description |
|-----------|-------|-------------|
| `intent` | WELCOME | Default intent triggered on load |
| `chat-title` | Chatticket | Title displayed in chat window |
| `agent-id` | f869a013... | Unique Dialogflow agent identifier |
| `language-code` | en | Primary language for conversations |

### Customization Options

#### Theme Colors
```css
:root {
  --background-light: #f5f5f5;
  --text-light: #000;
  --primary-color: #1a73e8;
  --background-dark: #2b2b2b;
  --text-dark: #fff;
}
```

#### Responsive Breakpoints
```css
@media screen and (max-width: 600px) {
  /* Mobile-specific styles */
}
```

## 🔗 API Integration

### Dialogflow Integration

The application integrates with Google Dialogflow using the official messenger component:

1. **Bootstrap Script**
   ```html
   <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
   ```

2. **Messenger Component**
   - Handles all chat interactions
   - Manages conversation state
   - Processes natural language inputs

### Future API Integrations

This sandbox model can be extended to include:
- **Payment Gateways**: Stripe, PayPal, Razorpay
- **Booking APIs**: Train booking, flight booking, event tickets
- **Database Integration**: User preferences, booking history
- **Authentication**: User login and session management

## 🎨 Customization

### Visual Customization

1. **Logo and Branding**
   - Replace `Favicon1.ico.png` with your logo
   - Update chat-icon URL in df-messenger
   - Modify color scheme in CSS variables

2. **Content Updates**
   ```html
   <!-- Update main title -->
   <h1 class="landing-title">Your App Name</h1>
   
   <!-- Update description -->
   <p class="landing-subtitle">Your custom description</p>
   
   <!-- Update chatbot header -->
   <div class="chatbot-header">Your Bot Name</div>
   ```

3. **Styling Changes**
   - Modify gradient backgrounds
   - Adjust container dimensions
   - Update animation timings

### Functional Customization

1. **Dialogflow Agent**
   - Train new intents in Dialogflow console
   - Update agent-id in df-messenger
   - Add entity recognition for specific domains

2. **JavaScript Enhancements**
   - Add analytics tracking
   - Implement custom event handlers
   - Create advanced animations

## 🌐 Browser Compatibility

| Browser | Version | Support Status |
|---------|---------|----------------|
| Chrome | 70+ | ✅ Full Support |
| Firefox | 65+ | ✅ Full Support |
| Safari | 12+ | ✅ Full Support |
| Edge | 79+ | ✅ Full Support |
| IE | 11 | ⚠️ Limited Support |

### Mobile Browsers
- iOS Safari 12+
- Android Chrome 70+
- Samsung Internet 10+

## 🔧 Troubleshooting

### Common Issues

1. **Chatbot Not Loading**
   ```
   Issue: df-messenger component doesn't appear
   Solution: Check internet connection and Dialogflow agent status
   ```

2. **Styling Issues**
   ```
   Issue: Layout appears broken on mobile
   Solution: Ensure viewport meta tag is present and CSS media queries are working
   ```

3. **Performance Issues**
   ```
   Issue: Slow page loading
   Solution: Optimize images, use CDN for assets, minimize CSS/JS
   ```

### Debug Mode

Enable debug mode for development:

```html
<df-messenger
  ...
  debug="true">
</df-messenger>
```

### Console Logging

Check browser console for error messages:
- Press F12 to open Developer Tools
- Navigate to Console tab
- Look for errors or warnings

## 🤝 Contributing

We welcome contributions to improve this sandbox model!

### How to Contribute

1. **Fork the Repository**
   ```bash
   git fork [repository-url]
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Follow existing code style
   - Test your changes thoroughly
   - Update documentation if needed

4. **Submit a Pull Request**
   - Describe your changes clearly
   - Include screenshots for UI changes
   - Reference any related issues

### Development Guidelines

- **Code Style**: Follow consistent HTML/CSS/JS formatting
- **Testing**: Test on multiple browsers and devices
- **Documentation**: Update README for significant changes
- **Performance**: Optimize for fast loading times

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

### Project Team
- **Project Lead**: [Anish Seth]
- **Email**: [anishseth0510@gmail.com]
- **GitHub**: [https://github.com/Anish-2005]

### Social Media
- **LinkedIn**: [https://linkedin.com/in/anishseth]

---

<div align="center">
  
  **Built with ❤️ for the future of conversational AI**
  
  *This is a sandbox model for the major ChatTicket project*
  
  ⭐ **Star this repository if you found it helpful!** ⭐
  
</div>

---

## 📊 Project Status

- **Development Stage**: Sandbox/Prototype
- **Current Version**: 1.0.0
- **Last Updated**: July 2025
- **Maintenance**: Active

## 🚀 Future Roadmap

- [ ] Integration with real booking APIs
- [ ] User authentication system
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Mobile app version
- [ ] Voice interaction capabilities

---

*Made with 💻 by the ChatTicket Development Team*
