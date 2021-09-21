// import * as firebase from 'firebase'
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";


// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

var firebaseConfig = {

    // Import the functions you need from the SDKs you need

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration{
    apiKey: "AIzaSyDgxQEH2vpct1MyA7l0OmsBHrRC4gXbERY",
    authDomain: "contact-page-96905.firebaseapp.com",
    projectId: "contact-page-96905",
    storageBucket: "contact-page-96905.appspot.com",
    messagingSenderId: "419054102183",
    appId: "1:419054102183:web:460e02f62e67f17dc85d82"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const db = firebaseApp.firestore();

export { db };