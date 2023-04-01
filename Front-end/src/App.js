import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Regester from './pages/Regester';
import BlogPost from './pages/BlogPost';
import Sell from './pages/Sell';
import Home from './pages/Home';
import BmiCal from './pages/BmiCal';

function App() {
  return (
    <div className="App">
      <Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Regester" element={<Regester />} />
				<Route path="/BlogPost" element={<BlogPost />} />
				<Route path="/Sell" element={<Sell />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/BmiCal" element={<BmiCal />} />
			</Routes>
		</Router>

    </div>
  );
}

export default App;
