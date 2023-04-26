import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Regester from "./pages/Register";
import BlogPost from "./pages/BlogPost";
import Order from "./pages/Order";
import Home from "./pages/Home";
import BmiCal from "./pages/BmiCal";
import Test from "./pages/Test";
import UserDetails from "./pages/UserDetails";
import UpdateForm from "./pages/UpdateForm";
import UProfile from "./pages/UProfile";
import CProfile from "./pages/CProfile";
import Post from "./pages/Posts/Post.js";
import Items from "./pages/Items";
import { useEffect, useState } from "react";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import CoachCard from "./component/CoachCard";
import UserCard from "./component/UserCard";
// import BlogCardArray from "./component/BlogCardArray";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const logged = localStorage.getItem("loggeduser");
    if (logged) {
      setUser(JSON.parse(logged));
    } else {
      setUser(null);
    }
  }, []);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Regester" element={<Regester />} />
          <Route path="/BlogPost" element={<BlogPost />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/BmiCal" element={<BmiCal />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/UserDetails" element={<UserDetails />} />
          <Route path="/UpdateForm" element={<UpdateForm />} />
          <Route path="/UProfile" element={<UProfile />} />
          <Route path="/CProfile" element={<CProfile />} />
          <Route path="/edit-user" element={<UpdateForm />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/CoachCard" element={<CoachCard />} />
          <Route path="/UserCard" element={<UserCard />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/add-user" element={<Regester />} />
          {/* <Route path="/BlogCardArray" element={<BlogCardArray />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
