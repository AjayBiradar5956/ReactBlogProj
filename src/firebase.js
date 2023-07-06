import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9slSbqccTU5IaFNkteV0TwJjnuhjz32Q",
    authDomain: "react-hooks-blog-12d2d.firebaseapp.com",
    projectId: "react-hooks-blog-12d2d",
    storageBucket: "react-hooks-blog-12d2d.appspot.com",
    messagingSenderId: "313553602075",
    appId: "1:313553602075:web:92f63b3a877dae66da5abe"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
