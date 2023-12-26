import React from "react";
import "./home.css";
import Navbar from "../../component/navbar/Navbar";
import Leftbar from "../../component/leftsideContainer/Leftbar";
import Rightbar from "../../component/rightsideContainer/Rightbar";
import MainPost from "../../component/mainPostContainer/MainPost";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="home-container">
                <Leftbar />
                <MainPost />
                <Rightbar />
            </div>
        </div>
    );
};

export default Home;
