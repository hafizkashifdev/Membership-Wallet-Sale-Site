import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import memberimgteam from "../../../assets/home/teamframe.svg";
import btnright from "../../../assets/home/arrow-right.svg";
import arroegifh from "../../../assets/home/arraowmen.gif";
import gropup from "../../../assets/home/group.svg";
import upperarrow from "../../../assets/home/upper-arrow.svg"

const MembershipTeam = () => {
  const mainContainerStyle = {
    background: `url(${memberimgteam})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '2rem', 
    mt:"144px"
  };

  return (
    <>
    <Container maxWidth="xl" >
    <Grid container sx={{...mainContainerStyle, display:{xl:'flex',xs:'none'}}} >
      
      <Grid item xs={10}>
        <Typography
          className='text-font'
          sx={{
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '60px',
            textAlign:"right",
            color: 'var(--gray-scale-gray-800, #1D2939)',
            letterSpacing: '-0.96px',
            pr:10,
           
          }}
        >
          Find out more about
          <span style={{ color: '#AD90FE' }}> Membership Wallet </span><br/>
          and join our team!
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
  <img src={arroegifh} alt="graphgif" style={{ width: '150px', height: '150px' }} />
</Grid>


      
      
      <Grid item xs={4} sx={{display:"flex",}}>
        <img src={gropup} alt="memimg" style={{marginRight:"auto",marginTop:'80px'}} />
      </Grid>
      <Grid item xs={6}>

        <Typography
          className='text-font'
          sx={{
            color: 'var(--secondary-secondary-600, #58506C)',
           
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '30px',
            mt:"100px",
            textAlign:"flex-end",
            pr:10
          }}
        >
          Our platform offers a range of rewards, from discounts on premium products and services to exclusive access to events and resources that enhance your personal and professional life. Membership Wallet is more than just a program; it's a lifestyle that connects you with like-minded individuals who share your drive for success.
Join us today and embark on a journey filled with possibilities. Together, we'll explore new horizons and make meaningful connections that enrich your life and career.
        </Typography>
<Box sx={{pr:10}}>
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
      <Grid item xs={2}>

      </Grid>
     
    </Grid>
  </Container>

  <Container maxWidth="lg" >
    <Grid container sx={{padding: {lg:'2rem',xs:'4px'}, display:{xl:'none',xs:'flex'},
    mt:"144px"}}>
      
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
            textAlign:'center',
           
           
          }}
        >
          Find out more about
          <span style={{ color: '#AD90FE' }}> Membership Wallet </span><br/>
          and join our team!
        </Typography>
      </Grid>
      


      
      
      <Grid item xs={12} sx={{display:"flex",justifyContent:'center',px:{lg:2,xs:4}}}>
        <img src={gropup} alt="memimg" style={{marginTop:'80px'}} />
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
            textAlign:"center",
            
          }}
        >
          Our platform offers a range of rewards, from discounts on premium products and services to exclusive access to events and resources that enhance your personal and professional life. Membership Wallet is more than just a program; it's a lifestyle that connects you with like-minded individuals who share your drive for success.
Join us today and embark on a journey filled with possibilities. Together, we'll explore new horizons and make meaningful connections that enrich your life and career.
        </Typography>
<Box  sx={{display:'flex',justifyContent:'center'}}>
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
      <Grid item xs={2}>

      </Grid>
     
    </Grid>
  </Container>
  <Container maxWidth="xxl" sx={{display:{xl:"flex",xs:"none"}}}>
    <img src={upperarrow} style={{marginLeft:"40px"}} alt="jj">
    </img>

  </Container>


  </>

  
  );
};

export default MembershipTeam;
