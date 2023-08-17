import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import Product from "./Product";
const BestSeller = () => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("Products")
        .select("*")
        .eq("bestSeller", true)
        .limit(4);
      if (error) throw error;
      if (data !== "") setData(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (data !== "") {
    return (
      <div className="bestSeller">
        {data.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    );
  }
};

export default BestSeller;
