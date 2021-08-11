import {auth} from "./firebase";

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar.events');
    return auth().signInWithPopup(provider);
}

export function logout() { 
    return auth().signOut();
}