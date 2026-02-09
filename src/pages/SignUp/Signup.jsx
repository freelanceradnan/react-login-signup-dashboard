import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { initializeApp } from "firebase/app";
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    onAuthStateChanged 
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDmKAfA94hk8C28_08Df76l_m5xSsb6FoU",
    authDomain: "adnan-dashboard.firebaseapp.com",
    projectId: "adnan-dashboard",
    storageBucket: "adnan-dashboard.firebasestorage.app",
    messagingSenderId: "288286100809",
    appId: "1:288286100809:web:9873c175480d9101ef9e98",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Signup = () => {
const {user,setUser}=useAuth()
 let navigate=useNavigate()
    let location=useLocation()
    let from=location?.state?.from?.pathname||"/"
useEffect(()=>{
user.gmail && navigate(from,{replace:true})
},[from,navigate,user?.gmail])
   
  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("Logged in user:", user);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleGoogleSignin = async () => {
        try {
            
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // console.log("result:", user);
            
            alert(`Welcome ${user.displayName}!`);
            const tempUser={
                id:user.uid,
                gmail:user.email,
                name:user.displayName,
                image:user.photoURL
            }
            setUser({...tempUser})
            // console.log(tempUser)
            
            localStorage.setItem('uId',tempUser.id)
           
        } catch (error) {
            console.error("Error during sign-in:", error.message);
    
        }
    };
 
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            <div className="flex flex-col justify-center items-center h-[calc(100vh-80px)]">
                <div className="bg-white p-10 rounded-xl shadow-2xl text-center border border-gray-100">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h1>
                    <p className="text-gray-500 mb-8">Join our dashboard with your Google account</p>
                    
                    <button 
                        onClick={handleGoogleSignin} 
                        className="flex items-center justify-center gap-3 w-full rounded-lg px-6 bg-emerald-600 py-3 text-white font-semibold hover:bg-emerald-700 transition-all active:scale-95 shadow-md"
                    >

                        Sign in with Google
                    </button>
                    
                   
                </div>
            </div>
        </div>
    );
}

export default Signup;