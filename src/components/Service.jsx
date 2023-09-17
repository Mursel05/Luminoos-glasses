import supabase from "../supabase";
import React, { useRef } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Service = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("hidden");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("hidden");
  const [tel, setTel] = useState("");
  const [telError, setTelError] = useState("hidden");
  const [glassesName, setGlassesName] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState("hidden");
  const [frameAdjustment, setFrameAdjustment] = useState(false);
  const [lensReplacement, setLensReplacement] = useState(false);
  const [hingeRepair, setHingeRepair] = useState(false);
  const [other, setOther] = useState(false);
  const [problemError, setProblemError] = useState("hidden");
  const [textarea, setTextarea] = useState("");
  const inputRef = useRef(null);

  async function sendForm() {
    const { error } = await supabase.from("service").insert({
      perName: name,
      email,
      tel,
      glassName: glassesName,
      brand,
      type,
      image,
      problem: [
        frameAdjustment ? "Frame-Adjustment" : "",
        lensReplacement ? "Lens-Replacement" : "",
        hingeRepair ? "Hinge-Repair" : "",
        other ? textarea : "",
      ],
    });
    console.log(error);
  }
  function checkForm(e) {
    e.preventDefault();
    if (!name) {
      setNameError("error");
    } else if (!email) {
      setEmailError("error");
    } else if (!tel) {
      setTelError("error");
    } else if (
      !frameAdjustment &&
      !lensReplacement &&
      !hingeRepair &&
      !textarea
    ) {
      setProblemError("error");
    } else if (!image) {
      setImageError("error");
    } else {
      sendForm();
      window.location.reload();
    }
  }

  return (
    <form action="/" className="service" onSubmit={checkForm}>
      <div className="glasses-person">
        <div className="header-part">
          <p>Person Details</p>
          <div className="person-details">
            <div className="error-input">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  name && setNameError("hidden");
                  setName(e.target.value);
                }}
              />
              <span className={nameError}>Should not be empty</span>
            </div>
            <div className="error-input">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  email && setEmailError("hidden");
                  setEmail(e.target.value);
                }}
              />
              <span className={emailError}>Should not be empty</span>
            </div>
            <div className="error-input">
              <input
                type="tel"
                placeholder="Telephone"
                value={tel}
                onChange={(e) => {
                  tel && setTelError("hidden");
                  setTel(e.target.value);
                }}
              />
              <span className={telError}>Should not be empty</span>
            </div>
          </div>
        </div>
        <div className="header-part">
          <p>Glasses Details</p>
          <div className="glasses-details">
            <div className="glasses-info">
              <input
                type="text"
                placeholder="Name"
                value={glassesName}
                onChange={(e) => setGlassesName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <input
                type="text"
                placeholder="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="problem-image">
              <div className="problem">
                <div className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={hingeRepair}
                    onChange={() => setHingeRepair(!hingeRepair)}
                    id="hingeRepair"
                  />
                  <label htmlFor="hingeRepair">Hinge Repair</label>
                </div>
                <div className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={lensReplacement}
                    onChange={() => setLensReplacement(!lensReplacement)}
                    id="lensReplacement"
                  />
                  <label htmlFor="lensReplacement">Lens Replacement</label>
                </div>
                <div className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={frameAdjustment}
                    onChange={() => setFrameAdjustment(!frameAdjustment)}
                    id="frameAdjustment"
                  />
                  <label htmlFor="frameAdjustment">Frame Adjustment</label>
                </div>
                <div className="other-textarea">
                  <div className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={other}
                      onChange={() => setOther(!other)}
                      id="other"
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                  {other && (
                    <textarea
                      cols="30"
                      rows="7"
                      value={textarea}
                      onChange={(e) => {
                        if (
                          !frameAdjustment &&
                          !lensReplacement &&
                          !hingeRepair &&
                          !textarea
                        ) {
                          setProblemError("hidden");
                        }
                        setTextarea(e.target.value);
                      }}
                    ></textarea>
                  )}
                  <span className={problemError}>Should not be empty</span>
                </div>
              </div>
              <div className="image">
                <input
                  ref={inputRef}
                  type="file"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setImage(URL.createObjectURL(e.target.files[0]));
                    }
                    image && setImageError("hidden");
                  }}
                />
                <button type="button" onClick={() => inputRef.current.click()}>
                  Choose image
                </button>
                {image && <img src={image} alt="Glasses" />}
                <span className={imageError}>Should not be empty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Service;
