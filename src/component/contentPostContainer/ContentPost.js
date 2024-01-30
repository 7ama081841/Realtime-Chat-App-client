import React, { useRef } from "react";
import "./contentPost.css";
import image from "../../images/depositphotos_364169666-stock-illustration-default-avatar-profile-icon-vector.jpg";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import Button from "@mui/material/Button";
import Post from "../post/Post";
import { IconButton } from "@mui/material";

const ContentPost = () => {
    const file = useRef();
    const auth = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="content-post">
            <div className="content-upload-container">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        justifyContent: "space-around",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-around",
                            alignItems: "center",
                        }}
                    >
                        <img
                            style={{
                                borderRadius: "50px",
                                width: "50px",
                                height: "50px",
                                margin: "0 15px",
                            }}
                            src={
                                auth.data.user.avatar
                                    ? auth.data.user.avatar
                                    : image
                            }
                            alt=""
                        />
                        <input
                            style={{
                                width: "80%",
                                borderRadius: "12px",
                                height: "50px",
                                padding: "0 20px",
                                border: " solid .5px #aaa ",
                            }}
                            type="text"
                            placeholder="What's new?"
                        />
                        <input
                            style={{ display: "none" }}
                            ref={file}
                            type="file"
                        />
                        <IconButton
                            onClick={() => file.current.click()}
                            aria-label="menu"
                        >
                            <ImageOutlinedIcon
                                sx={{ color: "green", cursor: "pointer" }}
                                fontSize="large"
                            />
                        </IconButton>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%",
                        }}
                    >
                        <Button variant="contained">Post</Button>
                    </div>
                </div>
            </div>

            <Post />
        </div>
    );
};

export default ContentPost;
