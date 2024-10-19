import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

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