import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIAQNaKIFSk38E5v8qN0wHCN4oxHYZHYo",
  authDomain: "my-amzon-clone-fc9f5.firebaseapp.com",
  projectId: "my-amzon-clone-fc9f5",
  storageBucket: "my-amzon-clone-fc9f5.appspot.com",
  messagingSenderId: "747220914024",
  appId: "1:747220914024:web:0e1e3b20efe8eb14ea90dd"
};


//intialize firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export {auth, db}