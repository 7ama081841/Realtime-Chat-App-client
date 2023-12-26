import React, { useRef } from "react";
import "./contentPost.css";
import image from "../../images/307466870_467381052078655_3812996932479743001_n.jpg";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import Button from "@mui/material/Button";
import Post from "../post/Post";

const ContentPost = () => {
    const file = useRef();

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
                                margin: "0 15px",
                            }}
                            src={image}
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
                        <ImageOutlinedIcon
                            onClick={() => file.current.click()}
                            sx={{ color: "green", cursor: "pointer" }}
                            fontSize="large"
                        />
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
