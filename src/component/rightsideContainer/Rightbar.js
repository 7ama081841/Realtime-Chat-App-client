import "./rightbar.css";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import image from "../../images/depositphotos_364169666-stock-illustration-default-avatar-profile-icon-vector.jpg";
import axios from "axios";

const Rightbar = ({ socket, users, auth }) => {
    const [profile, setProfile] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const getProfile = async () => {
        try {
            setLoading(true);

            const res = await axios.get(
                `http://localhost:5000/api/profile/${auth.data.user._id}`,
                {
                    headers: {
                        auth: auth.data.token,
                    },
                }
            );

            if (res.data.profile) {
                setProfile(res.data.profile);
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        getProfile();
    }, [profile]);

    const addFriend = React.useCallback(
        async (id) => {
            try {
                const res = await axios.patch(
                    `http://localhost:5000/api/addFriend/${id}`,
                    {
                        senderId: auth.data.user._id,
                    },
                    {
                        headers: { auth: auth.data.token },
                    }
                );

                setProfile(res.data);

                socket.emit("sendNotification", {
                    resiverId: id,
                });
            } catch (err) {
                console.log(err);
            }
        },
        [auth?.data.user._id, auth?.data.token, getProfile]
    );

    const cancelinvItation = React.useCallback(
        async (id) => {
            try {
                const res = await axios.patch(
                    `http://localhost:5000/api/cancelinvItation/${id}`,
                    {
                        senderId: auth.data.user._id,
                    },
                    {
                        headers: { auth: auth.data.token },
                    }
                );

                setProfile(res.data);

                socket.emit("sendNotification", {
                    resiverId: id,
                    senderId: auth.data.user._id,
                    notificationMessage: "sended invitasion to you",
                });
            } catch (err) {
                console.log(err);
            }
        },
        [auth?.data.user._id, auth?.data.token, getProfile]
    );

    return (
        <div className="rightbar">
            <div className="rightContainer">
                <h2 style={{ textAlign: "start", marginLeft: "10px" }}>
                    add Friends
                </h2>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    {users.length > 0
                        ? users.map((item) => (
                              <React.Fragment key={item?._id}>
                                  <ListItem
                                      sx={{
                                          display:
                                              item._id ===
                                                  auth?.data.user._id ||
                                              profile?.invitasions?.some(
                                                  (user) =>
                                                      user._id === item._id
                                              )
                                                  ? "none"
                                                  : "",
                                      }}
                                      alignItems="center"
                                  >
                                      <ListItemAvatar>
                                          <Avatar
                                              alt="Remy Sharp"
                                              src={
                                                  item?.avatar
                                                      ? item?.avatar
                                                      : image
                                              }
                                          />
                                      </ListItemAvatar>
                                      <ListItemText
                                          primary={`${item?.firstName} ${item?.lastName} `}
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

                                      {profile &&
                                      profile.pindingFrands &&
                                      profile.pindingFrands.length > 0 ? (
                                          !profile?.pindingFrands.some(
                                              (user) => user._id === item._id
                                          ) ? (
                                              <IconButton
                                                  onClick={() =>
                                                      addFriend(item?._id)
                                                  }
                                                  aria-label="addFriend"
                                                  size="small"
                                              >
                                                  <PersonAddIcon
                                                      sx={{ color: "#1976d2" }}
                                                      fontSize="large"
                                                  />
                                              </IconButton>
                                          ) : (
                                              <Button
                                                  onClick={() =>
                                                      cancelinvItation(item._id)
                                                  }
                                                  variant="outlined"
                                              >
                                                  cancel
                                              </Button>
                                          )
                                      ) : (
                                          <IconButton
                                              onClick={() =>
                                                  addFriend(item?._id)
                                              }
                                              aria-label="addFriend"
                                              size="small"
                                          >
                                              <PersonAddIcon
                                                  sx={{ color: "#1976d2" }}
                                                  fontSize="large"
                                              />
                                          </IconButton>
                                      )}
                                  </ListItem>
                                  <Divider variant="inset" component="li" />
                              </React.Fragment>
                          ))
                        : null}
                </List>
            </div>

            <div className="rightContainer2">
                <h2 style={{ textAlign: "start", marginLeft: "10px" }}>
                    {" "}
                    online frands{" "}
                </h2>
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
        </div>
    );
};

export default Rightbar;

// profile?.pindingFrands.length
