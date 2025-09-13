const TopBar = () => (
  <header className="top-bar">
    <img
      src="https://e7.pngegg.com/pngimages/505/146/png-clipart-caen-logo-brand-product-font-universite-de-caen-caen-logo.png"
      alt="Unicaen logo"
    />
    <span>UNICAEN Portal</span>
  </header>
);

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

const App = () => (
  <>
    <TopBar />
    <div className="main">
      <Login />
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);