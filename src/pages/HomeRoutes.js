import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'
const HomeRoutes = ({ children }) => {
 if (true) {
  return <Navigate to="/landing" />
 } else {
  return children
 }
}
export default HomeRoutes
