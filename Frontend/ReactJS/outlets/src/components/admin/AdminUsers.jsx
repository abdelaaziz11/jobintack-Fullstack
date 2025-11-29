import { useEffect, useState } from "react";
import '../../App.css'

const usersList = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    phone: "+1-555-123-4567",
    address: {
      street: "42 Maple Street",
      city: "New York"
    },
    company: {
      name: "TechNova Inc."
    }
  },
  {
    id: 2,
    name: "Amina El Fakiri",
    username: "aminaf",
    email: "amina.fakiri@example.com",
    phone: "+212-612-345678",
    address: {
      street: "12 Boulevard Hassan II",
      city: "Casablanca"
    },
    company: {
      name: "Atlas Software"
    }
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    username: "cmendoza",
    email: "carlos.mendoza@example.com",
    phone: "+34-654-987321",
    address: {
      street: "78 Calle Sol",
      city: "Madrid"
    },
    company: {
      name: "Iberia Systems"
    }
  },
  {
    id: 4,
    name: "Sophia Martin",
    username: "smartin",
    email: "sophia.martin@example.com",
    phone: "+33-06-55-22-11-44",
    address: {
      street: "5 Rue des Lilas",
      city: "Paris"
    },
    company: {
      name: "HexaDigital"
    }
  },
  {
    id: 5,
    name: "Youssef Benali",
    username: "ybenali",
    email: "youssef.benali@example.com",
    phone: "+212-690-112233",
    address: {
      street: "23 Avenue Mohammed V",
      city: "Marrakech"
    },
    company: {
      name: "Maghreb Tech"
    }
  }
]
export default function AdminUsers() {
  const [users, setUsers] = useState(usersList);


  return (
    <div>
      <h2>Gestion des utilisateurs</h2>
      <p>Liste des utilisateurs administrables.</p>
      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className='userItem' style={{ display: 'block' }}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address.street} {user.address.city}</p>
            <p>{user.company.name}</p>
          </div>


        ))}
      </div>
    </div>
  );
}