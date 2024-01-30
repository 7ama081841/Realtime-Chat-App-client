import React, { useEffect, useState } from "react";
import "./profile.css";
import Navbar from "../../component/navbar/Navbar";
import ProfileLeftbar from "../../component/profileLeftsideContainer/ProfileLeftbar";
import ProfileMinPost from "../../component/profileMainPostContainer/ProfileMinPost";
import ProfileRightbar from "../../component/profileRightsideContainer/ProfileRightbar";
import { useParams } from "react-router-dom";
import Axios from "axios";

const Profile = () => {
    const auth = JSON.parse(localStorage.getItem("user"));
    const [profile, setProfile] = useState(null);
    const { id } = useParams();

    const [dataUpdated, setDataUpdated] = useState(false);

    const getProfile = async () => {
        console.log("getProfile is worked ");
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
            console.log("useEffect is worked ");
        }
    }, [dataUpdated]);

    return (
        <div className="profile-container">
            <Navbar />
            <div className="sub-profile-container">
                <ProfileLeftbar profile={profile} />
                <ProfileMinPost profile={profile} />
                <ProfileRightbar
                    getProfile={getProfile}
                    profile={profile}
                    setDataUpdated={setDataUpdated}
                />
            </div>
        </div>
    );
};

export default Profile;
