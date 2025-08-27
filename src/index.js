import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

console.log('Domain:', process.env.REACT_APP_AUTH0_DOMAIN);
console.log('Client ID:', process.env.REACT_APP_AUTH0_CLIENT_ID);

if (!process.env.REACT_APP_AUTH0_DOMAIN || !process.env.REACT_APP_AUTH0_CLIENT_ID) {
  console.error('Missing Auth0 environment variables');
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={
        {
          redirect_uri: window.location.origin,
          scope: "openid profile email",
        }
      }
      >
    <App />
    </Auth0Provider>
  //</React.StrictMode>
);
reportWebVitals();
