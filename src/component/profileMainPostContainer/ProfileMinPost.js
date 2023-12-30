import React from "react";
import "./profileMinPost.css";
import Post from "../post/Post";
import image from "../../images/307466870_467381052078655_3812996932479743001_n.jpg";

const ProfileMinPost = () => {
    return (
        <div className="profile-Min-Post">
            <div>
                <img className="profile-cover-image" src={image} alt="" />
                <h3>your profile</h3>
            </div>
            <Post />
        </div>
    );
};

export default ProfileMinPost;
