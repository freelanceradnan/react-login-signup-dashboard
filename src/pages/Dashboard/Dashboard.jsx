import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';

function Dashboard() {
    const {user,logout}=useAuth()
    return (
        <div>
            <Navbar/>
            <h2 className="py-4">welcome {user.name}</h2>
            <button className="rounded-sm w-50 bg-emerald-600 py-2 text-white" onClick={()=>logout()}>Logout</button>
        </div>
    );
}

export default Dashboard;