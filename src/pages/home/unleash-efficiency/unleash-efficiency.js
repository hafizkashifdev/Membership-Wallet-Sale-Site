import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import avatorimg from "../../../assets/home/avators.svg";
// import apple from "../../../assets/home/apple.svg"
import dots from "../../../assets/home/dots.svg"
import membimg from "../../../assets/home/memiphone.svg"
import apple from "../../../assets/home/apple-btn.svg";
import play from "../../../assets/home/play-btn.svg";
import mobileshadow from "../../../assets/home/shadow.svg";



const UnleashEfficiency = () => {

  
  return (
    <>
   <Container maxWidth="xl">
<Grid container sx={{mt:{lg:"240px",xs:"100px"}}} >
<Grid item lg={6} xs={12} >
<Typography

className='text-font'
  sx={{
    color: 'var(--grayscale-gray-900, #101828)',
  
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '125%', 
    letterSpacing: '-0.96px',
    textAlign:"left",
    display:{lg:'flex',xs:"none"}
    
  }}
>
  Unleash Efficiency <br />with Our Mobile App
</Typography>
<Box sx={{display:{lg:'none',xs:"flex"},justifyContent:"center"}}>
<Typography

className='text-font'
  sx={{
    color: 'var(--grayscale-gray-900, #101828)',
  
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '125%', 
    letterSpacing: '-0.96px',
    textAlign:"center",
    
  }}
>
  Unleash Efficiency with Our Mobile App
</Typography>
</Box>
<Typography
className='text-font'
 sx={{
    color: 'var(--grayscale-gray-500, #667085)',
  
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '23px', 
    mt:"24px",
    textAlign:{lg:"left",xs:"center"},
    display:{lg:"flex",xs:'none'},
  }}
>
Experience our mobile application firsthand by downloading it from the App Store or <br/>Google Play. Access our powerful features on the go and stay connected to your business <br/>wherever you are.
</Typography>
<Box sx={{display:{lg:'none',xs:"flex"},justifyContent:"center"}}>
<Typography
className='text-font'
 sx={{
    color: 'var(--grayscale-gray-500, #667085)',
    
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '23px', 
    mt:"24px",
    textAlign:{lg:"left",xs:"center"},
    display:{lg:"none",xs:'flex'},
  }}
>
Experience our mobile application firsthand by downloading it from the App Store or Google Play. Access our powerful features on the go and stay connected to your business <br/>wherever you are.
</Typography></Box>
<Box sx={{ mt: "48px", display: 'flex',justifyContent: { lg: 'flex-start', xs: 'center' },  }}>
  <img src={avatorimg} alt="avotor" />
</Box>

<Typography
className='text-font'
 sx={{
    color: 'var(--grayscale-gray-500, #667085)',
    // fontFamily: 'Outfit',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '23px', 
    mt:"16px",
    textAlign:{lg:"left",xs:"center"},
    display:{lg:"flex",xs:'none'},
  }}
>
Join our growing family of members who have found an easier path and discovered a seamless<br/> solution that simplifies their journey.
</Typography>
<Typography
className='text-font'
 sx={{
    color: 'var(--grayscale-gray-500, #667085)',
    // fontFamily: 'Outfit',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '23px', 
    mt:"16px",
    textAlign:"center",
    display:{lg:"none",xs:'flex'},
  }}
>
Join our growing family of members who have found an easier path and discovered a seamless solution that simplifies their journey.
</Typography>

<Box sx={{ display: 'flex', gap: '16px', mt: { md: "56px", xs: "34px" },   flexDirection: { sm: "row", xs: "column" }, justifyContent: { lg: "flex-start", xs: "center" } }}>
  <Button
    variant="contained"
    sx={{
      borderRadius: '7.37px',
      background: '#EAECF0',
      boxShadow: '0px 0px 2.94815px 0.73704px rgba(224, 220, 255, 0.09) inset',
      transition: 'background 0.3s ease',
      '&:hover': {
        background: 'transparent',
        boxShadow: 'none',
      },
    }}
  >
    <img src={apple} style={{ padding: '4px 8px' }} alt="Button 1" />
  </Button>
  <Button
    variant="contained"
    sx={{
      borderRadius: '7.37px',
      background: '#EAECF0',
      boxShadow: '0px 0px 2.94815px 0.73704px rgba(224, 220, 255, 0.09) inset',
      transition: 'background 0.3s ease',
      '&:hover': {
        background: 'transparent',
        boxShadow: 'none',
      },
    }}
  >
    <img src={play} style={{ padding: '4px 8px' }} alt="Button 2" />
  </Button>
</Box>




</Grid>
<Grid
  item
  lg={6}
  xs={12}
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mt: { md: 0, xs: 10 },
    backgroundImage: `url(${mobileshadow})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <img src={membimg} alt="iphone" width="100%" style={{ maxWidth: '100%' }} />
</Grid>



</Grid>
   </Container>
   <Container maxWidth="xxl">
<Grid container  >
<Grid item xs={12} sx={{position:"relative" ,display:{lg:'flex',xs:'none'}}}>
<img src={dots} alt="arrow" style={{position:'absolute',top:"-480px",left:"20px"}}>
</img>
</Grid>
</Grid>
   </Container>
   </>
  )
}

export default UnleashEfficiency
