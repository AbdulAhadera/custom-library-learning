

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase.config";
import { useAuth } from "../AuthContext";
import { useState } from "react";

function Login() {

    const auth = getAuth();
    const {uid} = useAuth()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('user logged in --->',user.uid)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    return (
        <>
        <div>Login</div>
         <input
                className='input'
                placeholder='Enter your Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <br></br>
            <input
                className='input'
                placeholder='Enter your Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Login</button>
            </>
    )
}

export default Login