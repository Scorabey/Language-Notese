/// <reference types="vite/client" />

interface importMetaEnv {
    readonly VITE_API_URL: string
}

interface importMeta {
    readonly env: importMetaEnv
}