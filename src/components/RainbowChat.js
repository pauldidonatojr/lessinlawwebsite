import React, { useState } from 'react'

const RainbowChat = () => {
 return (
  <div
   className="chat-container"
   style={{ width: '450px', height: '650px', marginTop: '1rem' }}
  >
   <iframe
    style={{ width: '450px', height: '650px', marginTop: '5rem' }}
    id="rainbow-chat"
    src="https://secure.penntelco.com/chat_widget/index.php"
    allowFullScreen={true}
   ></iframe>
  </div>
 )
}

export default RainbowChat
