
import { initializeApp } from "firebase/app";
import{getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA9yec2KfKwvT5sGEllKXuOc1EqtImcHmE",
  authDomain: "imagebox-cf01d.firebaseapp.com",
  projectId: "imagebox-cf01d",
  storageBucket: "imagebox-cf01d.appspot.com",
  messagingSenderId: "912457187488",
  appId: "1:912457187488:web:5223e88e76917f5ed509c5"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);