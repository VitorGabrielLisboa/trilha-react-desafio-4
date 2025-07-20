import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { Input } from "./components/Input/Input";
import { Login } from "./pages/Login/Login";
import { User } from "./pages/User/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
