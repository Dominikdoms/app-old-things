import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC-Xog87iSfKiSlVX_J09MsixuyG3jJbpc",
    authDomain: "old-things-55116.firebaseapp.com",
    projectId: "old-things-55116",
    storageBucket: "old-things-55116.appspot.com",
    messagingSenderId: "198062407467",
    appId: "1:198062407467:web:a1b3c23feb915434e9cf6e"
};
// Initialize Firebase
export const firebaseData = firebase.initializeApp(firebaseConfig);


// export const firebaseData = firebase.initializeApp(firebaseConfig).firestore();


// var db = firebase.firestore();
// Wartości parametru „initializeApp” można znaleźć w pliku „firebaseConfig”
// aplikacji internetowej. Aby zachować dane, gdy urządzenie utraci połączenie,
// zapoznaj się z dokumentacją dotyczącą włączania danych offline .