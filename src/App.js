import React, {useEffect} from "react";
import firebase from './firebase';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom"; 
import ChatPage from './components/ChatPage/ChatPage';
import LoginPage from './components/Loginpage/Loginpage';
import RegisterPage from './components/ReguisterPage/RegisterPage';
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./redux/actions/user_action";
import { getAuth, onAuthStateChanged } from "firebase/auth";
function App() {

  //const navigate = useNavigate();
  //let dispatch = useDispatch();
  //const isLoading = useSelector((state) => state.user.isLoading);

  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigate("/");
  //       dispatch(setUser(user));
  //       const uid = user.uid;
  //       // ...
  //     } else {
  //       navigate("/login");
  //       dispatch(clearUser());
  //       // User is signed out
  //       // ...
  //     }
  //   });
  // }, []);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
</Routes>
    </Router>
  );
}

export default App;
