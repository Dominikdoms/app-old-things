import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-Xog87iSfKiSlVX_J09MsixuyG3jJbpc",
    authDomain: "old-things-55116.firebaseapp.com",
    databaseURL: "https://old-things-55116-default-rtdb.firebaseio.com",
    projectId: "old-things-55116",
    storageBucket: "old-things-55116.appspot.com",
    messagingSenderId: "198062407467",
    appId: "1:198062407467:web:a1b3c23feb915434e9cf6e"
};


class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }else {
            app.app(); // if already initialized, use that one
        }

        this.auth = app.auth();
        this.db = app.firestore();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);


    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
}

export default Firebase;

