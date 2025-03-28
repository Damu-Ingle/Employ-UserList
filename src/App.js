import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UsersList from "./components/UserList";
import "./App.css";

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
