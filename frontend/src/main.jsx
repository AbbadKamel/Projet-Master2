const { useState } = React;

const TopBar = ({ user, onSignOut }) => (
  <header className="top-bar">
    <div className="brand">
      <img
        src="https://www.unicaen.fr/wp-content/uploads/2021/05/logo-UNICAEN-bleu.png"
        alt="Unicaen logo"
      />
      <span>UNICAEN Portal</span>
    </div>
    {user && (
      <div className="user-menu">
        <span>{user.role}</span>
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
      onLogin({ role: 'Admin' });
    } else if (email === 'student@gmail.com' && password === 'student') {
      onLogin({ role: 'Student' });
    } else if (email === 'teacher@gmail.com' && password === 'teacher') {
      onLogin({ role: 'Teacher' });
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

const AdminPage = () => (
  <div className="page">
    <h2>Admin Dashboard</h2>
    <button>Manage Users</button>
  </div>
);

const StudentPage = () => (
  <div className="page">
    <h2>Student Home</h2>
    <button>View Courses</button>
  </div>
);

const TeacherPage = () => (
  <div className="page">
    <h2>Teacher Center</h2>
    <button>Grade Assignments</button>
  </div>
);

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userInfo) => setUser(userInfo);
  const handleSignOut = () => setUser(null);

  return (
    <>
      <TopBar user={user} onSignOut={handleSignOut} />
      <div className="main">
        {!user && <Login onLogin={handleLogin} />}
        {user?.role === 'Admin' && <AdminPage />}
        {user?.role === 'Student' && <StudentPage />}
        {user?.role === 'Teacher' && <TeacherPage />}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);