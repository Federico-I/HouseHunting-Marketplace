import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopUp,
  GoogleAuthoProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup();
      const user = result.user;

      // check form user
      const docRef = doc(db, "user", user.uid);
      const docSnap = await getDoc(docRef);

      // If user, doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "user", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  };

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-in" ? "up" : "in"}with </p>
      <button className="socilaIconDiv">
        <img className="socilaIconImg" src={googleIcon} alt="google" />
      </button>
    </div>
  );
}

export default OAuth;
