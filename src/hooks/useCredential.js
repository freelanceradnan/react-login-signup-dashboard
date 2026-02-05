import { useState } from "react"

export const useCredential = () => {
   
    const id=localStorage.getItem('uId')
    const [user, setUser] = useState({});
    return [user, setUser]
}
export default useCredential