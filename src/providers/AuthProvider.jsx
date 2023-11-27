
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const signUp = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    // login user
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update user info
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL: photo
           })
     }
    // user's state info
    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
            if (user) {
                console.log(user.email);
            } else {
              return ()=> {unsubscribe()}
            }
          });
    },[])
     
      
    const authInfo = {
        user,
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