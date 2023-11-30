
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const signUp = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    // login user
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update user info
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL: photo
           })
     }
    //  google login 
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // user's state info
    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
            if (currentUser) {
                setLoading(false)
                console.log(user.email);
            } else {
                setLoading(false)
              return ()=> {unsubscribe()}
            }
          });
    },[])
     
      
    const authInfo = {
        user,
        loading,
        googleLogin,
        signUp,
        logIn,
        updateUserProfile,
        logOut,
    }
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider