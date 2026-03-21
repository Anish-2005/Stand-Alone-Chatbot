# Contributing Guide

Thanks for contributing to the ChatTicket Stand-Alone Chatbot project.

## Contribution Principles
- Keep PRs focused on a single concern.
- Preserve existing behavior unless the change is intentional and documented.
- Prioritize readability and maintainability.
- Update docs when behavior, structure, or setup changes.

## Development Workflow
1. Fork the repository.
2. Clone your fork locally.
3. Create a branch from `main`.
4. Implement and validate your changes.
5. Open a pull request with clear context and impact.

## Branch Naming
Use one of the following patterns:
- `feature/<short-description>`
- `fix/<short-description>`
- `docs/<short-description>`
- `refactor/<short-description>`

Examples:
- `feature/theme-toggle-a11y`
- `fix/mobile-chat-button-spacing`
- `docs/readme-refresh`

## Local Run
Use a static server:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## Code Standards
- HTML: Use semantic elements and clear attribute naming.
- CSS: Reuse design tokens and keep responsive behavior intact.
- JavaScript: Prefer small named functions and avoid unnecessary dependencies.
- Accessibility: Keep interactive controls keyboard accessible and labeled.

## Pull Request Checklist
- [ ] Branch is rebased or merged with latest target branch.
- [ ] Changes are scoped and intentional.
- [ ] UI validated in both light and dark mode.
- [ ] Layout validated for desktop and mobile widths.
- [ ] No new console errors or warnings.
- [ ] Documentation updated where required.

## Commit Message Guidance
Use concise, imperative commit messages.

Examples:
- `Add persistent dark mode toggle`
- `Refine topbar spacing for mobile`
- `Update README with new setup instructions`

## Issue Reports
When opening an issue, include:
- Expected behavior.
- Actual behavior.
- Reproduction steps.
- Browser and device details.
- Screenshots or recordings if available.
