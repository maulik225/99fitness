import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import monday from '../../src/monday.json';

import ReactPlayer from 'react-player'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Monday() {
  const [expanded, setExpanded] = React.useState(false);
  const [total] = React.useState(monday);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {total.map((item, index) => (
        <div style={{ marginBottom: "24px" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={item.title} subheader="" />
            {item.imgLink ? (
              <CardMedia
                component="img"
                height="194"
                image={item.imgLink}
                alt={item.title}
              />
            ) : (
              // <iframe width="320" height="240" src={item.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              // <iframe width="320" height="240" src={item.videoLink}></iframe>
              <ReactPlayer url={item.videoLink} width="320" height="240" controls={true} />
            )}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.title}
                {item.exercises&& item.exercises.map((exercise, index) => {
                  return <p>{exercise}</p>
                })}
              </Typography>
            </CardContent>
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
    
    
          </Card>
        </div>
      ))}
    </>
  );
}

