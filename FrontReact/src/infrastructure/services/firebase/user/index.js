import {auth} from "../firebase";
import {signInWithGoogle, logout} from "../auth";

export default {
    getUser: () => {
        return {
            userName:auth().currentUser.displayName,
            userEmail:auth().currentUser.email,
            userImage:auth().currentUser.photoURL,
            userId: auth().currentUser.uid,
            userPhone: auth().currentUser.phoneNumber
        }
    },
    authUserWithGoogle: () => { 
        return signInWithGoogle();
    },
    logout: () => {
        return logout();
    }
}