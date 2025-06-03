import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBA4H9fP-iAgK7c-IX62-lGq4rjWWn1psU",
  authDomain: "webproyecto-45be0.firebaseapp.com",
  projectId: "webproyecto-45be0",
  storageBucket: "webproyecto-45be0.appspot.com", 
  messagingSenderId: "1036561203520",
  appId: "1:1036561203520:web:00f3e5bc93a5c0717c7aa5",
  measurementId: "G-2KFMS4K922"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar autenticación con Google
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Exportar para usar en main.js
export { auth, provider };
