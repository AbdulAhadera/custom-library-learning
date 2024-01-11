import { app, db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useAuth } from "../AuthContext"; // Assuming you have an AuthContext

function SendData() {
    const [data, setData] = useState("");
    const { uid } = useAuth(); // Use the context to get UID

    const sendData = async () => {
        try {
            if (!uid) {
                console.error("User not authenticated");
                return;
            }

            const docRef = await addDoc(collection(db, "data"), {
                data: data,
                userId: uid, // Add the UID to associate the data with the user
            });

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <>
            <h1>Send data</h1>
            <input
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="Enter your data"
            />
            <button onClick={sendData}>Add Data</button>
        </>
    );
}

export default SendData;
