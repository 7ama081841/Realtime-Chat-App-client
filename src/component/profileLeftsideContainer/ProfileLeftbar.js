import React, { useEffect, useState } from "react";
import "./profileLeftbar.css";
import image from "../../images/depositphotos_364169666-stock-illustration-default-avatar-profile-icon-vector.jpg";
import Button from "@mui/material/Button";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";

const ProfileLeftbar = ({ profile, socket, getProfile }) => {
    const [onlineusers, setOnlineusers] = useState([]);

    useEffect(() => {
        socket?.on("onlineUsers", (users) => {
            setOnlineusers(users);
        });

        socket?.on("getNotification", () => {
            // getProfile();
        });
    }, [socket]);

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
                    <p> your friends</p>
                    <p className="see-all">see all</p>
                </div>

                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    {profile?.frands.length > 0 ? (
                        profile?.frands.map((item) => (
                            <React.Fragment key={item._id}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={
                                                item?.avatar
                                                    ? item?.avatar
                                                    : image
                                            }
                                        />
                                        <span
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                borderRadius: "50%",
                                                background: "green",
                                                position: "absolute",
                                                left: "42px",
                                                bottom: "5px",
                                                display: onlineusers.some(
                                                    (online) =>
                                                        online.userId ===
                                                        item?._id
                                                )
                                                    ? ""
                                                    : "none",
                                            }}
                                        ></span>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`${item?.firstName} ${item?.lastName}`}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                ></Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </React.Fragment>
                        ))
                    ) : (
                        <p style={{ textAlign: "center" }}>
                            you are don't have friends
                        </p>
                    )}
                </List>
            </div>
        </div>
    );
};

export default ProfileLeftbar;
