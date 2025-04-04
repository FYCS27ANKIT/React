import React, { useState } from 'react'
import Admin from './Admin';
import User from './User';

const Dashboard = () => {
    const[user, setUser] = useState(null);
    const loginAsAdmin = () => setUser({ name: "Admin"});
    const loginAsUser = () => setUser({ name: "User"});
    const logout = () => setUser(null);

    if (!user) {
      return (
      <>
      <div>
      <button onClick={loginAsAdmin}>Login as Admin</button>
      <button onClick={loginAsUser}>Login as User</button>
      </div>
      </>
    )
    } else {
      return (
        <>
        <div className="space-x-2">
        <span className="text-lg">Welcome, {user.name}</span>
        <button variant="destructive" onClick={logout}>Logout</button>
        {user.name === "Admin" ? (<Admin />) : (<User />)}
        </div> 
        </>
      )
    }
};

export default Dashboard
