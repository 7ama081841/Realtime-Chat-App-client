import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Navbar from "../../component/navbar/Navbar";
import Leftbar from "../../component/leftsideContainer/Leftbar";
import Rightbar from "../../component/rightsideContainer/Rightbar";
import MainPost from "../../component/mainPostContainer/MainPost";
import Axios from "axios";

const Home = () => {
    const auth = JSON.parse(localStorage.getItem("user"));
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const getUsers = async () => {
        try {
            const res = await Axios.get("http://localhost:5000/api/user", {
                headers: {
                    auth: auth.data.token,
                },
            });
            setUsers(res.data.users);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (auth === null) {
            return navigate("/");
        }

        if (!auth.data.user || !auth.data.token) {
            return navigate("/");
        }

        getUsers();
    }, [auth, navigate]);

    return (
        <div className="home">
            <Navbar auth={auth} />
            <div className="home-container">
                <Leftbar auth={auth} />
                <MainPost auth={auth} />
                <Rightbar auth={auth} users={users} getUsers={getUsers} />
            </div>
        </div>
    );
};

export default Home;
