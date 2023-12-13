import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIZSPhvU9sdc_uiazbqENeCNrtGXQJaOI",
  authDomain: "unichat-ed6f8.firebaseapp.com",
  projectId: "unichat-ed6f8",
  storageBucket: "unichat-ed6f8.appspot.com",
  messagingSenderId: "477564800523",
  appId: "1:477564800523:web:f443ab58ef3fd4816b810e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
