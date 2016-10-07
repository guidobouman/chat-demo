import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD-iOjrWvOzVH8BxUptg1k1prW4F7M0nZE',
  authDomain: 'chat-demo-d6913.firebaseapp.com',
  databaseURL: 'https://chat-demo-d6913.firebaseio.com',
  storageBucket: 'chat-demo-d6913.appspot.com',
  messagingSenderId: '1017494373038',
};
const app = Firebase.initializeApp(config);
const database = app.database();

const messageListRef = database.ref('messages');

export default messageListRef;
