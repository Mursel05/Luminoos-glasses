import React from "react";
import { useState } from "react";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("hidden error");
  const [eye, setEye] = useState("hide");
  const [type, setType] = useState("password");
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const check = passwordRegex.test(String(password).toLowerCase());
  const navigate = useNavigate();

  async function updatePassword(params) {
    await supabase.auth.updateUser({ password });
  }

  const resetPassword = () => {
    if (check) {
      setPasswordError("error hidden");
      updatePassword();
      navigate("/");
    } else {
      setPasswordError("error");
    }
  };

  return (
    <div className="new-password">
      <form action="/" onSubmit={resetPassword}>
        <div className="form-input-error">
          <div className="form-input">
            <label htmlFor="password">New Password</label>
            <div className="password-input">
              <input
                type={type}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (check) {
                    setPasswordError("error hidden");
                  }
                }}
                id="password"
              />
              <img
                onClick={() => {
                  setEye(eye === "hide" ? "show" : "hide");
                  setType(type === "text" ? "password" : "text");
                }}
                src={`/images/dark/icons/password-${eye}.png`}
                alt="eye"
              />
            </div>
          </div>
          <span className={passwordError}>
            Minimum eight characters, at least one letter
            <br /> and one number!
          </span>
        </div>
        <button>Update Password</button>
      </form>
    </div>
  );
};

export default NewPassword;
