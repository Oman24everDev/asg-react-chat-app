import { createContext, useContext, useState } from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../database/firebase";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

    // sign in with google
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }
    

    const value = {
        currentUser, setCurrentUser, signInWithGoogle
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}