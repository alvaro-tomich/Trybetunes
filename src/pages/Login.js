import React, { useState } from 'react'

function Login() {
  const [isBtnEnabled, setEnabled] = useState(true)

  function enableButton(event) {
    event.preventDefault()
    const characters = event.target.value;
    if(characters.length > 2) {
      setEnabled(false);
    }
    else {
      setEnabled(true);
    }
  }

  return (
    <form>
      <label htmlFor="name">
        <input
          id="name"
          placeholder="Write your name"
          onChange={enableButton}
        />
      </label>
      <button
        disabled={isBtnEnabled}
      >
        Login
      </button>
    </form>
  )
}

export default Login;
