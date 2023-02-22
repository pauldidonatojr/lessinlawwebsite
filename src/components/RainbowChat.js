import React, { useState } from 'react'

const RainbowChat = () => {
 return (
  <div
   className="chat-container"
   style={{ width: '450px', height: '800px' , marginTop: '3.5rem'}}
  >
   <iframe
    style={{
     width: '350px',
     height: '650px',
     marginTop: '5rem',
     touchAction: 'manipulation',
    }}
    id="rainbow-chat"
    src="https://secure.penntelco.com/chat_widget/index.php"
    allowFullScreen={true}
   ></iframe>
  </div>
 )
}

export default RainbowChat
