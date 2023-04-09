import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Regester from './pages/Register';
import BlogPost from './pages/BlogPost';
import Sell from './pages/Sell';
import Home from './pages/Home';
import BmiCal from './pages/BmiCal';
import Test from "./pages/Test";
import UserDetails from "./pages/UserDetails";
import UpdateForm from "./pages/UpdateForm";


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
					<Route path="/Test" element={<Test />} />
					<Route path="/UserDetails" element={<UserDetails />} />
					<Route path="/UpdateForm" element={<UpdateForm />} />
					<Route path="/add-user" element={<Regester />} />
					<Route path="/edit-user" element={<Regester />} />
					<Route path="/add-user" element={<Regester />} />
				</Routes>
			</Router>

		</div>
	);
}

export default App;
