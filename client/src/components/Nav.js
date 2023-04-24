import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import HealingIcon from '@mui/icons-material/Healing';
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
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ItemCard from './ItemCard';
import styled from '@emotion/styled';

const LogoutButtonWrapper = styled('button')(({ theme }) => ({
    backgroundColor: 'inherit',
    marginLeft: 'auto',
    borderStyle: 'none'
}))

export default function Nav() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <HealingIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Products
                </Typography>
                <LogoutButtonWrapper>
                    <Button placement="right" color="success" variant="contained">Logout</Button>
                </LogoutButtonWrapper>
            </Toolbar>
        </AppBar>
    )
}