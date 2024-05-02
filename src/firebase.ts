// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKeyは公開しても問題ない @see https://firebase.google.com/docs/web/setup?hl=ja
  apiKey: 'AIzaSyCxCf0jzKp3NsasNfux0T99Ge9s8k8neWM',
  authDomain: 'discord-clone-b28f6.firebaseapp.com',
  projectId: 'discord-clone-b28f6',
  storageBucket: 'discord-clone-b28f6.appspot.com',
  messagingSenderId: '628692769312',
  appId: '1:628692769312:web:3fc5ef9c51b657fd2dba45',
  measurementId: 'G-7YWBRK1VXE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// firebase利用
const db = getFirestore(app); // Cloud Firestore
const auth = getAuth(app); // 認証
const provider = new GoogleAuthProvider(); // Googleの認証用

export { auth, provider, db }; // 他のファイルから利用可能にする
