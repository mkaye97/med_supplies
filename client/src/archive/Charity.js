import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ItemCard from '../components/ItemCard';
import Nav from './Nav';
import CartModal from '../components/CartModal';

const theme = createTheme();

export default function Album() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <Typography sx={{ paddingTop: 3 }} component="h1" variant="h2" align="center" color="text.primary" gutterBottom>Album layout</Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    A short description about the organization. A short description about the organization. A short description about the organization.
                    A short description about the organization. A short description about the organization.
                    A short description about the organization. A short description about the organization.
                </Typography>
                <CardMedia component="img" image='url(/images/MedHub.png)' />
                <Stack>
                <Button sx={{ my: 3 }} variant='outlined' size="large">Organization Homepage</Button>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}