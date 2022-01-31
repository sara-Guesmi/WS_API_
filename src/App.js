import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Admin from "./Pages/Admin";
import Errors from "./Pages/Errors";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import UserDetails from "./Pages/UserDetails";
import Users from "./Pages/Users";
import Private from "./Router/Private";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id_user" element={<UserDetails />} />

        <Route path="/admin" element={<Private isAuth={isAuth} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/*" element={<Errors />} />
      </Routes>
    </div>
  );
}

export default App;
