import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYh6va2jBobDyIRNO_Qfnzx55k7esiJio",
  authDomain: "devlinks-84b5e.firebaseapp.com",
  projectId: "devlinks-84b5e",
  storageBucket: "devlinks-84b5e.appspot.com",
  messagingSenderId: "693355269828",
  appId: "1:693355269828:web:af5630819e6d6183360391"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }