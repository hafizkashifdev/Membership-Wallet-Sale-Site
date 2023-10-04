import React from "react";
import {
  Box,
  Container,

  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import authlogo from "../../../assets/auth/sign-in/Logo.svg";
import boxbg from "../../../assets/auth/sign-up/x.png";
import { Button } from "@mui/material";
import Divider from '@mui/material/Divider';
import gogo from "../../../assets/auth/sign-up/gologolo.png";
import faceb from "../../../assets/auth/sign-up/gpv.png";

import setting from "../../../assets/auth/icon/sett.svg";
import laptop from  "../../../assets/auth/sign-in/coin.svg";
import lodo from  "../../../assets/auth/sign-up/vdf.png";
import twiter from "../../../assets/auth/icon/twiter.svg";

import insta from "../../../assets/auth/icon/insta.svg";
import fb from "../../../assets/auth/icon/fb.svg";
import lin from "../../../assets/auth/icon/in.svg";
import yout from "../../../assets/auth/icon/yout.svg";
import { useNavigate } from "react-router-dom";

import applogo from '../../../assets/logo.svg'




const SignIn = () => {

const navigate=useNavigate();

const navigationHandler=(path)=>{
  navigate(path);
}

  return (
    <Container maxWidth="xl">
      <Grid container>
        {/* First Grid: Text and Form */}
        <Grid item lg={5} xs={12}>
        <Box
        
        onClick={()=>navigationHandler('/')}
  sx={{
    mt: "40px",
    display: {sm:'flex',xs:"none"},
    justifyContent: { lg: 'left', xs: 'center' },
    cursor:'pointer'
  }}
>
  <img src={authlogo} alt="logo" />
</Box>
<Box
        
        onClick={()=>navigationHandler('/')}
  sx={{
    mt: "48px",
    display: {sm:'none',xs:"flex"},
    justifyContent: 'center',
    cursor:'pointer'
  }}
>
  <img src={applogo} alt="logo" />
</Box>

<Box
  sx={{
    mt: '80px',
    display: 'flex',
    justifyContent: { lg: 'left', xs: 'center' },
  }}
>
  <Typography
    className="text-font"
    sx={{
      color: "#000047",
      fontSize: {sm:"36px",xs:'26px'},
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "60px",
      letterSpacing: "-0.72px",
    }}
  >
    Sign In to your account
  </Typography>
</Box>


          <Grid container spacing={2} sx={{mt:"34px"}}>
            
            <Grid item xs={12} >
              <InputLabel
                fullWidth
                className="text-font"
                sx={{
                  fontSize: "16px",
                  // py: "8px",
                  color:"3B4A45",
                  fontWeight:500,
                  lineHeight:"24px",
                  mt:"20px",
                }}
              >
                Email
              </InputLabel>
              <TextField
                fullWidth
                placeholder="Enter email"
                className="text-font"
                sx={{
                  fontSize: "16px",
                  background: "#FFFFFF",
                  mt:"8px",
                  borderRadius: "8px",
                  border:'1px solid #EFF1F3',
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#8155FF",
                    },
                   
                  },
                  "&::placeholder": {
                    color: " var(--gray-scale-gray-400, #98A2B3)", 
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} >
              <InputLabel
                className="text-font"
                sx={{
                  fontSize: "16px",
                  // py: "8px",
                  color:"3B4A45",
                  fontWeight:500,
                  lineHeight:"24px",
                  mt:"20px",
                }}
              >
                Password
              </InputLabel>
              <TextField
                fullWidth
                placeholder="*********"
                className="text-font"
                sx={{
                  fontSize: "16px",
                  border:'1px solid #EFF1F3',
                  background: "#FFFFFF",
                  borderRadius: "8px",
                  mt:"8px",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#8155FF",
                    },
                   
                  },
                  "&::placeholder": {
                    color: " var(--gray-scale-gray-400, #98A2B3)", 
                  },
                }}
              />
            </Grid>
            <Grid container alignItems="center">
      <Grid item xs={6} sx={{mt:'24px'}}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Checkbox
            color="primary"
            sx={{
              ml:1,
              "& .MuiIconButton-label:after": {
                content: '""',
                left: 4,
                top: 4,
                height: 15,
                width: 15,
                position: "absolute",
                backgroundColor: "red", // Change this to red
                zIndex: -1,
                borderColor: "transparent"}
            }}
          />
          <Typography variant="body1">Remember me</Typography>
        </label>
      </Grid>
      <Grid item xs={6} container justifyContent="flex-end">
        <Typography variant="body1" sx={{color:'#8155FF',fontSize:'16px',fontWeight:500}}>Forgot Password?</Typography>
      </Grid>
    </Grid>
            
            <Grid lg={6} xs={12} sx={{display:{lg:'inline',xs:'none'}}}>
<Box >

<Divider
  variant="inset"
  component="li"
  sx={{ my: 4, textDecoration: 'none', listStyle: 'none',color:'#9CA6AE' ,mr:1,}}
/>
   </Box>
   </Grid>
   <Grid lg={6} xs={12} sx={{display:{lg:'flex',xs:'none'}}}>
  <Box sx={{ position: 'relative' }}>
    <Divider
      variant="start"
      component="li"
      sx={{ my: 4, textDecoration: 'none', listStyle: 'none', color: '#9CA6AE', width: '210px', ml: 3 }}
    />
    <Typography
     className="text-font"
      sx={{ position: 'absolute', left: '2.9%', top: '48%', transform: 'translate(-50%, -50%)',fontSize:'18px' ,color:"#9CA6AE"}} 
    >
      or
    </Typography>
  </Box>
</Grid>

<Grid lg={6} xs={12} sx={{ display: {lg:'flex',xs:'none'}, justifyContent: 'flex-end', alignItems: 'center',pr:2 }}>
  <img src={faceb} alt="gogal" style={{ cursor: 'pointer' }} />
</Grid>
<Grid lg={6} xs={12} sx={{ display: {lg:'flex',xs:'none'}, justifyContent: 'flex-start', alignItems: 'center',pl:2 }}>
  <img src={gogo} alt="gogal" style={{ cursor: 'pointer' }} />
</Grid>



          </Grid>
          <Grid xs={12} sx={{display:{lg:"none",xs:'flex'},mt:4,justifyContent:'center'}}>
        
    <Divider
      
      sx={{  textDecoration: 'none', listStyle: 'none', color: '#9CA6AE', width: '210px',mt:2 }}
    />
    
          </Grid>
          
          <Grid xs={12}>
  <Box sx={{  display:'flex',flexDirection: 'column', alignItems: 'center', mt: 2 }}>
    <Typography
      className="text-font"
      sx={{ display: {lg:"none",xs:"flex"},fontSize: '18px', color: "#9CA6AE", textAlign: 'center', mb: 2 }}
    >
      or
    </Typography>
    <Box sx={{ display: {lg:"none",xs:"flex"}, gap: '16px' }}>
      <img src={faceb} alt="gogal" style={{ cursor: 'pointer' }} />
      <img src={gogo} alt="gogal" style={{ cursor: 'pointer' }} />
    </Box>
    <Typography
      className="text-font"
      sx={{
        color: "#000047",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "28px",
        textAlign: 'center',
        mt: '16px'
      }}
    >
      Don’t have an account?<span style={{ color: "#8155FF", cursor: 'pointer' }} onClick={()=>navigationHandler('/sign-up')}> Sign Up</span>
    </Typography>
  </Box>
</Grid>


          <Button
            fullWidth
            sx={{
              color: "#FFF",
              backgroundColor: "#916BFE",
              textTransform: "capitalize",
              fontSize:'16px',
              fontWeight:600,
              mt:'38px',
              "&:hover": {
                backgroundColor: "#7455D0",
                color: "#FFFFFF",
              },
            }}
          >
            Sign In
          </Button>
          <Grid xs={12} >
    <Typography  className="text-font"
              sx={{
                color: "#000047",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "28px",
                textAlign:{lg:'left',xs:'center'},
                mt:'90px',
                pb:8
                
              }}>
   Copyrights © 2022 All Rights Reserved by<span style={{ color: "#8155FF", cursor: 'pointer' }}>  Membership Wallet</span> 
    </Typography>
   </Grid>
        </Grid>

        {/* Second Grid: Image */}
        <Grid item xs={12} lg={7} sx={{display:{lg:'inline',xs:'none'}, position: 'relative' }}>
         
  <Box sx={{ position: 'absolute', top: "39px", left: "160px", mt: 2 ,zIndex:-1}}>
    <img src={setting} alt="background" style={{ position: 'absolute' }} />
  </Box>
  <Box sx={{ position: 'absolute', top: "540px", left: '740px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src={boxbg}
    alt="background"
    style={{
      position: 'absolute',
      zIndex: 0.1,
      opacity: 0.99, 
   
    }}
  />
</Box>
<Box sx={{ position: 'absolute', top: "940px", left: '619px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src={twiter}
    alt="twitter"
    style={{
      cursor: 'pointer',
      position: 'absolute',
      zIndex: 4,
      left: '0',
      top: '110%',
    }}
  />
  <img
    src={insta}
    alt="instagram"
    style={{
      cursor: 'pointer',
      position: 'absolute',
      zIndex: 4,
      left: '36px',  
      top: '110%',
    }}
  />
  <img
    src={fb}
    alt="facebook"
    style={{
      cursor: 'pointer',
      position: 'absolute',
      zIndex: 4,
      left: '72px',  
      top: '110%',
    }}
  />
  <img
    src={lin}
    alt="linkedin"
    style={{
      cursor: 'pointer',
      position: 'absolute',
      zIndex: 4,
      left: '108px', 
      top: '110%',
    }}
  />
  <img
    src={yout}
    alt="youtube"
    style={{
      cursor: 'pointer',
      position: 'absolute',
      zIndex: 4,
      left: '144px',  
      top: '110%',
    }}
  />
</Box>



  <div style={{ position: 'relative' }}>
  <img
    src={laptop}
    alt="background"
    style={{
      position: 'absolute',
      zIndex: 2,
      width: '460px',  
      height: '663px', 
      flexShrink: 0,   
      top:"240px",
      left:"210px"
    }}
  />
  <img
    src={lodo}
    alt="background"
    style={{
      position: 'absolute',
      zIndex: 2,
      top:"72px",
      right:"-40px",
      width: '69px',  
      height: '69px', 
      flexShrink: 0,   
    }}
  />
</div>

  
{/* </Box> */}
<div style={{ background:'#8155FF',height:'982px',width:'536px',borderRadius:"40px",position:'absolute',zIndex:-1,left:"423px",top:"40px"}}>  </div>




</Grid>

      </Grid>
    </Container>
  );
};

export default SignIn;
