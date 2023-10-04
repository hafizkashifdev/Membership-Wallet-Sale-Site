import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import "./header.style.css";
import logoimg from "../../assets/logo.svg";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
// import Menu from "@mui/material/Menu";
// import ListItemText from "@mui/material/ListItemText";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {  Grid } from "@mui/material";
import { useNavigate, useLocation } from 'react-router-dom';

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Offers ",
    href: "/offers",
  },
  {
    label: "Business",
    href: "/business",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
 
 
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "transparent!important",
    height: "0px",
    // zIndex: -1,
    // border:"2px solid red"
  },
  logo: {
    textAlign: "left",
  },
  menuButton: {
    fontWeight: 700,
    size: "18px",
    marginLeft: "auto",
    color: "#dddddd",
    // border:'1px solid blue'
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center", 
    // backgroundColor: "#000000",

    borderRadius: "10px",
   
    // border: "1px solid red",
  },
  drawerContainer: {},
  label: {
    color: 'var(--gray-scale-gray-600, #475467)',
    // border:"1px solid black",

    // fontFamily: "Open Sans",
    fontSize: "16px",
    // fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    // transition: "all 0.3s",
    textDecoration: "none",
    textTransform: "capitalize",
    display: "inline-block",
    lineheight:"24px",
  },
  labelHover: {
    color: "#6938EF",
  },
  loginButton: {
    marginRight: "20px", 
  },
}));


