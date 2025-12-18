# AGENTS.md

## Project Overview
This project is a promotional static site for the **Federated Social Media Pilot**, a proposal for the Public Works Innovation Challenge. The goal is to advocate for Public Works to adopt decentralized, open-source social media platforms (Fediverse/Mastodon) for official communication.

## context & Goals
- **"Postable" Service Concept**: The proposed services are for **internal** publishing only. We are NOT building a public social network for citizens to join. We are building the *broadcasting* infrastructure for the County.
    - **In Scope**: Hosting ActivityPub/ATProtocol services for authorized County staff (authenticated via Entra/LDAP) to publish official updates.
    - **Out of Scope**: Hosting public accounts for citizens. Citizens follow us from their own external instances.
- **Long-term Vision**: Ideally, the Internal Services Department (ISD) would manage this infrastructure, offering it as a service to other LA County agencies to publish from `lacounty.gov` domains.

## Technology Stack
- **Static Site Generator**: [11ty (Eleventy)](https://www.11ty.dev/)
- **Templating**: Nunjucks (`.njk`)
- **Styling**: Vanilla CSS with CSS Variables (located in `src/css/`)
- **Content**: Markdown (`.md`) files in `src/`

## Development Workflow
1.  **Install**: `npm install`
2.  **Run Dev Server**: `npm run dev` (starts server at `http://localhost:8080`)
3.  **Build**: `npm run build` (outputs to `_site/`)

## File Structure
- `src/`: Source content and templates.
    - `_includes/`: Nunjucks layouts and partials.
    - `css/`: Stylesheets.
    - `*.md`: Page content (e.g., `index.md`, `team.md`, `faq.md`).
- `.eleventy.js`: Eleventy configuration.
- `_site/`: Generated static site (do not edit directly).

## Key Personalities
- **Jon Leibowitz**: Team Captain. Experienced Linux, Mastodon admin (runs `jonleibowitz.social`, `eventhorizon.social`).
- **Joshua Padilla**: Team Member.

## Design Guidelines
- Use the existing CSS variables for colors and spacing.
- Maintain a clean, professional, "civic tech" aesthetic.
- Accessibility is a priority.
