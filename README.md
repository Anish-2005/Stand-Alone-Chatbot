# ChatTicket Stand-Alone Chatbot

<div align="center">
  <img src="https://chatticket.vercel.app/chat-ticket-logo.svg" alt="ChatTicket Logo" width="96" height="96" />
  <h3>Production-style chatbot sandbox for validating Dialogflow ticketing journeys</h3>

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)](https://developer.mozilla.org/docs/Web/JavaScript)
  [![Dialogflow](https://img.shields.io/badge/Dialogflow-Messenger-FF9800?style=for-the-badge&logo=googlecloud&logoColor=white)](https://cloud.google.com/dialogflow)
  [![License: MIT](https://img.shields.io/badge/License-MIT-111827?style=for-the-badge)](./LICENSE)
</div>

## Overview
This repository is a static, standalone ChatTicket chatbot experience used as a sandbox for UI and conversational UX validation. It provides a branded interface, integrated Dialogflow Messenger widget, and responsive layout that works across modern devices.

## Live Demo
- Primary app: `https://chatticket.vercel.app/`

## Feature Snapshot
- Professional landing interface aligned with the ChatTicket brand theme.
- Dialogflow Messenger integration with preconfigured assistant settings.
- Theme support: dark/light mode toggle in top navigation.
- Theme support: auto-detect system preference on first load.
- Theme support: persist user preference via `localStorage`.
- Responsive layout tuned for desktop and mobile.
- Lightweight architecture with no build step required.

## Tech Stack
| Layer | Technology | Purpose |
|---|---|---|
| Markup | HTML5 | Semantic structure and chatbot shell |
| Styling | CSS3 | Design tokens, responsive layout, light/dark themes |
| Interaction | Vanilla JavaScript | Theme state, UI interactions, notifications |
| Conversational AI | Dialogflow Messenger | Embedded assistant widget |

## Project Structure
```text
Stand-Alone Chatbot/
|-- index.html        # Main markup and Dialogflow embed
|-- styles.css        # Visual system, layout, light/dark themes
|-- script.js         # Interactions, theme toggle, notifications
|-- CONTRIBUTING.md   # Contribution process and standards
|-- LICENSE           # MIT license
`-- README.md         # Documentation
```

## Quick Start
1. Clone the repository:
```bash
git clone <your-repo-url>
cd "Stand-Alone Chatbot"
```

2. Run with a static server:
```bash
python -m http.server 8000
```

3. Open in your browser:
```text
http://localhost:8000
```

You can open `index.html` directly, but serving through a local server is recommended for consistent behavior.

## Dialogflow Configuration
The assistant is configured in [index.html](./index.html) using `df-messenger`:

```html
<df-messenger
  intent="WELCOME"
  chat-title="ChatTicket Assistant"
  chat-icon="https://www.pngkit.com/png/full/502-5023267_itpalooza-is-a-not-for-profit-community-driven.png"
  agent-id="f869a013-1615-48d8-a6fb-c732a3460178"
  language-code="en">
</df-messenger>
```

To point to a different bot, update:
- `agent-id`
- `chat-title`
- `chat-icon`

## Branding and Theming
- Favicon and nav logo source: `https://chatticket.vercel.app/chat-ticket-logo.svg`
- Theme toggle is in the top bar.
- Dark mode styling is based on `html.dark` in [styles.css](./styles.css).

## Browser Support
| Browser | Support |
|---|---|
| Chrome (latest) | Yes |
| Edge (latest) | Yes |
| Firefox (latest) | Yes |
| Safari (latest) | Yes |

## Contributing
Please follow [CONTRIBUTING.md](./CONTRIBUTING.md) for branch naming, code standards, and pull request expectations.

## License
This project is licensed under the [MIT License](./LICENSE).

## Maintainer
- Name: Anish Seth
- Email: `anishseth0510@gmail.com`
- GitHub: `https://github.com/Anish-2005`
