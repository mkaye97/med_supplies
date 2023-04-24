import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ItemCard() {

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Paper
                        elevation={5}
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                        <CardMedia
                            component="img"
                            sx={{
                                // 16:9
                                pt: '56.25%',
                            }}
                            image="https://source.unsplash.com/random"
                            alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Heading
                            </Typography>
                            <Typography>
                                This is a media card. You can use this section to describe the
                                content.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">View</Button>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    )
}