export const BASE_CONFIG = {
    api: {
        baseURL: import.meta.env.VITE_NYT_BASE_URL,
        apiKey: import.meta.env.VITE_NYT_API_KEY,
        timeout: 10000,
    },
    app: {
        title: import.meta.env.VITE_APP_TITLE || "NYT Article Search",
        description:
            import.meta.env.VITE_APP_DESCRIPTION ||
            "Search and explore articles from The New York Times",
        itemsPerPage: 10,
    },
    routes: {
        home: "/",
        search: "/search",
        article: "/article/:id",
    },
} as const;

export type Config = typeof BASE_CONFIG;
