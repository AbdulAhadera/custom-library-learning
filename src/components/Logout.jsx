import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../firebase.config.js';

function Logout() {
    const [user, setUser] = useState(null);

    const auth = getAuth();

    useEffect(() => {
        // Subscribe to changes in the user's authentication state
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            setUser(userAuth);
            const uid = auth.currentUser.uid;
            console.log(uid)
        });
        // Unsubscribe when the component unmounts
        return () => unsubscribe();
    }, [auth]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // Additional actions you may want to perform after the user is logged out
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div>
            <h1>Auth JSX</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.email}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Please sign in.</p>
            )}
        </div>
    );
}

export default Logout;
