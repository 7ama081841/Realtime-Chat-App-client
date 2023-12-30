import React from "react";
import "./leftbar.css";
import image from "../../images/307466870_467381052078655_3812996932479743001_n.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Leftbar = () => {
    return (
        <div className="leftbar">
            <div
                className="notificationsContainer"
                style={{ overflow: "auto" }}
            >
                <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <p>notifications</p>
                    <p style={{ color: "#aaa" }}>see all</p>
                </div>

                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {
                                        " — I'll be in your neighborhood doing errands this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Travis Howard"
                                src="/static/images/avatar/2.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {
                                        " — Wish I could come, but I'm out of town this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Cindy Baker"
                                src="/static/images/avatar/3.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {
                                        " — Do you have Paris recommendations? Have you ever…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </div>

            <div
                className="notificationsContainer"
                style={{ overflow: "auto", justifyContent: "space-between" }}
            >
                <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <p>explore</p>
                    <p style={{ color: "#aaa" }}>see all</p>
                </div>

                <div>
                    <img className="explore-img" src={image} alt="" />
                    <img className="explore-img" src={image} alt="" />
                    <img className="explore-img" src={image} alt="" />
                    <img className="explore-img" src={image} alt="" />
                    <img className="explore-img" src={image} alt="" />
                    <img className="explore-img" src={image} alt="" />
                    <img className="explore-img" src={image} alt="" />
                    <img className="explore-img" src={image} alt="" />
                    <img className="explore-img" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Leftbar;
