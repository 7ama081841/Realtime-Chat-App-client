import "./App.css";
import Home from "./pages/home/Home";
import SignIn from "./pages/login/SignIn";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/register/SignUp";

function App() {
    const auth = "";
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/" element={<SignIn />} />
                    <Route path="/Rgister" element={<SignUp />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
