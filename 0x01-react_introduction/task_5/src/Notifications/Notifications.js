import React from 'react'
import './Notifications.css'
import { getLatestNotification } from '../utils/utils'

const Notifications = () => {
  const log = () => console.log('Close button has been clicked')
  const style = {
    position: "absolute",
    right: ".25rem",
    top: ".25rem",
    background: "transparent",
    border: "none",
  }
  return (
    <div className='Notifications' style={{position: "relative"}}>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification()}}></li>
      </ul>
      <button aria-label='Close' onClick={log} style={style}>x</button>
    </div>
  )
}

<<<<<<< HEAD
export default Notifications
=======
export default Notifications
>>>>>>> 4227a85c87e16b80a901bdda94ee8e2ad38fee6a
