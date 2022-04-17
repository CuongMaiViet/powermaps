// import React, { useRef } from 'react'

// const Chat = () => {
//   const chatRef = useRef()
//   const iconRef = useRef()

//   const toggleChat = () => {
//     chatRef.current.classList.toggle('active')
//     iconRef.current.classList.toggle('active')
//   }
//   return (
//     <div className="chat__section" ref={chatRef}>
//       <div className="chat__btn" onClick={toggleChat} ref={iconRef}></div>

//       <iframe
//         className="chat__box"
//         src="https://widget.kommunicate.io/chat?appId=1ed36dc55cb0261a04cb09baaaea34a0"
//         allow="microphone; geolocation;"
//       />
//     </div>
//   )
// }

// export default Chat

import React, { useEffect } from 'react'

const Chat = () => {
  useEffect(() => {
    ;(function (d, m) {
      var kommunicateSettings = {
        appId: '1ed36dc55cb0261a04cb09baaaea34a0',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      }
      var s = document.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app'
      var h = document.getElementsByTagName('head')[0]
      h.appendChild(s)
      window.kommunicate = m
      m._globals = kommunicateSettings
    })(document, window.kommunicate || {})
  }, [])
  return <div></div>
}

export default Chat
