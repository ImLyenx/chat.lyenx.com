import React from 'react'

const Input = () => {
  return (
    <div className="inputContainer">
        <input className="inputBar" placeholder="Type something..." />
        <div className="sendContainer">
            <input type="file" id="file" style={{display:"none",}} />
            <label htmlFor="file"><button className="fileButton">🔗</button></label>
            <button className="sendButton">Send</button>
        </div>
    </div>
    
  )
}

export default Input