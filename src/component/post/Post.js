import React from "react";
import "./post.css";
import image from "../../images/307466870_467381052078655_3812996932479743001_n.jpg";

const Post = () => {
    return (
        <div className="post-container">
            <div className="sub-post-container">
                <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={image} alt="" className="post-image" />
                        <p>mohamed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
