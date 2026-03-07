import React, { useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState(10)
  const [user, setUser] = useState("Harsh")

  function ChangeNumUser() {
    setNum(20)
    setUser("Aman")
  }

  return (
    <div>
      <h1>Value of num is {num} <br /> Value of user is {user}</h1>
      <button onClick={ChangeNumUser}> Click</button>
    </div>
  )
}

export default App