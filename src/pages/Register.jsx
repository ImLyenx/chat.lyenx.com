import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <h1>Lyenx</h1>
          <span>Sign up</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Display name" />
            <input type="email" placeholder="E-mail adress" />
            <input type="password" placeholder="Password (6 characters min.)" />
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <label htmlFor="fileInput">Choose a profile picture</label>
            <button disabled={loading}>Register</button>
            {loading && <span className="error">Loading...</span>}
            {err && <span className="error">Something went wrong...</span>}
          </form>
          <p>
            Already have an account ?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
