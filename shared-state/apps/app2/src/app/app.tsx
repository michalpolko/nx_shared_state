import { useAuthContext } from '@shared-state/auth';

export function App() {
  const { username } = useAuthContext();

  return (
    <div>
      <h2>App2</h2>
      <div>Username: {username}</div>
    </div>
  );
}

export default App;
