import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const useFirebase = () => {

    initializeAuthentication();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoding, setIsLoding] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const handleSignup = (event, name, email, password) => {
        event.preventDefault();
        setIsLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            handleUpdateProfile(name)
            setError('');
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(()=> setIsLoding(false));
    

    };
    const handleUpdateProfile = (name) => {
        setIsLoding(true)
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => {

        })
        .finally(()=> setIsLoding(false));
    };

    const handleSignin = (event, email, password) => {
        event.preventDefault();
        setIsLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
        
        .catch(error => {
            setError(error.message)
        })
        .finally(()=> setIsLoding(false));
    }

    const handleGoogleSignin = () => {
        setIsLoding(true)
        return signInWithPopup(auth, googleProvider)
        .catch(error => {
            setError(error.message)
        })
        .finally(()=> setIsLoding(false));
    };

    const handleSignOut = () => {
        setIsLoding(true)
        signOut(auth)
        .then(()=> {

        })
        .catch(error => {
            setError(error.message)
        })
        .finally(()=> setIsLoding(false));
    };

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoding(false);
        })
        return () => unsubscribed;
    },[]);

    return {
        user,
        error,
        isLoding,
        handleSignup,
        handleSignin,
        handleSignOut,
        handleGoogleSignin
    }
}
export default useFirebase;