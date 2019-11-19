import * as firebase from 'firebase';

// Initialize Firebase
let initFirebase
const firebaseConfig = {
    apiKey: "AIzaSyCcShtHNVIAN5xLjvZZseRPIQ3Ocw0UjrA",
    authDomain: "gnt-test.firebaseapp.com",
    databaseURL: "https://gnt-test.firebaseio.com",
    projectId: "gnt-test",
    storageBucket: "gnt-test.appspot.com",
    messagingSenderId: "391639250541",
    appId: "1:391639250541:web:422a538f84f95a284fb164",
    measurementId: "G-J7GN1F085Y"
};

const getClient = () => {
  if (!initFirebase) {
    initFirebase = firebase.initializeApp(firebaseConfig);
  }
  return { initFirebase, firebase }
}

export default getClient