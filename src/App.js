import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile/:id" element={<Profile />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
