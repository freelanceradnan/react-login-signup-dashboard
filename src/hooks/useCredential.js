import { useEffect, useState } from "react";
import userDetails from '../data/user.json'

export const useCredential = () => {
    const [user, setUser] = useState({});
    const id = localStorage.getItem('uId');

    const userData = () => {
        const fetchData = async () => {
            try {
                // Change === to == to handle String vs Number
                const tempUser = userDetails.find(user => user.id == id) || {};
                setUser(tempUser);
            } catch (error) {
                console.log(error); // fixed 'err' to 'error'
            }
        };
        fetchData(); // <--- ADD THIS: Actually run the function you just defined
    };

    useEffect(() => {
        if (id) {
            userData();
        } else {
            setUser({});
        }
    }, [id]);

    const logout = () => {
        localStorage.removeItem('uId');
        setUser({});
    };

    return { user, setUser, logout };
};