const Login = () => {
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
      <p>Use the credentials provided by your university to log in.</p>
    </div>
  );
};

const App = () => <Login />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);