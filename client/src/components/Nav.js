import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import HealingIcon from '@mui/icons-material/Healing';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import ItemCard from './ItemCard';
import styled from '@emotion/styled';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  MemoryRouter,
} from 'react-router-dom';


const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/material-ui/getting-started/installation/" {...props} />
));

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node,
};
const LogoutButtonWrapper = styled('button')(({ theme }) => ({
    backgroundColor: 'inherit',
    marginLeft: 'auto',
    borderStyle: 'none'
}))

export default function Nav() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <HealingIcon sx={{ fontSize: 40, mr: 2 }} />
                <Typography sx={{ fontSize: 40}} variant="h6" color="inherit" noWrap>
                    Med Hub
                </Typography>
                   <Router>
                <Link component={RouterLink} to="/" sx={{ color: "red", px: 5, fontSize: 20 }} variant="body2" onClick={() => { console.info("I'm a button.") }}>Home</Link>
                <Link component={RouterLink} to="/StoreProducts" sx={{ color: "red", px: 5, fontSize: 20 }}  variant="body2" onClick={() => { console.info("I'm a button.") }}>Products</Link>
                <Link component={RouterLink} to="/SignIn" sx={{ color: "red", px: 5, fontSize: 20 }}  variant="body2" onClick={() => { console.info("I'm a button.") }}>Sign In</Link>
                <Link component={RouterLink} to="/SignUp" sx={{ color: "red", px: 5, fontSize: 20 }}  variant="body2" onClick={() => { console.info("I'm a button.") }}>Sign Up</Link>
                <Link component={RouterLink} to="/Donation" sx={{ color: "red", px: 5, fontSize: 20 }}  variant="body2" onClick={() => { console.info("I'm a button.") }}>Make a Donation</Link>
                <Link component={RouterLink} to="/Dashboard" sx={{ color: "red", px: 5, fontSize: 20 }}  variant="body2" onClick={() => { console.info("I'm a button.") }}>Dashboard</Link>
                <LogoutButtonWrapper>
                    <Button component={RouterLink} to="/" placement="right" color="success" variant="contained">Logout</Button>
                </LogoutButtonWrapper>
                </Router>
            </Toolbar>
        </AppBar>
    )
}