import React ,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
	  display: 'inline-block', position: 'relative',
  },
});

export default function TimelineCard(props) {
  const classes = useStyles();
  const [title] = useState('');
  const [content] = useState('');
  const [cardImage] = useState('');

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
		  alt="Contemplative Reptile"
		  width= "200"
		  height="140"
		  image = {props.cardImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
		  	{props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
		  	{props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary" href="#contained-buttons" size="small" color="primary">
          자세히 보기
        </Button>
      </CardActions>
    </Card>
  );
}
