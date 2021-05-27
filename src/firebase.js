import firebase from "firebase/app"
import  "firebase/auth"

const app=firebase.initializeApp({
    apiKey: "AIzaSyAKpXj6JqLaXGnCEZI0niyr0PP7h7zSTus",
    authDomain: "auth-development-a79f6.firebaseapp.com",
    projectId: "auth-development-a79f6",
    storageBucket: "auth-development-a79f6.appspot.com",
    messagingSenderId: "921330184076",
    appId: "1:921330184076:web:4671c86a25d2ca36caf0a9"
  });

  export const auth=app.auth()
  export const facebookProvider= new firebase.auth.FacebookAuthProvider()
  export const googleProvider= new firebase.auth.GoogleAuthProvider()
  export const githubProvider= new firebase.auth.GithubAuthProvider()
  export default app