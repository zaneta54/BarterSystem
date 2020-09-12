import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyACFtla6uBsKFME68ij_ijtQVxebIBtb3w",
  authDomain: "bartersystem-caa57.firebaseapp.com",
  databaseURL: "https://bartersystem-caa57.firebaseio.com",
  projectId: "bartersystem-caa57",
  storageBucket: "bartersystem-caa57.appspot.com",
  messagingSenderId: "178908945753",
  appId: "1:178908945753:web:59dd8c52a53fef423ac048"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();