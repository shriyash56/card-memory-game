import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon({ start }) {
  const classes = useStyles();

  const [userName, setUserName] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  if (start === true) {
    if (localStorage.getItem("User Name") === null) {
      localStorage.setItem("User Names", userName );
    }
  }

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle style={{ fontSize: 40 }} />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Enter Your Name"
              variant="outlined"
              onChange={handleUserName}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
