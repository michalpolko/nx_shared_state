import { AuthContextProvider } from '@shared-state/auth';
import { Shell } from '@shared-state/shell';
import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

const App1 = React.lazy(() => import('app1/Module'));
const App2 = React.lazy(() => import('app2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <AuthContextProvider>
        <Shell />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/app1" element={<App1 />} />
          <Route path="/app2" element={<App2 />} />
        </Routes>
      </AuthContextProvider>
    </React.Suspense>
  );
}

export default App;
