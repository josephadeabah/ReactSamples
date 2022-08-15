import React, { useState, useEffect } from "react";
import Apicalls from "../components/enpoints/api";

export default function CreateUser() {
    const [singleuser, setSingleUser] = useState([]);

  const getUser = async () => {
    const dat = await Apicalls.createUser();
    console.log("creating user", dat)
    setSingleUser();
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">
  
    </div>
  );
}
