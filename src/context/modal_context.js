import React, { useState, useContext } from 'react'

const ModalContext = React.createContext()

const ModalProvider = ({ children }) => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false)
const [isModalOpen, setIsModalOpen] = useState(false)
const [isChatOpen, setIsChatOpen] = useState(false)

 const openSidebar = () => {
  setIsSidebarOpen(true)
 }
 const closeSidebar = () => {
  setIsSidebarOpen(false)
 }

 const openModal = () => {
  setIsModalOpen(true)
 }
 const closeModal = () => {
  setIsModalOpen(false)
 }

 const openChat = () => {
  setIsChatOpen(true)
 }
 const closeChat = () => {
  setIsChatOpen(false)
 }

 return (
  <ModalContext.Provider
   value={{
    isSidebarOpen,
             isModalOpen,
    isChatOpen,
    openModal,
    closeModal,
    openChat,
    closeChat,
    openSidebar,
    closeSidebar,
   }}
  >
   {children}
  </ModalContext.Provider>
 )
}

export const useModalContext = () => {
 return useContext(ModalContext)
}

export { ModalContext, ModalProvider }
