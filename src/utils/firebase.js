// // // Firebase App (the core Firebase SDK) is always required and must be listed first
// // import firebase from "firebase/app";

// // // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// // // import "firebase/analytics";

// // // Add the Firebase products that you want to use
// // import "firebase/auth";
// // import "firebase/firestore";

// // //Initialize Firebase in your app
// // // TODO - da si sloja apiKEy, appId i projectId v env files i da si gi cheta ot tam!!!!!!!!!!!!!!!!!!!
// // const firebaseConfig = {
// //   apiKey: process.env.REACT_APP_FIREBASE_APPKEY,
// //   authDomain: "petmypet-pd.firebaseapp.com",
// //   projectId: "petmypet-pd",
// //   storageBucket: "petmypet-pd.appspot.com",
// //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// //   appId: process.env.REACT_APP_FIREBASE_APPID,
// // };

// // // Initialize Firebase only if it is not initialized already - - tova mi gyrmi, kogato nqmam initializiran firebase!!!!!!
// // // if (!firebase.app.length) {
// // firebase.initializeApp(firebaseConfig);
// // // }

// // const authentication = function () { };
// // const auth = firebase.auth();

// // authentication.login = async function (email, password) {
// //   return new Promise((resolve, reject) => {
// //     auth.signInWithEmailAndPassword(email, password)
// //       .then((userCreds) => resolve(userCreds))
// //       .catch((reason) => reject(reason)); //to catch the firebase throw, otherwise "Uncaught error"!!!!!
// //   });
// // };

// // authentication.register = async function (email, password, repeatPassword) {
// //   return new Promise((resolve, reject) => {
// //     if (password !== repeatPassword || password === '' || repeatPassword === '') {
// //       console.log(email, password, 1);
// //       reject(new Error('Password fields must match and not be empty.'));
// //     } else {
// //       console.log(email, password, 2);
// //       auth.createUserWithEmailAndPassword(email, password)
// //         .then((userCreds) => resolve(userCreds))
// //         .catch((reason) => reject(reason)); //to catch the firebase throw, otherwise "Uncaught error"!!!!!
// //     }
// //   });
// // };

// // authentication.logout = async function () {
// //   return await auth.signOut();
// // };

// // authentication.onUserAuthStateChanged = function (user, setUser) {
// //    auth.onAuthStateChanged((user) => {
// //     if (user) {
// //       // User is signed in, see docs for a list of available properties
// //       // https://firebase.google.com/docs/reference/js/firebase.User
// //       var uid = user.uid;
// //       console.log(user);
// //       console.log(uid);
// //       console.log("Logged In")
// //     } else {
// //       // User is signed out
// //       console.log("Logged out")
// //     }
// //     setUser(user);
// //   });
// // }
// // // authentication.onUserAuthStateChanged();

// // export default authentication;

// // export {firebase};