import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player'

export default function DaysComponent({day}) {
  const jsonFile = require(`../JsonSource/${day}.json`);
  const [total] = React.useState(jsonFile);
  return (
    <>
      {total.map((item, index) => (
        <div style={{ marginBottom: "24px" }}>
          <Card>
            <CardHeader title={item.title} subheader="" />
            {item.imgLink ? (
              <CardMedia
                component="img"
                height="194"
                image={item.imgLink}
                alt={item.title}
              />
            ) : (
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

