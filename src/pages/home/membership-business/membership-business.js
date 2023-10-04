import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import memberimg from "../../../assets/home/membershipbuss.svg";
import btnright from "../../../assets/home/arrow-right.svg";
import graphgif from "../../../assets/home/graphhome.gif";
import gropup from "../../../assets/home/group.svg";
import dotimg from "../../../assets/home/dots.svg";



const MembershipBusiness = () => {

  const mainContainerStyle = {
    background: `url(${memberimg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '2rem', 
    mt:"87px"
  };


  return (
    <>

<Container maxWidth="xxl">
<Box sx={{display:{xl:"flex",xs:"none"},pr:"50px",position:'relative',}}>
 <img src={dotimg} alt="img" style={{marginLeft:"auto",position:"absolute",right:10,top:"470px"}}>
  </img>
 </Box>
    </Container>
    <Container maxWidth="xl"  sx={{display:{lg:"flex",xs:"none"}}}>
    <Grid container sx={mainContainerStyle}>
    <Grid item xs={2} sx={{ display:{lg:"flex",xs:"none"}, justifyContent: 'center', alignItems: 'center' }}>
  <img src={graphgif} alt="graphgif" style={{ width: '150px', height: '150px' }} />
</Grid>

      <Grid item xs={10}>
        <Typography

        className='text-font'
          sx={{
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '60px',
            color: 'var(--gray-scale-gray-800, #1D2939)',
            letterSpacing: '-0.96px',
            pl:10,
            // mt:2
          }}
        >
          Interested in what
          <span style={{ color: '#AD90FE' }}> Membership Wallet </span><br/>
          can do for your business
        </Typography>
      </Grid>
      
      <Grid  item xs={2}>

      </Grid>
      <Grid item xl={6} xs={10}>
        <Typography
          className='text-font'
          sx={{
            color: 'var(--secondary-secondary-600, #58506C)',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '30px',
            mt:"100px",
            pl:{lg:10,xs:0},
            // p:{xl:0,md:4}
          }}
        >
          Discover how a Membership Wallet can revolutionize your business! Our Membership Wallet offers a wide range of benefits, including enhanced customer loyalty and retention. With personalized rewards and exclusive discounts, you can build strong, lasting relationships with your clientele. Through seamless communication and data-driven insights, the Membership Wallet allows you to connect with your members directly, sending tailored offers and updates.
        </Typography>
<Box sx={{pl:10}}>
<Button
  variant="contained"
  color="primary"
  endIcon={<img src={btnright} alt="btnright" />}
  className='text-font'
  sx={{
    borderRadius: '8px',
    border: '1px solid var(--gray-scale-gray-300, #D0D5DD)',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    backgroundColor: "#ffffff",
    mt: "28px",
    color: "black", 
    '&:hover': {
      color: "black", 
      backgroundColor: "#ffffff", 
    },
  }}
>
  View Business
</Button>
</Box>
      </Grid>
      <Grid item xs={4} sx={{display:{xl:"flex",xs:'none'}}}>
        <img src={gropup} alt="memimg" style={{marginLeft:"auto",marginTop:'60px'}} />
      </Grid>
    </Grid>
  </Container>
  <Container maxWidth="xl"  sx={{display:{lg:"none",xs:"flex"}}}>
    <Grid container sx={{  mt:"87px"}}>
 

      <Grid item xs={12}>
        <Typography
          className='text-font'
          sx={{
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '60px',
            color: 'var(--gray-scale-gray-800, #1D2939)',
            letterSpacing: '-0.96px',
            textAlign:"center",
           
          }}
        >
          Interested in what
          <span style={{ color: '#AD90FE' }}> Membership Wallet </span>
          can do for your business
        </Typography>
      </Grid>
      
      <Grid item xs={2}>

      </Grid>
      <Grid item xs={12}>
        <Typography
          className='text-font'
          sx={{
            color: 'var(--secondary-secondary-600, #58506C)',
           
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '30px',
            mt:"100px",
            textAlign:"center"
          
          }}
        >
          Discover how a Membership Wallet can revolutionize your business! Our Membership Wallet offers a wide range of benefits, including enhanced customer loyalty and retention. With personalized rewards and exclusive discounts, you can build strong, lasting relationships with your clientele. Through seamless communication and data-driven insights, the Membership Wallet allows you to connect with your members directly, sending tailored offers and updates.
        </Typography>
<Box  sx={{display:'flex',justifyContent:'center'}}>
<Button
  variant="contained"
  color="primary"
  endIcon={<img src={btnright} alt="btnright" />}
  className='text-font'
  sx={{
    borderRadius: '8px',
    textAlign:"center",
    border: '1px solid var(--gray-scale-gray-300, #D0D5DD)',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    backgroundColor: "#ffffff",
    mt: "28px",
    color: "black", 
    '&:hover': {
      color: "black", 
      backgroundColor: "#ffffff", 
    },
  }}
>
  View Business
</Button>
</Box>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
  <img src={gropup} alt="memimg" style={{ marginTop: '60px' }} />
</Grid>



    </Grid>
  </Container>
  
  
  </>
  )
}

export default MembershipBusiness