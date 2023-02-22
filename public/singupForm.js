import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from "./firebase.js";


const singupForm = document.querySelector("#singup-form");

singupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = singupForm["email-singup"].value;
  const pwd = singupForm["password-singup"].value;

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      pwd
    );
    console.log(userCredentials);
  } catch (error) {
    console.log(error);
  }
});
