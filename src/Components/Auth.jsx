import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(auth?.currentUser?.photoURL);

  return (
    <div className="w-96 mx-auto my-8 shadow p-6 bg-green-100 ">
      <div className="flex flex-col gap-4">
        
        <input
          className="border-2 border-slate-500 p-2 rounded-lg"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="border-2 border-slate-500 p-2 rounded-lg"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="bg-yellow-200 p-2 w-full hover:bg-yellow-300"
          onClick={signUp}
        >
          Sign Up
        </button>
        <button
          className="bg-blue-400 p-2 w-full hover:bg-yellow-300"
          onClick={signUpWithGoogle}
        >
          Sign Up With Google
        </button>
        <button
          className=" text-slate-400 hover:text-slate-950 underline"
          onClick={logOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Auth;
