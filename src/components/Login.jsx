import { toast } from "react-toastify";
import supabase from "../supabase";
import React, { useEffect, useState } from "react";
import { LanguageContext } from "../Router";
import { useContext } from "react";
import langData from "../languageData";

const Login = ({
  hiddenPart,
  onSetHiddenPart,
  onSetActiveProfile,
  onSetSigned,
  onSetFocusInput,
}) => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].login);

  useEffect(() => {
    setData(langData[language].login);
  }, [language]);

  const [eye, setEye] = useState("hide");
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("hidden error");
  const [nameError, setNameError] = useState("hidden error");
  const [passwordError, setPasswordError] = useState("hidden error");
  const [login, setLogin] = useState(data.sign);
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const check1 = emailRegex.test(String(email).toLowerCase());
  const check2 = passwordRegex.test(String(password).toLowerCase());
  const check3 = nameRegex.test(String(name).toLowerCase());
  const theme = localStorage.getItem("mode");

  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
  }, [login]);

  async function sendLink() {
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/New%20Password",
    });
  }
  const resetPassword = () => {
    if (check1) {
      sendLink();
      toast.info("Go to email and reset your password.");
      onSetHiddenPart("login");
      setLogin(data.sign);
      setName("");
      setEmail("");
      setPassword("");
    } else {
      setEmailError("error");
    }
  };
  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  }
  async function createUser() {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: name,
          admin: false,
        },
      },
    });
  }
  const signIn = (e) => {
    e.preventDefault();
    if (check1) {
      setEmailError("error hidden");
    } else {
      setEmailError("error");
      setEmail("");
    }
    if (check2) {
      setPasswordError("error hidden");
    } else {
      setPassword("");
      setPasswordError("error");
    }
    if (check1 && check2) {
      onSetSigned("in");
      signInWithEmail();
      onSetHiddenPart("login");
      onSetActiveProfile(`/images/${theme}/icons/account-icon.png`);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  const signUp = (e) => {
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
      createUser();
      toast.info("Go to email and confirm your user.");
      onSetHiddenPart("login");
      setLogin(data.sign);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={hiddenPart}>
      <h1 className="header">{login}</h1>
      {login === data.sign ? (
        <form action="/" onSubmit={signIn}>
          <div className="form-input-error">
            <div className="form-input">
              <label htmlFor="email">{data.email}</label>
              <input
                onFocus={() => onSetFocusInput(true)}
                onBlur={() => onSetFocusInput(false)}
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
                  onFocus={() => onSetFocusInput(true)}
                  onBlur={() => onSetFocusInput(false)}
                  type={type}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
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
            <span className={passwordError}>{data.errorPassword1}</span>
          </div>
          <span onClick={resetPassword} className="forgot-password">
            Forgot your password?
          </span>
          <button type="submit">{login}</button>
          <div className="switch-login">
            <span>{data.registerLink}</span>
            <span
              onClick={() => {
                login === data.sign
                  ? setLogin(data.register)
                  : setLogin(data.sign);
              }}
              className="login-link"
            >
              {data.register}
            </span>
          </div>
        </form>
      ) : (
        <form action="/" onSubmit={signUp}>
          <div className="form-input-error">
            <div className="form-input">
              <label htmlFor="name">{data.name}</label>
              <input
                onFocus={() => onSetFocusInput(true)}
                onBlur={() => onSetFocusInput(false)}
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
                onFocus={() => onSetFocusInput(true)}
                onBlur={() => onSetFocusInput(false)}
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
                  onFocus={() => onSetFocusInput(true)}
                  onBlur={() => onSetFocusInput(false)}
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
            <span className={passwordError}>{data.errorPassword2}</span>
          </div>
          <button type="submit">{login}</button>
          <div className="switch-login">
            <span>{data.signLink}</span>
            <span
              className="login-link"
              onClick={() => {
                login === data.sign
                  ? setLogin(data.register)
                  : setLogin(data.sign);
              }}
            >
              {data.sign}
            </span>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
