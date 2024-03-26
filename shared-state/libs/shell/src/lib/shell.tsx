import { useAuthContext } from '@shared-state/auth';
import { Link } from 'react-router-dom';

export function Shell() {
  const { username } = useAuthContext();

  return (
    <div>
      <h1>Welcome to Shell!</h1>
      <div>Username: {username}</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/app1">App1</Link>
        </li>
        <li>
          <Link to="/app2">App2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Shell;
