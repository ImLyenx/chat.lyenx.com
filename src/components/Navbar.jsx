import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <img alt="avatar" src="https://images.unsplash.com/photo-1663652010369-ec8e927f9da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="avatarSelf" />
        <span className="displayName">Lyenx</span>
        <button className="logout">Sign out</button>
    </div>
  )
}

export default Navbar