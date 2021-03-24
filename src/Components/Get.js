import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navigation from "./Navigation";

function Get() {
  const [getData, setGetData] = useState({});
  useEffect(() => {
    fetch("https://examplebd.com/api/get-csrf-token")
      .then((res) => res.json())
      .then((data) => setGetData(data));
  }, []);
  return (
    <div>
      <Navigation />
      <h1 className="mt-5">{getData.csrf_token}</h1>
    </div>
  );
}

export default Get;