export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  // const [isButtonActive, setIsButtonActive] = useState(false);
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  // const [drawerOpenn, setDrawerOpen] = useState(false);

  // const toggleDrawer = () => {
  //   setDrawerOpen(!drawerOpenn);
  // };
  

  const classes = useStyles();
 
  // const [anchorEl, setAnchorEl] = useState(null);
  // const [solutionsAnchorEl, setSolutionsAnchorEl] = useState(null);
  // const [activeSolution, setActiveSolution] = useState(""); 

  // const handleMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleSolutionsMenuOpen = (event) => {
  //   setSolutionsAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

  // const handleSolutionsMenuClose = () => {
  //   setSolutionsAnchorEl(null);
  // };

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);


 
 

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
  };
  const displayDesktop = () => {
    return (
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: "70px",borderRadius: "10px",boxShadow: "0px 7px 18px 0px rgba(0, 0, 24, 0.12)",bgcolor:"#fff"}}>
            <Toolbar className={toolbar} sx={{ boxShadow: "0px 7px 18px 0px rgba(0, 0, 24, 0.12)",paddingLeft:{ lg:"100px",md:"20px",},
    paddingRight: { lg:"100px",md:"20px"},
    paddingTop: "20px",
    paddingBottom: "20px",}}>
              <Link onClick={() => handleNavigation('/')} className={logo}>{femmecubatorLogo}</Link>
              <div>{getMenuButtons()}</div>
              <div>
               {loginButton}
              </div>
            </Toolbar>
          </Grid>
        </Grid>
      </Container>
    );
  };
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
    return (
      <Container maxWidth="xl">
        <Toolbar className={toolbar} 
        sx={{ marginTop: "52px",borderRadius: "10px",boxShadow: "0px 7px 18px 0px rgba(0, 0, 24, 0.12)",bgcolor:"#fff"}}
        
        >
          <Link onClick={() => handleNavigation('/')} className={logo}>{femmecubatorLogo}</Link>
          <div style={{ flex: 1 }}></div>
          <IconButton
            {...{
              edge: "end", 
              color: "#ffffff",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: drawerOpen ? handleDrawerClose : handleDrawerOpen, 
              className: `${menuButton} hamburger-icon text-font ${
                drawerOpen ? "close-icon" : ""
              }`,
              sx: {
                zIndex: 999, 
              },
            }}
          >
            {drawerOpen ? (
              <CloseIcon /> 
            ) : (
              <MenuIcon />
            )}
          </IconButton>
          <Drawer
            {...{
              anchor: "top",
              open: drawerOpen,
              onClose: handleDrawerClose,
              sx: {
                p: 20,
                paddingTop: "80px",
                zIndex: 998, 
                marginTop:"500px"
              },
            }}
          >
            <div
            className={drawerContainer}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              marginTop:"100px"
            }}
          >
            {getDrawerChoices()}
          </div>
          </Drawer>
        </Toolbar>
      </Container>
    );
  };
  
  
  
  
  const loginButton = (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: {lg:"row",xs:"column"},gap:{lg:"18px",xs:"18px"} }}>
      <Button sx={{borderRadius: '8px',
  border: '1px solid var(--primary-primary-500, #7A5AF8)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  textTransform: 'capitalize', 
  color: 'var(--primary-primary-500, #7A5AF8)',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '170%',
  mt:{lg:0,xs:2}

}}
  
  className="text-font"

  onClick={() => handleNavigation('/partner-with-us')}
  
  >
      Partner with us
    </Button>
      <Button
      className="text-font "
        sx={{ borderRadius: '8px',

        background: 'linear-gradient(103deg, #9672FE 0%, #6A35FF 100%)',
        boxShadow: '0px 17px 22px -10px rgba(24, 8, 70, 0.10)',padding:"10px 20px",color:"#ffffff" ,textTransform:'capitalize',fontWeight:500}}
        // component={RouterLink}
        onClick={() => handleNavigation('/sign-up')}
      >
     Try For Free   
      </Button>
      <Button
        sx={{ color: "var(--gray-scale-gray-700, #344054)",fontSize:"16px", mb:{lg:0,xs:2},textDecoration:'underline' ,textTransform:'capitalize',fontStyle:'normal',fontWeight:500,background: "transparent",
        '&:hover': {
          backgroundColor: 'transparent',
        },}}
        className="text-font"
        // component={RouterLink}
        onClick={() => handleNavigation('/sign-in')}
      >
 Login
      </Button>
    </Box>
  );
  
  const getDrawerChoices = () => {
    const menuItems = headersData.map(({ label, href, subMenu }) => (
      <div key={label}>
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
          }}
        >
          <MenuItem className="text-font" >{label}</MenuItem>
        </Link>
        {/* <Divider sx={{ backgroundColor: "#BEC2C1" ,width:"100%"}} />  */}
      </div>
    ));
  
    return (
      <>
        {menuItems}
        {loginButton}
      </>
    );
  };
  
  const femmecubatorLogo = (
    <img src={logoimg} className="logo" alt="logo" style={{cursor:'pointer'}}></img>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, subMenu }) => {
      const isActive = location.pathname === href;
// header condition if sub menure exist in nav 
      if (subMenu) {
        return (
          <div
            // key={label}
            // className={`${menuButton} ${classes.label} custom-link text-font  ${
            //   isActive || activeSolution ? "active-route" : ""
            // }`}
          >
            {/* <Button
              aria-controls="solutions-menu"
              aria-haspopup="true"
              onClick={(event) => {
                handleSolutionsMenuOpen(event);
                setIsButtonActive(!isButtonActive);
              }}
              color="inherit"
              style={{
                backgroundColor: isButtonActive ? "transparent" : "",
                color: isActive ? "#21b07d" : "#BEC2C1",
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>{label}</span>
                <ExpandMoreIcon />
              </div>
            </Button>
            <Menu
              id="solutions-menu"
              anchorEl={solutionsAnchorEl}
              open={Boolean(solutionsAnchorEl)}
              onClose={handleSolutionsMenuClose}
            >
              {subMenu.map((subItem) => (
                <MenuItem
                  key={subItem.label}
                  component={RouterLink}
                  to={subItem.href}
                  onClick={() => handleSubItemClick(subItem.id)}
                >
                  <ListItemText primary={subItem.label} />
                </MenuItem>
              ))}
            </Menu> */}
          </div>
        );
      } else {
        return (
          <Button
            key={label}
            color="inherit"
            to={href}
            component={RouterLink}
            className={`${menuButton} ${classes.label} custom-link text-font ${
              isActive ? "active-route" : ""
            }`}
            style={{
              color: isActive ? "#21b07d" : "#BEC2C1",
            }}
          >
            {label}
          </Button>
        );
      }
    });
  };

  // Function to handle sub-item click and set active solution
  // const handleSubItemClick = (id) => {
  //   setActiveSolution(id);
  //   handleSolutionsMenuClose();
  // };


  return (
    <header>
      <AppBar
        className={`${header} transparent-header `}
        style={{ position: "absolute" }}
      >
        <Toolbar className={toolbar}>
          {mobileView ? displayMobile() : displayDesktop()}
        </Toolbar>
      </AppBar>
    </header>
  );
  
 
}
