import React from "react";
import { useNavigate } from "react-router-dom";

const Thank = () => {
  const navigate = useNavigate();
  return (
    <div className="thank">
      <img src="/images/light/icons/done-icon.png" alt="done" />
      <p>Thank you for shopping with us.</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Continue shopping
      </button>
    </div>
  );
};

export default Thank;
