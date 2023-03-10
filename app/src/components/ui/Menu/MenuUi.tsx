import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Container, Divider, IconButton, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import Menu from '@mui/material/Menu';
import { Link, NavLink } from "@remix-run/react";
import React, { useState } from "react";

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

const MenuUi: React.FC = ( props: Props ) => {
    const [userSession, setUserSession] = useState({ menu: [] })
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    console.log( userSession );
    return (
        <React.Fragment>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SGVETI
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {/* {userSession.menu? && userSession.menu.map( (menu) => (
                                    <MenuItem key={ menu.title }  >
                                        <NavLink to={ menu.url }>
                                            <Typography textAlign="center">{ menu.title }</Typography>
                                        </NavLink>
                                    </MenuItem>
                                    ))
                                } */}
                                <Divider />
                                <MenuItem key='salir' component={NavLink} to='/public/logout'>
                                    <Typography textAlign="center">Salir</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            to='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SGVETI
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Usuario" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {/* {userSession?.menu && userSession.menu.map( (menu) => (
                                    <MenuItem key={ menu.title }  >
                                        <NavLink to={ menu.url }>
                                            <Typography 
                                                component="h3"
                                                textAlign="center"
                                            >
                                                { menu.title }
                                            </Typography>
                                        </NavLink>
                                    </MenuItem>
                                    ))
                                } */}
                                <Divider />
                                <MenuItem key='salir'  >
                                        <NavLink to='/public/logout'>
                                            <Typography textAlign="center">Salir</Typography>
                                        </NavLink>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>    
            </AppBar>
        </React.Fragment>
    )
}

export default MenuUi;