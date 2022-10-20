import React from "react";
import {Link,useMatch,useResolvedPath} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
      <Link to="/" className="company_name">Amore Ventures</Link>
      <ul className="nav_elements">
       <CustomLink to="/login">Login</CustomLink>
       <CustomLink to="/dashboard">Dashboard</CustomLink>
      </ul>
    </nav>
    ) 
}  
function CustomLink({to,children,...props})
{
    const resolved_path=useResolvedPath(to)
    const isActive= useMatch({path:resolved_path.pathname,end:true})
    const path=window.location.pathname
    return (
        <li className={isActive?"active":""}>
          <Link to={to} {...props}>{children}</Link>
        </li>
    )
}