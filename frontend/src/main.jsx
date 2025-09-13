const { useState } = React;

const TopBar = ({ user, onSignOut }) => (
  <header className="top-bar">
    <div className="brand">
      <img
        src="https://e7.pngegg.com/pngimages/505/146/png-clipart-caen-logo-brand-product-font-universite-de-caen-caen-logo.png"
        alt="Unicaen logo"
      />
      <span>UNICAEN Portal</span>
    </div>
    {user && (
      <div className="user-menu">
        <span>{user}</span>
        <button onClick={onSignOut}>Sign Out</button>
      </div>
    )}
  </header>
);

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin') {
      onLogin('admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <h1>Campus Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="note">Access is provided by the school administration.</p>
    </div>
  );
};

const AdminPage = () => <div></div>;

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => setUser(username);
  const handleSignOut = () => setUser(null);

  return (
    <>
      <TopBar user={user} onSignOut={handleSignOut} />
      <div className="main">
        {user ? <AdminPage /> : <Login onLogin={handleLogin} />}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);