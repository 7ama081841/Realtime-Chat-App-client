import React from "react";
import "./profileRightbar.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import image from "../../images/307466870_467381052078655_3812996932479743001_n.jpg";

const ProfileRightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightContainer">
                <h2 style={{ textAlign: "start", marginLeft: "10px" }}>
                    frands request
                </h2>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={image} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Ali Connors"
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
                        <IconButton aria-label="delete" size="small">
                            <DeleteIcon
                                sx={{ color: "red" }}
                                fontSize="large"
                            />
                        </IconButton>
                        <IconButton aria-label="acsept" size="small">
                            <CheckIcon
                                sx={{ color: "green" }}
                                fontSize="large"
                            />
                        </IconButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={image} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Ali Connors"
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
                        <IconButton aria-label="delete" size="small">
                            <DeleteIcon
                                sx={{ color: "red" }}
                                fontSize="large"
                            />
                        </IconButton>
                        <IconButton aria-label="acsept" size="small">
                            <CheckIcon
                                sx={{ color: "green" }}
                                fontSize="large"
                            />
                        </IconButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={image} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Ali Connors"
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
                        <IconButton aria-label="delete" size="small">
                            <DeleteIcon
                                sx={{ color: "red" }}
                                fontSize="large"
                            />
                        </IconButton>
                        <IconButton aria-label="acsept" size="small">
                            <CheckIcon
                                sx={{ color: "green" }}
                                fontSize="large"
                            />
                        </IconButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            </div>
        </div>
    );
};

export default ProfileRightbar;
