import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAIhNHLDD70CsTv2bS7xJvWVm556LIYPhs",
  authDomain: "ebe-fleks.firebaseapp.com",
  projectId: "ebe-fleks",
  storageBucket: "ebe-fleks.appspot.com",
  messagingSenderId: "198073828928",
  appId: "1:198073828928:web:015bfbc892457ce63601a5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
