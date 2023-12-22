import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    const handleSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const handlGoogleSignUp = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const handleUpdateUser =(userInfo)=>{
        setLoading(true);
      return  updateProfile(auth.currentUser,userInfo)
    };

    const handleSignIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const handleLogOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const authInfo = {
        handleSignUp,
        handlGoogleSignUp,
        handleLogOut,
        user,
        handleUpdateUser,
        loading,
        handleSignIn

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;