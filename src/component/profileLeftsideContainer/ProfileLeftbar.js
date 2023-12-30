import React from "react";
import "./profileLeftbar.css";
import image from "../../images/307466870_467381052078655_3812996932479743001_n.jpg";
import Button from "@mui/material/Button";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const ProfileLeftbar = () => {
    return (
        <div className="leftbar">
            <div
                className="notificationsContainer"
                style={{ overflow: "auto" }}
            >
                <img src={image} alt="" className="profile-image-cover" />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginTop: "-20px",
                    }}
                >
                    <img src={image} alt="" className="profile-image" />
                    <p> mohamed chaabani </p>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 20px",
                    }}
                >
                    <p style={{ margin: "0" }}> frinds </p>
                    <p style={{ margin: "0" }}>100</p>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 20px",
                    }}
                >
                    <p style={{ margin: "0" }}> photos </p>
                    <p style={{ margin: "0" }}>500</p>
                </div>

                <div style={{ padding: "10px 0" }}>
                    <Button
                        variant="contained"
                        endIcon={<CreateOutlinedIcon />}
                    >
                        Edit
                    </Button>
                </div>
            </div>

            <div
                className="notificationsContainer"
                style={{ overflow: "auto", justifyContent: "space-between" }}
            >
                <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <p>your frinds</p>
                    <p className="see-all">see all</p>
                </div>

                <div className="profile-frinds">
                    <div>
                        <img className="explore-img" src={image} alt="" />
                        <p>mohamed chaabani</p>
                    </div>
                    <div>
                        <img className="explore-img" src={image} alt="" />
                        <p>mohamed chaabani</p>
                    </div>
                    <div>
                        <img className="explore-img" src={image} alt="" />
                        <p>mohamed chaabani</p>
                    </div>
                    <div>
                        <img className="explore-img" src={image} alt="" />
                        <p>mohamed chaabani</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileLeftbar;
