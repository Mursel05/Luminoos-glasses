import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { LanguageContext, LoginContext } from "../Router";
import supabase from "../supabase";
import langData from "../languageData";
import { useEffect } from "react";

const Account = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].account);

  useEffect(() => {
    setData(langData[language].account);
  }, [language]);
  const session = useContext(LoginContext);
  console.log(session);
  const [eye, setEye] = useState("hide");
  const [type, setType] = useState("password");
  const [email, setEmail] = useState(session && session.user.email);
  const [name, setName] = useState(
    session && session.user.user_metadata.first_name
  );
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("hidden error");
  const [nameError, setNameError] = useState("hidden error");
  const [passwordError, setPasswordError] = useState("hidden error");
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const check1 = emailRegex.test(String(email).toLowerCase());
  const check2 = passwordRegex.test(String(password).toLowerCase());
  const check3 = nameRegex.test(String(name).toLowerCase());

  async function updateUser() {
    const { data: emailData, error: emailError } =
      await supabase.auth.updateUser({
        email,
      });
    const { data: passwordData, error: passwordError } =
      await supabase.auth.updateUser({
        password,
      });
    const { data, error } = await supabase.auth.updateUser({
      data: {
        first_name: name,
      },
    });
  }

  const update = (e) => {
    e.preventDefault();
    if (check1) {
      setEmailError("error hidden");
    } else {
      setEmailError("error");
      setEmail("");
    }
    if (check3) {
      setNameError("error hidden");
    } else {
      setName("");
      setNameError("error");
    }
    if (check2) {
      setPasswordError("error hidden");
    } else {
      setPassword("");
      setPasswordError("error");
    }
    if (check1 && check2 && check3) {
      toast.success("Account updated successfully.");
      updateUser();
    }
  };
  return (
    <div className="account">
      <form action="/" onSubmit={update}>
        <div className="form-input-error">
          <div className="form-input">
            <label htmlFor="name">{data.name}</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (check3) {
                  setNameError("error hidden");
                }
              }}
            />
          </div>
          <span className={nameError}>{data.errorName}</span>
        </div>
        <div className="form-input-error">
          <div className="form-input">
            <label htmlFor="email">{data.email}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (check1) {
                  setEmailError("error hidden");
                }
              }}
            />
          </div>
          <span className={emailError}>{data.errorEmail}</span>
        </div>
        <div className="form-input-error">
          <div className="form-input">
            <label htmlFor="password">{data.password}</label>
            <div className="password-input">
              <input
                type={type}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (check2) {
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
          <span className={passwordError}>{data.errorPassword}</span>
        </div>
        <button type="submit">{data.button}</button>
      </form>
    </div>
  );
};

export default Account;
