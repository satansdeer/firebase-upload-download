import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
  "projectId": "frb-upl-dwnld",
  "appId": "1:449223923398:web:f59d2f5c15bf04379fe9c7",
  "databaseURL": "https://frb-upl-dwnld.firebaseio.com",
  "storageBucket": "frb-upl-dwnld.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyDIYuuRTSRca_29m1CsLjKyNxAeRfaDZiA",
  "authDomain": "frb-upl-dwnld.firebaseapp.com",
  "messagingSenderId": "449223923398"
});