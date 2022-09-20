import React from 'react'

const Chats = () => {
  return (
    <div className="chats">
        <div className="userChat">
            <img alt="avatar" src="https://images.unsplash.com/photo-1663652010369-ec8e927f9da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="avatar" />
            <div className="userChatInfo">
                <span>Lyenx</span>
                <p>Last message</p>
            </div>
        </div>
    </div>
  )
}

export default Chats