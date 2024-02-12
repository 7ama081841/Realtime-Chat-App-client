import "./App.css";
import Home from "./pages/home/Home";
import SignIn from "./pages/login/SignIn";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/register/SignUp";
import { useEffect, useState } from "react";
import io from "socket.io-client";

function App() {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io("http://localhost:5000");
        setSocket(newSocket);

        return () => {
            socket?.disconnect();
        };
    }, []);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/home" element={<Home socket={socket} />} />
                    <Route
                        path="/profile/:id"
                        element={<Profile socket={socket} />}
                    />
                    <Route path="/" element={<SignIn />} />
                    <Route path="/Rgister" element={<SignUp />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
