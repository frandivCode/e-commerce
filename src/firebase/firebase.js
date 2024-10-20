import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_26YVrmISpeprNAI3suEOHX-CPWGynEA",
    authDomain: "ecommerce-react-7b276.firebaseapp.com",
    projectId: "ecommerce-react-7b276",
    storageBucket: "ecommerce-react-7b276.appspot.com",
    messagingSenderId: "420221411990",
    appId: "1:420221411990:web:c9abe4e7ee1a3f825a18b7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Pedir orden

export async function sendOrder(order) {
    const ordersCollection = collection(db, 'orders');

    try {
        const docRefOrder = await addDoc(ordersCollection, order);
        console.log('Nueva orden generada' + docRefOrder.id);
        return docRefOrder.id
    } catch (error) {
        console.log('Error al agregar el documento' + error)
    }
}   