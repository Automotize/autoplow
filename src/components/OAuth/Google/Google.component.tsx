import React from 'react';
import { GoogleLogin } from 'react-google-login';

type Props = { oAuthStart: (data: string) => void };
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GOOGLE_OAUTH_CLIENT_ID: string;
    }
  }
}

const Google: React.FC<Props> = ({ oAuthStart }) => {
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
      onSuccess={() => oAuthStart('google')}
      render={(renderProps) => (
        <button
          type="button"
          className="oauth__button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Continue with Google
        </button>
      )}
      onFailure={() => {}}
    />
  );
};

export default Google;
