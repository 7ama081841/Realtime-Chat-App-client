import React from "react";
import "./profileMinPost.css";
import Post from "../post/Post";
import image from "../../images/depositphotos_364169666-stock-illustration-default-avatar-profile-icon-vector.jpg";

const ProfileMinPost = ({ profile }) => {
    return (
        <div className="profile-Min-Post">
            <div>
                <img
                    className="profile-cover-image"
                    src={profile?.avatar ? profile?.avatar : image}
                    alt=""
                />
                <h3>
                    {profile?.firstName} {profile?.lastName}
                </h3>
            </div>
            <Post />
        </div>
    );
};

export default ProfileMinPost;
