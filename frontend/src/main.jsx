const { useState } = React;

function Login({ switchToSignup }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?
        <button type="button" onClick={switchToSignup}>Sign up</button>
      </p>
    </div>
  );
}

function Signup({ switchToLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Create Account</button>
      </form>
      <p>
        Already have an account?
        <button type="button" onClick={switchToLogin}>Login</button>
      </p>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('login');
  return (
    page === 'login'
      ? <Login switchToSignup={() => setPage('signup')} />
      : <Signup switchToLogin={() => setPage('login')} />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);