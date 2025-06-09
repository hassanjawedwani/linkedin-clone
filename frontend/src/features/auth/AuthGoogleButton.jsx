import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./authSlice";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthGoogleButton = () => {
  const dispatch = useDispatch();

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {

        const user = {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL
        }

        dispatch(setUser(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      onClick={loginWithGoogle}
      className="flex items-center justify-center gap-2 font-bold text-black/70 mr-2 hover:bg-black/5 border border[text-black/70]  w-96 h-12 rounded-full"
    >
      <img src="/images/google.svg" alt="Google logo" />
      <span>Continue with Google</span>
    </button>
  );
};

export default AuthGoogleButton;
