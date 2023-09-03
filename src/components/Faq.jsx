import React from "react";
import FaqItem from "./FaqItem";
import { useState } from "react";
import { useSelector } from "react-redux";

const Faq = () => {
  const [open, setOpen] = useState("");
  const faq = useSelector((state) => state.fetchReducer.faq);
  return (
    <div className="faq">
      <h1>Hey! Have any questions?</h1>
      <div className="items">
        {faq.map((item) => (
          <FaqItem item={item} open={open} onSetOpen={setOpen} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
