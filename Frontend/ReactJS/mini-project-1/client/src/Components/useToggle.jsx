import { useState } from "react";
import '../App.css'

// 🔹 Hook useToggle
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((v) => !v);

  return [value, toggle];
};

// 🔹 Component UserCard (uses useToggle)
export const UserCard = ({ user }) => {
  const [showDetails, toggleDetails] = useToggle(false);

  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>

      

      {showDetails && (
        <div className="details">
          <p>{user.phone}</p>
          <p>{user.address.street}, {user.address.city}</p>
          <p>{user.company.name}</p>
        </div>
      )}
      <button onClick={toggleDetails}>
        {showDetails ? "Cacher détails" : "Voir détails"}
      </button>
    </div>
  );
};
