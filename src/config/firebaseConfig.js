import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyARPUXvTfC8C6BlY-d_2RUfcwe35BQAL6c",
  authDomain: "e-commerce-tododulce.firebaseapp.com",
  projectId: "e-commerce-tododulce",
  storageBucket: "e-commerce-tododulce.appspot.com",
  messagingSenderId: "394222616220",
  appId: "1:394222616220:web:9aa7aa0697f4f926843759",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la referencia para que este disponible en toda nuestra aplicacion
export const db = getFirestore(app);
