import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const theme = localStorage.getItem("mode");
  const [hoverFacebook, setHoverFacebook] = useState(
    `/images/${theme}/icons/facebook-logo.png`
  );
  const [hoverTwitter, setHoverTwitter] = useState(
    `/images/${theme}/icons/twitter-logo.png`
  );
  const [hoverInstagram, setHoverInstagram] = useState(
    `/images/${theme}/icons/instagram-logo.png`
  );
  return (
    <div>
      <h1>Contact Luminoos</h1>
      <div>
        <form action="/">
          <div>
            <input type="text" placeholder="Name" />
            <span>Should not be empty</span>
          </div>
          <div>
            <input type="email" placeholder="Email" />
            <span>Should not be empty</span>
          </div>
          <div>
            <input type="tel" placeholder="Telephone" />
            <span>Should not be empty</span>
          </div>
          <div>
            <textarea placeholder="Comment" cols="30" rows="10"></textarea>
          </div>
          <button>Submit</button>
        </form>
        <img
          src="/images/backgrounds/contact-us-side.jpg"
          alt="people with telephone"
        />
      </div>
      <div>
        <div>
          <span>Got questions? We’ve got answers.</span>
          <span>luminoosglasses@mail.ru</span>
          <span>+994 050 555 55 55</span>
        </div>
        <div>
          <span>
            You can also follow us and send a direct message to our Social
            Concierge Team:
          </span>
          <div className="apps-icons">
            <Link
              to={
                "https://www.facebook.com/profile.php?id=61550758257593&mibextid=ZbWKwL"
              }
              target="_blank"
            >
              <img
                onMouseEnter={() => {
                  setHoverFacebook(
                    `/images/${theme}/icons/facebook-logo-active.png`
                  );
                }}
                onMouseLeave={() => {
                  setHoverFacebook(`/images/${theme}/icons/facebook-logo.png`);
                }}
                src={hoverFacebook}
                alt="facebook"
              />
            </Link>
            <Link
              to={
                "https://instagram.com/luminoos1?utm_source=qr&igshid=ZDc4ODBmNjlmNQ=="
              }
              target="_blank"
            >
              <img
                onMouseEnter={() => {
                  setHoverInstagram(
                    `/images/${theme}/icons/instagram-logo-active.png`
                  );
                }}
                onMouseLeave={() => {
                  setHoverInstagram(
                    `/images/${theme}/icons/instagram-logo.png`
                  );
                }}
                src={hoverInstagram}
                alt="instagram"
              />
            </Link>
            <Link to={"https://twitter.com/Luminoos13882?s=09"} target="_blank">
              <img
                onMouseEnter={() => {
                  setHoverTwitter(
                    `/images/${theme}/icons/twitter-logo-active.png`
                  );
                }}
                onMouseLeave={() => {
                  setHoverTwitter(`/images/${theme}/icons/twitter-logo.png`);
                }}
                src={hoverTwitter}
                alt="twitter"
              />
            </Link>
          </div>
          <span>
            Reaching out to us with a direct message is fast and easy. Our
            Social Concierge Team is ready to assist you!
          </span>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.3285531093393!2d-77.06181904126866!3d38.871856799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b6df29ed2c27%3A0xaf83d0f8c013532f!2sPentaqon!5e1!3m2!1saz!2saz!4v1694044644006!5m2!1saz!2saz"
        width="600"
        title="map"
        height="450"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactUs;
