import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Navbar from "../../component/navbar/Navbar";
import Leftbar from "../../component/leftsideContainer/Leftbar";
import Rightbar from "../../component/rightsideContainer/Rightbar";
import MainPost from "../../component/mainPostContainer/MainPost";
import Axios from "axios";

const Home = ({ socket, onlineusers, setOnlineusers }) => {
    const auth = JSON.parse(localStorage.getItem("user"));
    const [users, setUsers] = useState([]);
    const [updateData, setUpdateData] = useState(false);
    const navigate = useNavigate();

    const getUsers = async () => {
        try {
            const res = await Axios.get(
                `http://localhost:5000/api/user/${auth.data.user._id}`,
                {
                    headers: {
                        auth: auth.data.token,
                    },
                }
            );
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

        if (updateData) {
            setUpdateData(false);
        }

        getUsers();
    }, [updateData]);

    useEffect(() => {
        socket?.emit("connected", auth.data.user._id);
        socket?.on("onlineUsers", (users) => {});
        socket?.on("getNotification", () => {
            getUsers();
        });
    }, [socket]);

    return (
        <div className="home">
            <Navbar socket={socket} auth={auth} />
            <div className="home-container">
                <Leftbar auth={auth} />
                <MainPost auth={auth} />
                <Rightbar
                    socket={socket}
                    auth={auth}
                    users={users}
                    getUsers={getUsers}
                />
            </div>
        </div>
    );
};

export default Home;
