const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <h1>Campus Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
      <p className="note">Access is provided by the school administration.</p>
    </div>
  );
};

const App = () => <Login />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);