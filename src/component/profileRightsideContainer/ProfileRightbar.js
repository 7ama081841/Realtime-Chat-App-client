import React, { useEffect, useState } from "react";
import "./profileRightbar.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import image from "../../images/depositphotos_364169666-stock-illustration-default-avatar-profile-icon-vector.jpg";
import axios from "axios";

const ProfileRightbar = ({ profile, getProfile, setDataUpdated, socket }) => {
    const auth = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        socket?.on("getNotification", () => {
            getProfile();
        });
    }, [socket]);

    const cancelinvItation = React.useCallback(
        async (id) => {
            try {
                const res = await axios.patch(
                    `http://localhost:5000/api/cancelinvItation/${id}`,
                    {
                        senderId: auth.data.user._id,
                    },
                    {
                        headers: { auth: auth.data.token },
                    }
                );

                if (res) {
                    setDataUpdated(true);
                }
            } catch (err) {
                console.log(err);
            }
        },
        [auth.data.user._id, auth.data.token]
    );

    const acceptinvItation = React.useCallback(
        async (id) => {
            try {
                const res = await axios.patch(
                    `http://localhost:5000/api/acceptinvItation`,
                    {
                        senderId: auth.data.user._id,
                        resiverId: id,
                    },
                    {
                        headers: { auth: auth.data.token },
                    }
                );

                if (res.data) {
                    setDataUpdated(true);
                }

                socket?.emit("sendNotification", {
                    resiverId: id,
                });
            } catch (err) {
                console.log(err);
            }
        },
        [auth.data.user._id, auth.data.token]
    );

    const rejectInvitation = React.useCallback(
        async (id) => {
            try {
                const res = await axios.patch(
                    `http://localhost:5000/api/rejectInvitation`,
                    {
                        senderId: auth.data.user._id,
                        resiverId: id,
                    },
                    {
                        headers: { auth: auth.data.token },
                    }
                );

                if (res.data) {
                    setDataUpdated(true);
                }

                socket?.emit("sendNotification", {
                    resiverId: id,
                });
            } catch (err) {
                console.log(err);
            }
        },
        [auth.data.user._id, auth.data.token]
    );

    return (
        <div className="rightbar">
            <div className="rightContainer">
                <h2 style={{ textAlign: "start", marginLeft: "10px" }}>
                    friends request
                </h2>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    {profile?.invitasions.length > 0 ? (
                        profile?.invitasions.map((item) => (
                            <React.Fragment key={item._id}>
                                <ListItem alignItems="center">
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={
                                                item?.avatar
                                                    ? item?.avatar
                                                    : image
                                            }
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={` ${item?.firstName} ${item?.lastName} `}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                ></Typography>
                                                {/*
                                        " — I'll be in your neighborhood doing errands this…"
                            */}
                                            </React.Fragment>
                                        }
                                    />
                                    <IconButton
                                        aria-label="delete"
                                        size="small"
                                        onClick={() =>
                                            rejectInvitation(item._id)
                                        }
                                    >
                                        <DeleteIcon
                                            sx={{ color: "red" }}
                                            fontSize="large"
                                        />
                                    </IconButton>
                                    <IconButton
                                        aria-label="acsept"
                                        size="small"
                                        onClick={() =>
                                            acceptinvItation(item._id)
                                        }
                                    >
                                        <CheckIcon
                                            sx={{ color: "green" }}
                                            fontSize="large"
                                        />
                                    </IconButton>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </React.Fragment>
                        ))
                    ) : (
                        <p> you don't have Friends Request </p>
                    )}
                </List>
            </div>

            <div className="rightContainer">
                <h2 style={{ textAlign: "start", marginLeft: "10px" }}>
                    Pinding Friends
                </h2>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    {profile?.pindingFrands.length > 0 ? (
                        profile?.pindingFrands.map((item) => (
                            <React.Fragment key={item._id}>
                                <ListItem alignItems="center">
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={
                                                item?.avatar
                                                    ? item?.avatar
                                                    : image
                                            }
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={` ${item?.firstName} ${item?.lastName} `}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                ></Typography>
                                                {/*
                                        " — I'll be in your neighborhood doing errands this…"
                            */}
                                            </React.Fragment>
                                        }
                                    />
                                    <Button
                                        onClick={() =>
                                            cancelinvItation(item._id)
                                        }
                                        variant="outlined"
                                    >
                                        cancel
                                    </Button>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </React.Fragment>
                        ))
                    ) : (
                        <p> you don't have pinding Friends </p>
                    )}
                </List>
            </div>
        </div>
    );
};

export default ProfileRightbar;
