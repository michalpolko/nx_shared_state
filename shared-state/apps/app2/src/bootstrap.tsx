import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { AuthContextProvider } from '@shared-state/auth';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>
);
