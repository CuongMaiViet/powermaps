import React, { useEffect } from 'react'
import './index.scss'

const Chat = () => {
  return (
    <iframe
      className="chatbox"
      src="https://widget.kommunicate.io/chat?appId=1ed36dc55cb0261a04cb09baaaea34a0"
      allow="microphone; geolocation;"
    />
  )
}

export default Chat
