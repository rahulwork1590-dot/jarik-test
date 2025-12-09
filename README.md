# User Directory - Localized API Dashboard

A Next.js application that fetches and displays user data from a public API with internationalization support for English and French.

## Features

- **Internationalization (i18n)**: Full support for English (`/en`) and French (`/fr`) routes
- **REST API Integration**: Fetches user data from JSONPlaceholder API
- **Client-Side Search**: Real-time filtering by name or email (case-insensitive)
- **Pagination**: Display 5 users per page with navigation controls
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Error Handling**: Comprehensive loading and error states with retry functionality

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- React Hooks (Custom hooks for state management)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd jarik-test
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:
   - English: [http://localhost:3000/en](http://localhost:3000/en)
   - French: [http://localhost:3000/fr](http://localhost:3000/fr)

The root URL automatically redirects to the English version.

## Project Structure

```
├── app/
│   ├── [locale]/          # Locale-based routing
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Main page component
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Root redirect
├── components/            # React components
│   ├── UserDashboard.tsx  # Main dashboard component
│   ├── UserTable.tsx      # User data table
│   ├── SearchBar.tsx      # Search input
│   ├── Pagination.tsx     # Pagination controls
│   ├── LoadingSpinner.tsx # Loading state
│   └── ErrorMessage.tsx   # Error state
├── hooks/                 # Custom React hooks
│   ├── useUsers.ts        # API data fetching
│   ├── useSearch.ts       # Search functionality
│   └── usePagination.ts   # Pagination logic
├── i18n/                  # Internationalization
│   ├── config.ts          # i18n configuration
│   └── translations.ts    # Translation strings
└── types/                 # TypeScript types
    └── user.ts            # User interface

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## API Endpoint

The application fetches data from:

```
https://jsonplaceholder.typicode.com/users
```

## Key Implementation Details

### State Management

Custom hooks pattern for clean separation of concerns:

- `useUsers`: Handles API fetching with loading/error states
- `useSearch`: Manages client-side filtering
- `usePagination`: Controls pagination logic

### Internationalization

Route-based i18n using Next.js App Router dynamic segments. All UI text is translated based on the URL locale parameter.

### Responsive Design

- Desktop: Full table layout
- Mobile: Stacked card layout for better readability

## Browser Support

Modern browsers with ES6+ support (Chrome, Firefox, Safari, Edge)
