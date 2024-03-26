import { useAuthContext } from '@shared-state/auth';

export function App() {
  const { username, setUsername } = useAuthContext();

  return (
    <div>
      <h2>App1</h2>
      <label>Your username:</label>
      <input type="text" value={username ?? ''} onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
}

export default App;
