import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    
    const location = useLocation()

    if(loading){
        return <div>
            loading....
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }

  return children
}

export default PrivateRoute