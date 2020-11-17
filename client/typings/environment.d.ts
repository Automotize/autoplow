declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GOOGLE_OAUTH_CLIENT_ID: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}
