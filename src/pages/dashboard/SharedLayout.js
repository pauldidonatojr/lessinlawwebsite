import { Outlet } from 'react-router-dom'
import React from 'react'
import { BigSidebar, Navbar2, SmallSidebar } from '../../components'
import Wrapper from '../../assets/wrappers/SharedLayout'

const SharedLayout = () => {
 return (
  <Wrapper>
   <main className="dashboard">
     <SmallSidebar />
    <BigSidebar />
    <div>
     <Navbar2 />
     <div className="dashboard-page">
      <Outlet />
     </div>
    </div>
   </main>
  </Wrapper>
 )
}
export default SharedLayout
