import { useEffect, useMemo, useState } from "react";
import "./App.css";
import useFetch from "./Components/useFetch";
import { useLocalStorage } from "./Components/useLocalStorage";
import { UserCard } from "./Components/useToggle"; // contains hook + component

function App() {
  const { users, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [search, setSearch] = useState("");
  const [time, setTime] = useState(0);
  const [refreshTimer, setRefreshTimer] = useState(10);

  // Theme saved in localStorage
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    const interval = setInterval(() => {
      setRefreshTimer((prev) => {
        if (prev === 1) return 10; // reset timer
        return prev - 1;
      });
    }, 1000);


    return () => {
      clearInterval(timer);
      clearInterval(interval);
    };
  }, []);

  // Filter users
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`app ${theme}`}>
      <div className="left-panel">
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>

        <h1>Annuaire d'utilisateurs</h1>
        <p>Temps écouté : {time}</p>

        <section className="form-search">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </section>

        <div className="users">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
