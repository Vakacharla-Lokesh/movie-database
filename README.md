# 🎬 Movie Database  
[![Live Demo](https://deploy-badge.vercel.app/?url=https://movie-database-iota-drab.vercel.app/&name=Demo)](https://movie-database-iota-drab.vercel.app/)

A sleek Movie Database app built with React, Appwrite, and the TMDB API, deployed on Vercel.

## 🌐 Live Demo

Check it out here:  
https://movie-database-iota-drab.vercel.app/

## ✨ Features

- **🔍 Browse & search movies** powered by TMDB.
- **🎞️ Detailed movie pages** with posters, overview, release date, and ratings.
- **📊 Search-tracking**: user searches stored in Appwrite; view trending months.
- **🚀 Debounced search** for optimal performance.
- **📱 Fully responsive design** for mobile, tablet, and desktop.
- **🔐 Real-time CORS support** for both localhost and production.

## 🔭 Future Enhancements

- **Pagination** for browsing through large movie collections.
- **User Authentication** via Appwrite to enable favorites and watchlists.
- **Watchlist & Notes**: Let users save movies and add personal comments.
- **Improved UI** with animations and accessibility enhancements.
- **Localization** support for multiple languages (Spanish, Hindi, etc.).
- **Performance Metrics**: Track API/APK usage and optimize loading.

## 🛠️ Tech Stack

| Layer            | Technology                  |
|------------------|-----------------------------|
| **Frontend**     | React (Vite) + Tailwind CSS |
| **Backend**      | Appwrite (Auth, Database)   |
| **API**          | The Movie Database (TMDB)   |
| **Hosting**      | Vercel                      |
| **HTTP Client**  | Appwrite SDK + Fetch API    |

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- NPM or Yarn
- TMDB API Key
- Appwrite Project Config with:
  - **project ID**
  - **database ID**
  - **collection ID** (for storing search logs)

### Setup

1. Clone the repo:
    ```bash
    git clone https://github.com/Vakacharla-Lokesh/movie-database.git
    cd movie-database
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env.local` file at the root with:
    ```env
    VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
    VITE_APPWRITE_PROJECT_ID=YOUR_APPWRITE_PROJECT_ID
    VITE_APPWRITE_DATABASE_ID=YOUR_APPWRITE_DATABASE_ID
    VITE_APPWRITE_COLLECTION_ID=YOUR_APPWRITE_COLLECTION_ID
    ```
4. Spin up the dev server:
    ```bash
    npm run dev
    ```
5. Visit `http://localhost:5173` in your browser.

## 🧩 Project Structure

.
├── public/
├── src/
│ ├── components/ # UI components (SearchBar, MovieCard, etc.)
│ ├── context/ # Appwrite context providers
│ ├── hooks/ # Custom hooks (e.g., useDebounce)
│ ├── pages/ # Routes & page components
│ ├── services/ # API wrappers (Appwrite + TMDB)
│ └── App.jsx # Main router & layout
├── .env.local
├── package.json
└── vite.config.js


## 💡 Tips & Notes

- **Search tracking** is stored via Appwrite; you can access it to build analytics or trending features.
- **CORS** setup includes both `localhost:5173` and your Vercel domain in the Appwrite console.
- **Responsive UI** via Tailwind ensures seamless experience across devices.

## 📦 Deployment

Deployed automatically on Vercel. The repo is connected to your Vercel account and redeploys on every `git push`.

## 🛠️ Future Enhancements

- Add pagination for long search results.
- Implement user authentication with favorites & watchlist.
- Create watchlist pages & save personal notes.

---

## 📚 Resources & Credits

- Built following community patterns from similar movie app repos like [Movie-Spot] by Hemnath‑V :contentReference[oaicite:1]{index=1}.
- Appwrite + React tutorials from JavaScript Mastery and Appwrite’s official docs :contentReference[oaicite:2]{index=2}.
- Inspired by TMDB-powered React apps like those by KlebanAndrii :contentReference[oaicite:3]{index=3} and Oliver‑Gomes :contentReference[oaicite:4]{index=4}.

---

## 🤝 Contributing

1. Fork the repo.
2. Create your branch: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m 'feat: Add feature'`.
4. Push to your branch: `git push origin my-feature`.
5. Open a Pull Request and share your feedback.

---

**Enjoy exploring movies? 🎞️ Happy coding!**

