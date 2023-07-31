function UserCard({ user }) {
    return (
      <div className="user-card">
        <img src={user.avatar} alt={user.first_name} />
        <h2>{user.first_name} {user.last_name}</h2>
        <p>Email: {user.email}</p>
      </div>
    );
  }
  
  function NavBar({ onClick }) {
    return (
      <nav className="navbar">
        <div className="brand">AKSHAT</div>
        <button onClick={onClick}>Get Users</button>
      </nav>
    );
  }
  
  function App() {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
  
    const fetchUsers = async () => {
      setLoading(true);
  
      try {
        const response = await fetch('https://reqres.in/api/users?page=1');
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
  
      setLoading(false);
    };
  
    return (
      <div>
        <NavBar onClick={fetchUsers} />
        <div className="user-card-grid">
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            users.map(user => (
              <UserCard key={user.id} user={user} />
            ))
          )}
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  