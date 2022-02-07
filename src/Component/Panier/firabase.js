import { initializeApp } from 'firebase/app';
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyClR80NoVu-rHjreotFQGXrVo3LePSHJLg",
  authDomain: "react-5eb97.firebaseapp.com",
  projectId: "react-5eb97",
  storageBucket: "react-5eb97.appspot.com",
  messagingSenderId: "800206078554",
  appId: "1:800206078554:web:c8f171431a6ce75c3d8e63",
  measurementId: "G-3LL01X56M2"
};
	
 const app = initializeApp(firebaseConfig);
 export const db =getFirestore(app);
 
