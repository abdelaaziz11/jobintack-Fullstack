import React from 'react'

const Bonjour = () => {

    const hour = new Date().getHours();
  return (
    <>
        <h1>{hour < 12 ? "Bonjour" : "Bonsoir"}</h1>
    </>
  )
}

export default Bonjour