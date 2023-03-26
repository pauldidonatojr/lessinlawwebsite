import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
 Home,
 Landing,
 Error,
 ProtectedRoute,
 HomeRoutes,
 Register,
} from './pages/Index'
import {
 Profile,
 AddJob,
 AllJobs,
 Stats,
 SharedLayout,
} from './pages/dashboard'

import {

 FirmOverview,
 PracticeAreas,
 AttorneyProfiles,
 ResourceLinks,
 Communities,
 ContactUs,
 Header,
 Footer,
} from './components/'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import React from 'react'
function App() {
 return (
  <BrowserRouter>
   {/* ///////////////////////////*/}
   <Header />
   <Routes>
    {/* ///////////////////////////*/}

    <Route
     path="/"
     element={
      <ProtectedRoute>
       <SharedLayout />
      </ProtectedRoute>
     }
    >
     <Route index element={<Stats />} />
     <Route path="all-jobs" element={<AllJobs />} />
     <Route path="add-job" element={<AddJob />} />
     <Route path="profile" element={<Profile />} />
    </Route>

    <Route path="/home" element={<Home />} />
    <Route path="/firmoverview" element={<FirmOverview />} />
    <Route path="/practiceareas" element={<PracticeAreas />} />
    <Route path="/attorneyprofiles" element={<AttorneyProfiles />} />
    <Route path="/resourcelinks" element={<ResourceLinks />} />
    <Route path="/communities" element={<Communities />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/landing" element={<Landing />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<Error />} />

    {/* ///////////////////////////*/}
         </Routes>
         <Footer/>
   <ToastContainer position="top-center" />
  </BrowserRouter>
 )
}

export default App
