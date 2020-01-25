import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const useCardStyles = makeStyles({
  card: {
    maxWidth: 370,
  },
  media: {
    height: 240,
  },
});

const LBModal = () => {
  const classes = useStyles();
  const cardClasses = useCardStyles()
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={cardClasses.card} onClick={handleOpen}>
    <CardActionArea>
      <CardMedia
         component="img"
         alt="upperbody"
         image={require('./qsPictures/lowerBody.jpg')}
         height='230'
         title="Lower body"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lower Body
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Squat til you can't squat no more, then squat some more
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">What lower-body muscle do you want to work on?</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default LBModal