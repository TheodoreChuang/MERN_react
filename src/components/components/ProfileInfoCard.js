import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import photo from './images/profile_image.jpg';



const styles = {
  card: {
    minWidth: 275,
    maxWidth: 600,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: '100px',
    width: '100px',
  }
};



class SimpleCard extends React.Component  {
  state = {
    data: null,
  }

  // componentDidMount() {
  //   fetch('/user', { credentials : 'same-origin' })
  //   .then(response => response.json())
  //   .then( data => this.setState({ data }))
  // }

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    const baseUrl = 'mongodb://localhost/1up_api'

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container direction="row" justify="center" alignItems="center">
          <CardMedia
          className={classes.media}
          image={photo}
          title="Profile Picture" />
          </Grid>
          <Grid container direction="column" justify="center" alignItems="center">
          <Typography>
            {this.state.data}
          </Typography>
          <Typography>
            random@test.com
          </Typography>
          <Typography>
            Age: 40
          </Typography>
          <Typography>
            Gender: Male
          </Typography>
          <Typography>
          I'm really passionate about outdoofr 
activites, but that's not why I'm here. I'm 
here to challenge and get challenged to 
make the world a better place.
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
