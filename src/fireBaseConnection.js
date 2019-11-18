import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCcShtHNVIAN5xLjvZZseRPIQ3Ocw0UjrA",
    authDomain: "gnt-test.firebaseapp.com",
    databaseURL: "https://gnt-test.firebaseio.com",
    projectId: "gnt-test",
    storageBucket: "gnt-test.appspot.com",
    messagingSenderId: "391639250541",
    appId: "1:391639250541:web:422a538f84f95a284fb164",
    measurementId: "G-J7GN1F085Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;