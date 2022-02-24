/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SANITY_PROJECTID: string
  readonly VITE_SANITY_DATASET: string
  readonly VITE_SANITY_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}