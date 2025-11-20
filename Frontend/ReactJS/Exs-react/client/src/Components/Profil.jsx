import React from 'react'

const Profil = ({name, email, role}) => {
  const isadmin = role === 'admin';
  if (isadmin) {
    return <p style={{color: "red"}}>Admin - {name}</p>
  }
  return (
    <div className='user'>
      {/* {isadmin && <p style={{color: "red"}}>Admin</p>} */}
      {name} - {email} 
    </div>
  )
}

export default Profil