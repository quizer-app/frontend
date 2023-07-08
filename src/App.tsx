import * as React from 'react'
import * as auth from 'auth-provider'
import { BrowserRouter as Router } from 'react-router-dom'



export default function App() {
    
  const isSuccess = false
  
  
  if (isSuccess) {
    const props = {user, login, register, logout}
    return user ? (
      <Router>
        
      </Router>
    )
  } 
  
  
  return <div>App</div>;
}
