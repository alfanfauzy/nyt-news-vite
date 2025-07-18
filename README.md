# 📰 NYTimes Article Viewer
A simple and elegant SPA (Single Page Application) to explore New York Times articles. Built using **React, TypeScript, and Tailwind CSS**, this app supports searching, viewing article details, and paginated results — all with a clean UI inspired by The New York Times.

![screenshoot](<public/screenshoot.png>)

## 🚀 Demo
Live site: [nyt-news-vite.netlify.app](nyt-news-vite.netlify.app)

## 🛠️ Tech Stack
- React + TypeScript
- React Router DOM
- Tailwind CSS
- Lucide Icons
- Vite
- Axios

## 📦 Features
- 🔎 Search articles from the NYTimes API
- 🧭 SPA routing with detail pages
- 🧪 Type-safe API layer using custom hooks
- 🖼️ Responsive, accessible article cards
- ⏱️ Pagination with usePagination custom hook
- 💅 Clean UI mimicking the NYTimes style

## 🧩 Project Structure
```
src/
├── components/
│   ├── common/         # Reusable UI components like Pagination
│   ├── layout/         # Layout with Header & Footer
│   └── ui/             # ArticleCard, SearchInput, etc.
├── hooks/              # Custom hooks like usePagination
├── pages/              # Page components for routing
├── services/
│   └── hooks/          # useArticles hook for API
├── types/              # TypeScript types
├── utils/              # Helpers (string/date/article utils)
├── App.tsx
├── main.tsx
└── router.tsx
```

## 🧪 Getting Started
**Prerequisites**

- Node.js (v16 or newer)
- Yarn or npm

## Installation

```
# Clone the repository
git clone https://github.com/your-username/nytimes-article-viewer.git
cd nytimes-article-viewer

# Install dependencies
yarn install
# or
npm install

# Start the development server
yarn dev
# or
npm run dev
```

## 📸 Preview
```
# Build for production
yarn build

# Preview the built app
yarn preview
```

## 👤 Author
Built with ❤️ by [Alfan Fauzy](https://www.linkedin.com/in/alfan-fauzy/details/experience/)

## 📄 License
MIT — free to use and modify.