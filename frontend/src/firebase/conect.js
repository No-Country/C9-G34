import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAqLTEoDfUaGLJVPcyFAsHh5MwhJBFtnTU",
    authDomain: "lumini-11a74.firebaseapp.com",
    projectId: "lumini-11a74",
    storageBucket: "lumini-11a74.appspot.com",
    messagingSenderId: "874473539777",
    appId: "1:874473539777:web:9379b3adedb5dc0071ec40"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore(app);