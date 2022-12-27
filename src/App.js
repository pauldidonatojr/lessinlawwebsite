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

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import React from 'react'
function App() {
 return (
  <BrowserRouter>
   {/* ///////////////////////////*/}
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
    {/*
    <Route path="/home" element={<Home />} /> */}
    <Route path="landing" element={<Landing />} />
    <Route path="register" element={<Register />} />
    <Route path="*" element={<Error />} />

    {/* ///////////////////////////*/}
   </Routes>
   <ToastContainer position="top-center" />
  </BrowserRouter>
 )
}

export default App
