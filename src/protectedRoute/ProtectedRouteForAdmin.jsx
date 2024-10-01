/* eslint-disable react/prop-types */
import { Navigate } from "react-router"

export const ProtectedRouteForAdmin = (props) => {
    const user = JSON.parse(localStorage.getItem('users'))
    if (user?.role === "Admin") {
      return props.children
    }
    else {
      return <Navigate to={'/login'}/>
    }
}