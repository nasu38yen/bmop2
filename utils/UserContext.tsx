import { createContext, useState, useContext } from 'react';

const UserContext = createContext(undefined);

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(undefined);
    const value = {
        user,
        setUser,
    };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}