import { useState } from 'react'
import './App.css'
import Bonjour from './Components/Bonjour'
import Profil from './Components/Profil'
import Notifications from './Components/Notifications'

function App() {

  const users = [
    { id: 1, name: "abdel", email: "abdel@gmail.com", role: "user" },
    { id: 2, name: "med", email: "med@gmail.com", role: "user" },
    { id: 3, name: "khouda", email: "khouda@gmail.com", role: "admin" },
  ]

  return (
    <>
      <Bonjour />
      {users.map((u) => (
        <Profil key={u.id}
          name={u.name}
          email={u.email}
          role={u.role}
        />

      ))}
      <Notifications n={5}/>
    </>
  )
}

export default App
