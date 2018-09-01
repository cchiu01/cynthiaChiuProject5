import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAjIYg60495KPcI_EboaDcSEA0FQp1h8SA",
    authDomain: "project5-weatherapp.firebaseapp.com",
    databaseURL: "https://project5-weatherapp.firebaseio.com",
    projectId: "project5-weatherapp",
    storageBucket: "project5-weatherapp.appspot.com",
    messagingSenderId: "974902968007"
};
firebase.initializeApp(config);


export default firebase