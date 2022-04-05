import React, { useState, createContext, useContext, useEffect } from "react";
import firebase from 'firebase/compat/app';
import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,  } from "firebase/auth";
    
//invoke and export createContext component

 export const AuthContext = createContext({
    // currentUser: null,
    // setCurrentUser: () => {},
    // useAuth: () => {},
 }  )

//  export const setCurrentUser = () => {
    
//   }

    // export const AuthContext = createContext( {currentUser: null })
    
    export const useAuth = () => {
        const [ currentUser, setCurrentUser ] = useState(AuthContext);
        
        useEffect(() => {
            const auth = getAuth();
            console.log('Auth Context user created')
            const unsub = onAuthStateChanged(auth, user => setCurrentUser(user), console.log('Auth Context user created'));
            return unsub;
        }, [10000]);
        return currentUser;
    }
  
    export default function AuthContextProvider({ children }){

        const [ currentUser, setCurrentUser ] = useState(AuthContext);

        const value = {
        currentUser, setCurrentUser,
        }
   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}