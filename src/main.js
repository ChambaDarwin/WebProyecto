// src/main.js
import { auth, provider } from './firebase-config.js';
import { signInWithPopup } from 'firebase/auth';

document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Usuario autenticado:", user.displayName);
  } catch (error) {
    console.error("Error de autenticación:", error);
  }
});
