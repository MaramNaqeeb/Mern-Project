import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@material-ui/core/Avatar';
import Header from '../components/Header'

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <div>
    <Header></Header>

    <Card sx={{ display: 'flex',width:"600px",height:"300px",marginLeft:"500px" }}>
       
      
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
     
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/toothe4.jpg"
        alt="Live from space album cover"
      />
    </Card>
    </div>
  );
}