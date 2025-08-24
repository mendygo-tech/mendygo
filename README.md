# Mendygo Client

## Overview
Mendygo is a modern web application built with Next.js, TypeScript, and Tailwind CSS. It features a modular architecture for scalability and maintainability, supporting multiple pages, dynamic routes, and API endpoints. The project is designed for rapid development and easy customization.

## Tech Stack
- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Linting:** ESLint
- **Assets:** PNG, SVG, WEBP, PDF, DOCX
- **Backend:** MongoDB (via custom lib)

## Directory Structure
```
client/
├── public/           # Static assets (images, icons, manifest, etc.)
├── src/
│   ├── app/          # Next.js app directory (routing, pages, layouts)
│   │   ├── _document.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── aboutus/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   └── contact/
│   │   ├── blog/
│   │   ├── career/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── hmmm/
│   │   ├── industries/[slug]/
│   │   ├── products/[slug]/
│   │   ├── services/[slug]/
│   │   └── Timeline/[slug]/
│   ├── assets/       # Images, logos, PDFs, and other media
│   ├── components/   # Reusable React components
│   │   ├── common/
│   │   ├── Home/
│   │   └── ui/
│   ├── context/      # React context providers
│   ├── data/         # Static data (TSX files)
│   └── lib/          # Utility libraries, MongoDB connection, middleware, models
├── package.json      # Project dependencies and scripts
├── tailwind.config.js
├── postcss.config.mjs
├── tsconfig.json     # TypeScript configuration
├── eslint.config.mjs # ESLint configuration
└── README.md         # Project documentation
```

## Architecture
### 1. App Directory (src/app)
- **Routing:** Uses Next.js file-based routing. Dynamic routes (e.g., `[slug]`) for industries, products, services, and timeline.
- **Pages:** Each subfolder (aboutus, blog, career, contact, gallery, hmmm) contains its own `page.tsx` for modular page development.
- **API:** Custom API endpoints under `api/auth` and `api/contact` for authentication and contact forms.
- **Layout:** Global layout and document customization via `layout.tsx` and `_document.tsx`.

### 2. Components (src/components)
- **common/**: Shared UI elements (buttons, headers, etc.)
- **Home/**: Homepage-specific components
- **ui/**: Custom UI widgets

### 3. Data (src/data)
- Static TypeScript files for industries, products, services, and timeline data. Used for rendering and populating pages.

### 4. Lib (src/lib)
- **mongodb.ts:** MongoDB connection and helpers
- **utils.ts:** General utility functions
- **middleware/**: Custom middleware for API routes
- **models/**: Data models for MongoDB

### 5. Assets (src/assets)
- Images, logos, PDFs, and other media files. Includes gallery subfolder for organized image storage.

### 6. Public (client/public)
- Static files served directly by Next.js. Includes icons, manifest, and other resources.

## Development
### Setup
1. Install dependencies:
   ```bash
   cd client
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Linting & Formatting
- Run ESLint:
  ```bash
  npm run lint
  ```
- Tailwind CSS and PostCSS are preconfigured for utility-first styling.

### Build
- Production build:
  ```bash
  npm run build
  ```
- Start production server:
  ```bash
  npm start
  ```

## Customization
- Add new pages by creating folders/files in `src/app/`
- Add new components in `src/components/`
- Update static data in `src/data/`
- Add assets to `src/assets/` or `public/`

## MongoDB Integration
- Connection and models are managed in `src/lib/mongodb.ts` and `src/lib/models/`
- API routes can interact with MongoDB for dynamic data

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes
4. Push to your branch and open a pull request

## License
This project is licensed under the MIT License.

## Contact
For questions or support, contact the maintainers via the contact form on the website or open an issue.

---
