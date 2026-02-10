// Define a URL base dependendo se está em produção (Vercel) ou desenvolvimento (Local)
export const APP_URL = import.meta.env.PROD 
  ? 'https://felipevenancio.vercel.app' 
  : 'http://localhost:3000';