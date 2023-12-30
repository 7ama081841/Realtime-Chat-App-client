import React from "react";
import "./post.css";
import image from "../../images/307466870_467381052078655_3812996932479743001_n.jpg";
import LikeCommentPartage from "../like-comment-partage/LikeCommentPartage";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Post = () => {
    return (
        <div className="post-container">
            <div className="sub-post-container">
                <div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={image} alt="" className="post-image" />
                            <p
                                style={{
                                    textTransform: "capitalize",
                                    marginLeft: "10px",
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                }}
                            >
                                mohamed
                            </p>
                        </div>
                        <IconButton aria-label="menu">
                            <MoreHorizIcon sx={{ fontSize: "50px" }} />
                        </IconButton>
                    </div>
                    <p
                        style={{
                            textAlign: "start",
                            width: "96%",
                            marginLeft: "10px",
                            marginTop: "0",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cum minus, earum hic temporibus voluptas ut ipsum,
                        provident maxime vero sunt autem, molestiae tenetur
                        distinctio nisi quasi reprehenderit quidem? A, non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cum minus, earum hic temporibus voluptas ut ipsum,
                        provident maxime vero sunt autem, molestiae tenetur
                        distinctio nisi quasi reprehenderit quidem? A, non?
                    </p>
                    <img src={image} alt="" className="image-post" />
                    <LikeCommentPartage />
                </div>
            </div>
        </div>
    );
};

export default Post;
