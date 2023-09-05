import React from "react";
import { useState } from "react";

const Service = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [glassesName, setGlassesName] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [frameAdjustment, setFrameAdjustment] = useState(false);
  const [lensReplacement, setLensReplacement] = useState(false);
  const [hingeRepair, setHingeRepair] = useState(false);
  const [other, setOther] = useState(false);
  const [textarea, setTextarea] = useState("");
  return (
    <div>
      <form action="/">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Telephone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
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
          <div>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setImage(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
            <img src={image} alt="Glasses" />
          </div>
          <input
            type="text"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <div>
            <div>
              <input
                type="checkbox"
                checked={hingeRepair}
                onChange={() => setHingeRepair(!hingeRepair)}
                id="hingeRepair"
              />
              <label htmlFor="hingeRepair">Hinge Repair</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={lensReplacement}
                onChange={() => setLensReplacement(!lensReplacement)}
                id="lensReplacement"
              />
              <label htmlFor="lensReplacement">Lens Replacement</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={frameAdjustment}
                onChange={() => setFrameAdjustment(!frameAdjustment)}
                id="frameAdjustment"
              />
              <label htmlFor="frameAdjustment">Frame Adjustment</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={other}
                onChange={() => setOther(!other)}
                id="other"
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <textarea cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Service;
