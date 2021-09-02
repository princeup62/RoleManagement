import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
            <Button
              color="inherit"
              onClick={() => {
                history.push("/");
              }}
            >
              Manage
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                localStorage.removeItem("user-info");
                history.push("/signup");
              }}
            >
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Header;