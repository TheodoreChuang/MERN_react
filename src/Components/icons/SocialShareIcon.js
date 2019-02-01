import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import ShareIcon from "@material-ui/icons/Share";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "./SocialShareIcon.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  modal: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: "none",
    borderRadius: "10px"
  },
  list: {
    padding: 0
  }
});

class ShareSocialIcon extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, id } = this.props;

    return (
      <div>
        <ShareIcon onClick={this.handleOpen} aria-label="Share" />

        <Modal
          aria-describedby="social-sharing-modal"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.modal}>
            <List component="nav" className={classes.list}>
              <ListItem button>
                <a
                  class="resp-sharing-button__link"
                  href={`https://facebook.com/sharer/sharer.php?u=http%3A%2F%2F1up-app.s3-website-ap-southeast-2.amazonaws.com%2Fchallenges%2F${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                >
                  <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large">
                    <div
                      aria-hidden="true"
                      className="resp-sharing-button__icon resp-sharing-button__icon--solid"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                      </svg>
                    </div>
                    Share on Facebook
                  </div>
                </a>
              </ListItem>

              <ListItem button>
                <a
                  class="resp-sharing-button__link"
                  href={`https://twitter.com/intent/tweet/?text=Are%20you%20up%20for%20the%20challenge%3F&amp;url=http%3A%2F%2F1up-app.s3-website-ap-southeast-2.amazonaws.com%2Fchallenges%2F${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                >
                  <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large">
                    <div
                      aria-hidden="true"
                      class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                      </svg>
                    </div>
                    Share on Twitter
                  </div>
                </a>
              </ListItem>

              <ListItem button>
                <a
                  class="resp-sharing-button__link"
                  href={`https://www.tumblr.com/widgets/share/tool?posttype=link&amp;title=Are%20you%20up%20for%20the%20challenge%3F&amp;caption=Are%20you%20up%20for%20the%20challenge%3F&amp;content=http%3A%2F%2F1up-app.s3-website-ap-southeast-2.amazonaws.com%2Fchallenges%2F${id}&amp;canonicalUrl=http%3A%2F%2F1up-app.s3-website-ap-southeast-2.amazonaws.com%2Fchallenges%2F${id}&amp;shareSource=tumblr_share_button`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Tumblr"
                >
                  <div class="resp-sharing-button resp-sharing-button--tumblr resp-sharing-button--large">
                    <div
                      aria-hidden="true"
                      class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.5.5v5h5v4h-5V15c0 5 3.5 4.4 6 2.8v4.4c-6.7 3.2-12 0-12-4.2V9.5h-3V6.7c1-.3 2.2-.7 3-1.3.5-.5 1-1.2 1.4-2 .3-.7.6-1.7.7-3h3.8z" />
                      </svg>
                    </div>
                    Share on Tumblr
                  </div>
                </a>
              </ListItem>

              <ListItem button onClick={this.closeModal}>
                <Typography variant="subtitle1">Cancel</Typography>
              </ListItem>
            </List>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(ShareSocialIcon);
