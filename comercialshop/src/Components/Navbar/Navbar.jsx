import { AppBar, Drawer, IconButton, Link, makeStyles, MenuItem, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Tooltip from "@material-ui/core/Tooltip";
import CartIcon from "./CartIcon/CartIcon";
import { green } from "@material-ui/core/colors";
const headersData = [
    {
        label: "Home",
        href: "/home",
    },
    {
        label: "Products",
        href: "/products",
    },
    {
        label: "My Cart",
        href: "/account",
    },
    {
        label: "Log Out",
        href: "/logout",
    },
];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#400CCC",
        paddingRight: "30px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 1000,
        color: "#e5dfca",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        fontSize: "17px",
        marginLeft: "38px",
        color: "#cfc7ab",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "30px ",
    },
}));

export default function Header() {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
        return (
            <React.Fragment>
                <Toolbar className={toolbar}>
                    {femmecubatorLogo}
                    <div>{getMenuButtons()}</div>
                    <CartIcon></CartIcon>
                </Toolbar>
            </React.Fragment>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    {femmecubatorLogo}
                    <div>
                        <h5>Fpt University</h5>
                    </div>
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>

                <div>{femmecubatorLogo}</div>
                <Tooltip title="Add to Cart">
                    <IconButton aria-label="Add to Cart">
                        <CartIcon ></CartIcon>
                    </IconButton>
                </Tooltip>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <ul>
                    <li>
                        <Link
                            {...{
                                component: RouterLink,
                                to: href,
                                backgroundColor: '#E5DFCA',
                                color: "inherit",
                                style: { textDecoration: "none" },
                                key: label,
                            }}
                        >
                            <MenuItem>{label}</MenuItem>
                        </Link>
                    </li>
                </ul>
            );
        });
    };

    const femmecubatorLogo = (
        <Typography variant="h3" component="h1" className={logo}>
            Kshop
        </Typography>
    );
    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <a
                    {...{
                        key: label,
                        color: "secondary",
                        component: RouterLink,
                        className: menuButton,
                    }}
                    href={href}
                >
                    {label}
                </a>
            );
        });
    };

    return (
        <Typography>
            <header>
                <AppBar className={header}>
                    {mobileView ? displayMobile() : displayDesktop()}
                </AppBar>
            </header>
        </Typography>
    );
}