import React from "react";
import "./profileLeftbar.css";
import image from "../../images/depositphotos_364169666-stock-illustration-default-avatar-profile-icon-vector.jpg";
import Button from "@mui/material/Button";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const ProfileLeftbar = ({ profile }) => {
    return (
        <div className="leftbar">
            <div
                className="notificationsContainer"
                style={{ overflow: "auto" }}
            >
                <img
                    src={profile?.avatar ? profile?.avatar : image}
                    alt=""
                    className="profile-image-cover"
                />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginTop: "-20px",
                    }}
                >
                    <img
                        src={profile?.avatar ? profile?.avatar : image}
                        alt=""
                        className="profile-image"
                    />
                    <p>{`${profile?.firstName} ${profile?.lastName}`}</p>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 20px",
                    }}
                >
                    <p style={{ margin: "0" }}> friends </p>
                    <p style={{ margin: "0" }}> {profile?.frands.length} </p>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 20px",
                    }}
                >
                    <p style={{ margin: "0" }}> photos </p>
                    <p style={{ margin: "0" }}> {profile?.photos.length} </p>
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
                    <p>your friends</p>
                    <p className="see-all">see all</p>
                </div>

                <div
                    style={{
                        justifyContent: "space-around",
                    }}
                    className="profile-frinds"
                >
                    {profile?.frands.length > 0 ? (
                        profile?.frands.map((item) => (
                            <div>
                                <img
                                    className="explore-img"
                                    src={image}
                                    alt=""
                                />
                                <p>mohamed chaabani</p>
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: "center" }}>
                            {" "}
                            you are don't have friends
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileLeftbar;

//   <div>
//                         <img className="explore-img" src={image} alt="" />
//                         <p>mohamed chaabani</p>
//                     </div>
//
//                     <div>
//                         <img className="explore-img" src={image} alt="" />
//                         <p>mohamed chaabani</p>
//                     </div>
//                     <div>
//                         <img className="explore-img" src={image} alt="" />
//                         <p>mohamed chaabani</p>
//                     </div>
