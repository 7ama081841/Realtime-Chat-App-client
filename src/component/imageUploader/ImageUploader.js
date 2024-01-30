import React from "react";
import { Button, Input, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(2),
    },
    imageContainer: {
        position: "relative",
    },
    image: {
        maxWidth: "191px",
        height: "auto",
        display: "block",
    },
    title: {
        position: "absolute",
        bottom: 0,
        left: 0,
        background: "rgba(255, 255, 255, 0.7)",
        width: "100%",
        padding: theme.spacing(1),
        textAlign: "center",
    },
}));

const ImageUploader = ({ setSelectedImage, selectedImage }) => {
    const classes = useStyles();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    return (
        <div className={classes.root}>
            <Input
                inputProps={{ accept: "image/*" }}
                id="image-input"
                type="file"
                onChange={handleImageChange}
                sx={{ display: "none" }}
            />
            <label htmlFor="image-input">
                <Button variant="contained" component="span">
                    Upload Image
                </Button>
            </label>
            {selectedImage && (
                <Paper className={classes.imageContainer}>
                    <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected"
                        className={classes.image}
                    />
                    <Typography variant="h6" className={classes.title}>
                        Your Image
                    </Typography>
                </Paper>
            )}
        </div>
    );
};

export default ImageUploader;
