import React, { Component } from "react";
import { randomEmojis } from "./../../data/emoji";

import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core/";

const styles = theme => ({
  card: {
    minWidth: 280,
    [theme.breakpoints.up("sm")]: {
      minWidth: 560
    },
    maxWidth: 560,
    padding: "20px"
  },
  media: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    marginBottom: "20px",
    border: "2px solid hsl(212, 12%, 72%)"
  },
  typography: {
    textAlign: "center"
  }
});

class ProfileInfoCard extends Component {
  render() {
    const {
      classes,
      first_name,
      last_name,
      nickname,
      bio,
      profile_image,
      gender,
      age,
      location
    } = this.props;

    return (
      <Card>
        <CardContent className={classes.card}>
          <Grid container>
            <Grid item xs={1} sm={4} />
            <Grid
              item
              xs={6}
              sm={4}
              container
              justify="center"
              alignItems="center"
            >
              <CardMedia
                className={classes.media}
                image={
                  profile_image ||
                  randomEmojis[Math.floor(Math.random() * randomEmojis.length)]
                }
                title="Profile Picture"
              />
            </Grid>
            <Grid
              item
              xs={5}
              sm={4}
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <Typography className={classes.typography} variant="overline">
                {gender}
              </Typography>
              <Typography className={classes.typography} variant="caption">
                {age} years old
              </Typography>
              <Typography className={classes.typography} variant="caption">
                {location}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography className={classes.typography} variant="h5">
              {first_name} {last_name}
            </Typography>
            <Typography className={classes.typography} variant="body2">
              {nickname}
            </Typography>
            <Typography className={classes.typography} variant="body1">
              {bio}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ProfileInfoCard);
