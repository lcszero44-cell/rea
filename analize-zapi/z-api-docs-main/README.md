# Z-API Documentation

Built for developers, by developers. Explore the Z-API documentation and learn how to connect WhatsApp to your applications using REST APIs and webhooks.

**[Read the documentation →](https://developer.z-api.io)**

## About This Repository

This repository contains documentation content and a Docusaurus-based website, with support for Portuguese and English.

Looking to integrate with Z-API? Head to [developer.z-api.io](https://developer.z-api.io).

Want to explore or edit the documentation in this repository? Follow the steps below.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Z-API/z-api-docs.git
cd z-api-docs
```

### 2. Install dependencies

Make sure Node.js and npm are installed, then run:

```bash
npm install
```

### 3. Start the local development server

```bash
npm start
```

This opens the documentation in your browser. Most changes appear automatically without restarting the server.

### 4. Preview the English version

```bash
npm run start -- --locale en
```

## Documentation Structure

- **`docs/`** — Portuguese documentation.
- **`i18n/en/docusaurus-plugin-content-docs/current/`** — English documentation.
- **`src/`** — Website components and styling.
- **`static/`** — Static assets.
- **`sidebars.js`** — Documentation navigation.
- **`docusaurus.config.js`** — Website configuration.

## Contributing

Found a typo, an unclear explanation, or a missing example? Open an issue or submit a pull request.

Keep changes focused, preview them locally, and update both language versions when applicable.

## Useful Links

- [Developer Documentation](https://developer.z-api.io)
- [Z-API Website](https://z-api.io)
- [Node.js Integration Examples](https://github.com/Z-API/whatsapp-api-nodejs)
