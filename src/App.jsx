import React from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Component/Login";
import UserList from "./Component/UserList";
import UserEdit from "./Component/UserEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/edit/:id" element={<UserEdit />} />
      </Routes>
    </>
  );
}

export default App;
