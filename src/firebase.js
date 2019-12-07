import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBXx3LVxPjk06qgPAr_02f0oq7x2QXwrDU",
    authDomain: "hackathongdg2019.firebaseapp.com",
    databaseURL: "https://hackathongdg2019.firebaseio.com",
    projectId: "hackathongdg2019",
    storageBucket: "hackathongdg2019.appspot.com",
    messagingSenderId: "595581498267",
    appId: "1:595581498267:web:ba5e0ad7755a6f1231a73e"
}

firebase.initializeApp(config);

export const database = firebase.database();