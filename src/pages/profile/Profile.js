import React, { useEffect, useState } from "react";
import "./profile.css";
import Navbar from "../../component/navbar/Navbar";
import ProfileLeftbar from "../../component/profileLeftsideContainer/ProfileLeftbar";
import ProfileMinPost from "../../component/profileMainPostContainer/ProfileMinPost";
import ProfileRightbar from "../../component/profileRightsideContainer/ProfileRightbar";
import { useParams } from "react-router-dom";
import Axios from "axios";

const Profile = ({ socket, onlineusers, setOnlineusers }) => {
    const auth = JSON.parse(localStorage.getItem("user"));
    const [profile, setProfile] = useState(null);
    const { id } = useParams();
    const [dataUpdated, setDataUpdated] = useState(false);

    const getProfile = async () => {
        try {
            const res = await Axios.get(
                `http://localhost:5000/api/profile/${id}`,
                {
                    headers: {
                        auth: auth.data.token,
                    },
                }
            );

            setProfile(res.data.profile);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    useEffect(() => {
        if (dataUpdated) {
            getProfile();
            setDataUpdated(false);
        }
    }, [dataUpdated]);

    useEffect(() => {
        socket?.emit("connected", auth.data.user._id);
    }, [socket]);

    return (
        <div className="profile-container">
            <Navbar
                getProfile={getProfile}
                dataUpdated={dataUpdated}
                setDataUpdated={setDataUpdated}
                profile={profile}
                socket={socket}
            />
            <div className="sub-profile-container">
                <ProfileLeftbar
                    getProfile={getProfile}
                    socket={socket}
                    profile={profile}
                />
                <ProfileMinPost profile={profile} />
                <ProfileRightbar
                    getProfile={getProfile}
                    profile={profile}
                    socket={socket}
                    setDataUpdated={setDataUpdated}
                />
            </div>
        </div>
    );
};

export default Profile;
