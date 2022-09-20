import React from 'react'

const Message = () => {
  return (
    <div className="message">
        <img alt="avatar" src="https://images.unsplash.com/photo-1663652010369-ec8e927f9da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="avatar" />
        <div className="block">
            <div className="messageInfo">
                <span className="author">Name</span>
                <span className="timestamp">timestamp</span>
            </div>
            <div className="messageContent">lorem</div>
        </div>
    </div>
  )
}

export default Message