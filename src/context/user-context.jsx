import { createContext, useState } from "react";


//actual value to access
export const UserContext = createContext({
    currentUser: null,
    
})


//provider
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}
    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}

