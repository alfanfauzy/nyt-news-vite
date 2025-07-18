/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_NYT_API_KEY: string;
    readonly VITE_NYT_BASE_URL: string;
    readonly VITE_APP_TITLE: string;
    readonly VITE_APP_DESCRIPTION: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
