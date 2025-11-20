import React from 'react'

const Notifications = ({n}) => {

  return (
    <div>
        {n > 0 && <p>Vous avez {n} notificaions</p>}
    </div>
  )
}

export default Notifications