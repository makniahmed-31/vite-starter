/// <reference types="vite/client" />

interface ImportMeta {
    globEager<T = unknown>(pattern: string): Record<string, T>;
    readonly env: ImportMetaEnv;
  }
  
  interface ImportMetaEnv {
    readonly VITE_API_URL: string; // example, add your own env variables here
  }
  