import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../../component/imageUploader/ImageUploader";
import { format } from "date-fns";
import { regesterSchema } from "../../FormValidation";
import { useFormik } from "formik";
import Axios from "axios";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="#">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignUp() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate();

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    };

    const { values, handleChange, errors } = useFormik({
        initialValues,
        validationSchema: regesterSchema,
        onSubmit: (value) => {},
    });

    const handleDate = (date) => {
        if (date && date.isValid()) {
            const formattedDate = format(date.toDate(), "MM/dd/yyyy");
            setSelectedDate(formattedDate);
            values.age = formattedDate;
        } else {
            console.error("Invalid date");
        }
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        values.avatar = selectedImage;

        const newUser = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password"),
            avatar: selectedImage,
            age: selectedDate,
        };

        const isEmpty = Object.values(newUser).some(
            (value) => value === null || value === ""
        );

        if (isEmpty) {
            return false;
        }
        if (errors.firstName) {
            return console.log(errors.firstName);
        }
        if (errors.lastName) {
            return console.log(errors.lastName);
        }
        if (errors.email) {
            return console.log(errors.email);
        }
        if (errors.password) {
            return console.log(errors.password);
        }

        try {
            const res = await Axios.post(
                "http://localhost:5000/api/user",
                newUser,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/home");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmitForm}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={values.firstName}
                                    onChange={handleChange}
                                    InputProps={{
                                        error: errors.firstName ? true : false,
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: errors.firstName
                                                ? "red"
                                                : "",
                                        },
                                    }}
                                />
                                {errors.firstName ? (
                                    <p
                                        style={{
                                            color: "red",
                                            margin: "0",
                                            textAlign: "start",
                                        }}
                                    >
                                        {errors.firstName}
                                    </p>
                                ) : null}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    InputProps={{
                                        error: errors.lastName ? true : false,
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: errors.lastName ? "red" : "",
                                        },
                                    }}
                                />
                                {errors.lastName ? (
                                    <p
                                        style={{
                                            color: "red",
                                            margin: "0",
                                            textAlign: "start",
                                        }}
                                    >
                                        {errors.lastName}
                                    </p>
                                ) : null}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    InputProps={{
                                        error: errors.email ? true : false,
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: errors.email ? "red" : "",
                                        },
                                    }}
                                />
                                {errors.email ? (
                                    <p
                                        style={{
                                            color: "red",
                                            margin: "0",
                                            textAlign: "start",
                                        }}
                                    >
                                        {errors.email}
                                    </p>
                                ) : null}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={values.password}
                                    onChange={handleChange}
                                    InputProps={{
                                        error: errors.password ? true : false,
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: errors.password ? "red" : "",
                                        },
                                    }}
                                />
                                {errors.password ? (
                                    <p
                                        style={{
                                            color: "red",
                                            margin: "0",
                                            textAlign: "start",
                                        }}
                                    >
                                        {errors.password}
                                    </p>
                                ) : null}
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DemoContainer components={["DatePicker"]}>
                                        <DatePicker
                                            value={selectedDate}
                                            onChange={handleDate}
                                            label="birth date"
                                            name="age"
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <ImageUploader
                                    setSelectedImage={setSelectedImage}
                                    selectedImage={selectedImage}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
