import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return (
    <div>
      <h1>let code it...!</h1>
    </div>
  )
}

const anotherUser = "chai aur react by Hitesh"
// eslint-disable-next-line no-unused-vars
function AnotherElement() {
  return (
  <a href="https://www.linkedin.com/in/shaik-nizamuddin-backend/" target='_blank'> Visit My Profile</a>
  )
  anotherUser
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App/>
   <MyApp />
   <AnotherElement />
    
  </React.StrictMode>,
)
