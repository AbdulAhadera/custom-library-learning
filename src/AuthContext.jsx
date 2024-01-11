import { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged,  } from 'firebase/auth';
import {app} from './firebase.config.js'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [uid, setUid] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);

            if (user) {
                setUid(user.uid);
            } else {
                setUid(null); // Clear UID when user logs out
            }
        });

        return () => unsubscribe();
    }, [auth]);


    return (
        <AuthContext.Provider value={{ user, uid }}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => useContext(AuthContext);