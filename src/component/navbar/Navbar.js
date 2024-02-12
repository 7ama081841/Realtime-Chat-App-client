import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import image from "../../images/depositphotos_364169666-stock-illustration-default-avatar-profile-icon-vector.jpg";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: theme.spacing(4),
        transition: theme.transitions.create("width"),
        width: "100% !important",
        [theme.breakpoints.up("md")]: {
            width: "100% !important",
        },
    },
}));

export default function Navbar({
    getProfile,
    setDataUpdated,
    dataUpdated,
    profile,
    socket,
}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [notificationMenuAnchorEl, setNotificationMenuAnchorEl] =
        React.useState(null);
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem("user"));
    const [notification, setNotification] = React.useState([]);
    const [reRander, setReRander] = React.useState(false);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isnotificationMenuOpen = Boolean(notificationMenuAnchorEl);

    const getNotifications = async () => {
        try {
            const res = await Axios.get(
                `http://localhost:5000/api/notification/${auth.data.user._id}`
            );

            setNotification(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    React.useEffect(() => {
        reRander && setReRander(false);

        getNotifications();
    }, [reRander]);

    const isReaded = notification?.filter((notif) => {
        return notif.isRead === false;
    });

    React.useEffect(() => {
        socket?.on("getNotification", () => {
            console.log("jawek behi");
            getNotifications();
        });
    }, [socket]);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotificationMenuOpen = (event) => {
        setNotificationMenuAnchorEl(event.currentTarget);
    };

    const handleNotificationMenuClose = () => {
        setNotificationMenuAnchorEl(null);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        socket?.emit("logoutUser", auth.data.user._id);
        return navigate("/");
    };

    const readNotification = async (notificationId) => {
        try {
            const res = await Axios.patch(
                `http://localhost:5000/api/readNotification`,
                { notificationId },
                { headers: auth?.data.token }
            );

            setReRander(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDate = (date) => {
        const formatDate = new Date(date);
        const dateNow = new Date();
        const diffDate = dateNow - formatDate;

        const days = Math.floor(diffDate / (1000 * 60 * 60 * 24));

        if (days < 1) {
            const hours = Math.floor(diffDate / (1000 * 60 * 60));
            if (hours < 1) {
                const minutes = Math.floor(diffDate / (1000 * 60));
                return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
            } else {
                return `${hours} hour${hours > 1 ? "s" : ""} ago`;
            }
        } else if (days < 7) {
            return `${days} day${days > 1 ? "s" : ""} ago`;
        } else {
            const weeks = Math.floor(days / 7);
            return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
        }
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link
                style={{ color: "black", textDecoration: "none" }}
                to={`/profile/${auth?.data.user._id}`}
            >
                <MenuItem onClick={handleMenuClose}>
                    {auth?.data.user.firstName
                        ? auth.data.user.firstName
                        : "Profile"}
                </MenuItem>
            </Link>

            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    );

    const notificationId = "notificationMenu";
    const notificationMenu = (
        <Menu
            anchorEl={notificationMenuAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={notificationId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isnotificationMenuOpen}
            onClose={handleNotificationMenuClose}
            sx={{ minWidth: "416px", minHeight: "289px " }}
        >
            {notification.length > 0 ? (
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    {notification &&
                        notification.map((items) => (
                            <React.Fragment key={items._id}>
                                <ListItem
                                    alignItems="flex-start"
                                    sx={{
                                        background: items.isRead
                                            ? ""
                                            : " rgb(212, 223, 255)",

                                        cursor: "pointer",
                                    }}
                                    onClick={() => readNotification(items._id)}
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={
                                                items.sender
                                                    ? items?.sender?.avatar
                                                    : image
                                            }
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={` ${items.sender?.firstName} ${items.sender?.lastName} `}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {items?.notificationMessage}
                                                    <span
                                                        style={{
                                                            margin: "0px",
                                                            display: "block",
                                                        }}
                                                    >
                                                        {handleDate(
                                                            items.creaAt
                                                        )}
                                                    </span>
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </React.Fragment>
                        ))}
                </List>
            ) : (
                <p style={{ padding: "10px" }}>you don't have notifications</p>
            )}
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                >
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={isReaded.length} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    {auth?.data.user.avatar ? (
                        <img
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                            }}
                            src={auth?.data.user.avatar}
                            alt="img"
                        />
                    ) : (
                        <AccountCircle />
                    )}
                </IconButton>
                <p>
                    {auth?.data.user.firstName
                        ? auth.data.user.firstName
                        : " Profile"}
                </p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box className="navbar" sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        <Link
                            style={{ color: "#fff", textDecoration: "none" }}
                            to="/home"
                        >
                            Home
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1 }}>
                        <Search
                            className="search"
                            sx={{
                                width: "70% !important",
                                margin: "auto !important",
                                background: "#fff",
                                color: "black",
                                textAlign: "left",
                                borderRadius: "50px",
                            }}
                        >
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                className="input"
                                sx={{ width: "100% ", paddingLeft: "10px" }}
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Search>
                    </Box>

                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                            onClick={handleNotificationMenuOpen}
                        >
                            <Badge badgeContent={isReaded.length} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            {auth?.data.user.avatar ? (
                                <img
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "50%",
                                    }}
                                    src={auth?.data.user.avatar}
                                    alt="img"
                                />
                            ) : (
                                <AccountCircle />
                            )}
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            {notificationMenu}
        </Box>
    );
}
