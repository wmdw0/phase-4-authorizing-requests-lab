import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
    .then((r) => r.json())
      .then((user) => onLogin(user));
    // .then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => onLogin(user));
      }
    // });
  // }

  return (
    <form style={{borderRadius: '20px', boxShadow: '0px 6px 18px -9px rgba(0, 0, 0, 0.75)', maxWidth: '50%', marginLeft: '25%', border: '1px transparent', paddingBottom: '25%', marginTop: '30px'}} onSubmit={handleSubmit}>
      <h3 style={{fontSize: '24px', marginBottom: '10%', textAlign: 'center'}}>Login With Username</h3>
      <div style={{display: 'flex',maxWidth: '100%', marginLeft: '25%', marginBottom: '20px'}}>
      <label htmlFor="username" style={{fontSize: '18px', marginLeft: '5%'}}>Username</label>
      <input
      style={{minWidth: '30%', marginLeft: '5%'}}
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <button style={{display: 'flex', alignItems: 'center', border: '1px transparent',  boxShadow: '0px 6px 18px -9px rgba(0, 0, 0, 0.75)', marginLeft: '45%', fontSize: '12px', padding: '15px 20px', textAlign: 'center', borderRadius: '10px', backgroundColor: 'transparent', color: 'white'}}type="submit">Login</button>
    </form>
  );
}

export default Login;
