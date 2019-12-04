import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({ apiKey: "AIzaSyANMzx0d9NoG5PcdFc46p6ANuG7opErYsw",
authDomain: "chatbox-app-b0222.firebaseapp.com",
databaseURL: "https://chatbox-app-b0222.firebaseio.com"})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}
export default base