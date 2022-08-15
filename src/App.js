import React, { useState, useEffect } from "react";
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";

export default function App() {
  const [users, setUsers] = useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const json = await res.json();
    setUsers(json.data);
  };
  useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Users/>}>
          </Route>
          <Route path="/create" element={<CreateUser/>}>
          </Route>
      </Routes>
    </div>
  );
}
