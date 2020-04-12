import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDSPK-E71i2L37e9uIbCl0eMt29-sTnxSQ',
  authDomain: 'react-slack-clone-bfb12.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-bfb12.firebaseio.com',
  projectId: 'react-slack-clone-bfb12',
  storageBucket: 'react-slack-clone-bfb12.appspot.com',
  messagingSenderId: '66673725692',
  appId: '1:66673725692:web:dca72f1038e91777c04779'
};
firebase.initializeApp(firebaseConfig);

export default firebase;
