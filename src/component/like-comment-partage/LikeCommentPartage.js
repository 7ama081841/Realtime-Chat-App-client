import React, { Fragment, useRef, useState } from "react";
import "./likeCommentPartage.css";
import Button from "@mui/material/Button";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ForumTwoToneIcon from "@mui/icons-material/ForumTwoTone";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../contentPostContainer/contentPost.css";
import image from "../../images/307466870_467381052078655_3812996932479743001_n.jpg";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

library.add(faShare);

const LikeCommentPartage = () => {
    const [like, setLike] = useState(false);
    const [activeComment, setActiveComment] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const buttonStyle = isButtonDisabled ? { cursor: "not-allowed" } : {};
    const file = useRef();

    const handleLike = () => {
        setLike(!like);
    };

    const handleChange = (e) => {
        setIsButtonDisabled(e.target.value.trim() === "");
    };

    return (
        <Fragment>
            <div className="like-comment-partage">
                <Button onClick={handleLike} className="button" variant="text">
                    {like ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}

                    <span style={{ marginLeft: "5px" }}> like </span>
                </Button>
                <Button
                    onClick={() => setActiveComment(true)}
                    className="button"
                    variant="text"
                >
                    <ForumTwoToneIcon />
                    <span style={{ marginLeft: "5px" }}> comment </span>
                </Button>
                <Button className="button" variant="text">
                    <FontAwesomeIcon icon={faShare} />
                    <span style={{ marginLeft: "5px" }}> share </span>
                </Button>
            </div>
            <div style={{ margin: "0px" }} className="content-post">
                <div
                    style={{
                        height: activeComment ? "" : "0px",
                        overflow: "hidden",
                        padding: "0px",
                    }}
                    className="content-upload-container"
                >
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
                                onChange={handleChange}
                                className="input-comment"
                                type="text"
                                placeholder="Comment"
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
                            <Button
                                style={{
                                    cursor: isButtonDisabled
                                        ? "not-allowed"
                                        : "pointer",
                                    background: isButtonDisabled
                                        ? "#e0e0e0"
                                        : "",
                                    color: isButtonDisabled ? "#a6a6a6" : "",
                                }}
                                variant="contained"
                                endIcon={<SendIcon />}
                            >
                                comment
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comments">
                <img
                    style={{
                        borderRadius: "50px",
                        width: "50px",
                        margin: "0 15px",
                    }}
                    src={image}
                    alt=""
                />
                <div>
                    <div className="comment-container">
                        <h4>mohamed chabani</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cum minus, earum hic temporibus voluptas ut
                            ipsum, provident maxime vero sunt autem, molestiae
                            tenetur distinctio nisi quasi reprehenderit quidem?
                            A, non?
                        </p>
                    </div>
                    <div className="btns">
                        <span>3h</span>
                        <span>LIke</span>
                        <span>Response</span>
                    </div>
                    <div className="response-container">
                        <img
                            style={{
                                borderRadius: "50px",
                                width: "50px",
                                margin: "0 15px",
                            }}
                            src={image}
                            alt=""
                        />
                        <div className="comments-container">
                            <div className="comment-container">
                                <h4>mohamed chabani</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cum minus, earum hic
                                    temporibus voluptas ut ipsum, provident
                                    maxime vero sunt autem, molestiae tenetur
                                    distinctio nisi quasi reprehenderit quidem?
                                    A, non?
                                </p>
                            </div>
                            <div className="btns">
                                <span>3h</span>
                                <span>LIke</span>
                                <span>Response</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LikeCommentPartage;
