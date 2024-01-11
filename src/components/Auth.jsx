
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, } from '../firebase.config.js'
import { useState } from "react";
import Logout from './Logout.jsx'

function Auth() {

    const auth = getAuth();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const handleSubmit = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            console.log(userCredential)
            // ...
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle errors...
            console.log('------->',errorCode ,'+' , errorMessage)
        }
    };


    return (
        <div>
            <h1>auth jsx</h1>
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
            <button onClick={handleSubmit}>Signup</button>
            <br></br>
            <Logout />
        </div>
    )
}

export default Auth
