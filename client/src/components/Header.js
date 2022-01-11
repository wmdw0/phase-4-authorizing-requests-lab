import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', border: '1px transparent',  boxShadow: '0px 6px 18px -9px rgba(0, 0, 0, 0.75)'}}>
      
      {/* <AppBar position="static"> */}
        
      {/* </AppBar> */}
   
      <h1 style={{fontSize: '18px', marginLeft: '10%'}}>
        <Link to="/">Lorem Blogum</Link>
      </h1>
      <p>
        <Link to="/members"><button style={{display: 'flex', alignItems: 'center', border: '1px transparent',  boxShadow: '0px 6px 18px -9px rgba(0, 0, 0, 0.75)', marginLeft: '800px', padding: '10px', borderRadius: '10px', backgroundColor: 'transparent', color: 'white'}}>Browse</button></Link>
      </p>
      {user ? (
        <div style={{display: 'flex', alignItems: 'center', marginLeft: '20px', border: '1px transparent',  boxShadow: '0px 6px 18px -9px rgba(0, 0, 0, 0.75)'}}>
          <p>Welcome, {user.username}!</p>
          <button style={{display: 'flex', alignItems: 'center', border: '1px transparent', marginLeft: '0px', padding: '10px', borderRadius: '10px', backgroundColor: 'transparent', color: 'white'}} onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login"><button style={{display: 'flex', alignItems: 'center', border: '1px transparent',  boxShadow: '0px 6px 18px -9px rgba(0, 0, 0, 0.75)', marginLeft: '20px', padding: '10px', borderRadius: '10px', backgroundColor: 'transparent', color: 'white'}}>Login</button></Link>
      )}
    </div>
    
  );
}

export default Header;
