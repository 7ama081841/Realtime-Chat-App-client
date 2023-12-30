import React from "react";
import "./profile.css";
import Navbar from "../../component/navbar/Navbar";
import ProfileLeftbar from "../../component/profileLeftsideContainer/ProfileLeftbar";
import ProfileMinPost from "../../component/profileMainPostContainer/ProfileMinPost";
import ProfileRightbar from "../../component/profileRightsideContainer/ProfileRightbar";

const Profile = () => {
    return (
        <div className="profile-container">
            <Navbar />
            <div className="sub-profile-container">
                <ProfileLeftbar />
                <ProfileMinPost />
                <ProfileRightbar />
            </div>
        </div>
    );
};

export default Profile;
