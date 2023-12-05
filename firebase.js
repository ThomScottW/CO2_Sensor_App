import {initializeApp} from "firebase/app";
import {getDatabase, ref, onValue} from "firebase/database";
import "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXINmBHzgSSWfuVgMyQ35c_KGADKa_F1U",
    authDomain: "co2-sensing-87192.firebaseapp.com",
    projectId: "co2-sensing-87192",
    storageBucket: "co2-sensing-87192.appspot.com",
    messagingSenderId: "221269277492",
    appId: "1:221269277492:web:b683d6a451b9f8b3b78361"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export {db, ref, onValue};