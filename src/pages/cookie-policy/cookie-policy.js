import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import cockiesdot from "../../assets/home/dots.svg"
import upperarrow from "../../assets/home/upper-arrow.svg"

const CookiePolicy = () => {
  return (
   <>
   <Container maxWidth="xxl">
<Box sx={{display:{lg:"flex",xs:"none"},pr:"50px",position:'relative',}}>
 <img src={cockiesdot} alt="img" style={{marginLeft:"auto",position:"absolute",right:70,top:170}}>
  </img>
 </Box>
    </Container>
    <Container maxWidth="lg" sx={{mt:"194px",mb:"40px"}}>
<Grid container>
<Grid item xs={12}>
<Typography 
className='text-font '
sx={{
  color: '#3CA7EF',
  fontSize: '48px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
}}
>
Cookie Policy
</Typography>
<Typography

className='text-font '
sx={{
  color: 'var(--gray-scale-gray-600, #475467)',
   
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '26px',
  letterSpacing: '0.16px',
  mt:"24px"
}}
>
This Cookie Policy is designed to explain how Membership Wallet uses cookies and similar tracking technologies when you access and use our centralized platform for managing loyalty cards and memberships. By using our services, you consent to the use of cookies as described in this policy. 
</Typography>
<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-800, #1D2939)',
 
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '24px',
    mt:"24px"
  }}
  
>
What Are Cookies? 
</Typography>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-600, #475467)',
   
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.16px',
   
    mt:"8px"
  }}
  
>
Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit websites. They are widely used to enhance the functionality and user experience of websites and applications. 
</Typography>
</Box>

{/* // box two */}

<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-700, #344054)',
  
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '24px', 
    mt:"24px"
  }}
  
>
Essential Cookies:
</Typography>
<Typography

className='text-font '
sx={{
    color: '-gray-scale-gray-500, #667085',
     
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.16px',
   
    mt:"8px"
  }}
  
>
These cookies are necessary for the core functionality of our platform. They enable you to log in, manage your cards, and access essential features.
</Typography>
</Box>

{/* // Box 3 */}

<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-700, #344054)',
  
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '24px', 
    mt:"24px"
  }}
  
>
Performance Cookies:
</Typography>
<Typography

className='text-font '
sx={{
    color: '-gray-scale-gray-500, #667085',
     
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.16px',
   
    mt:"8px"
  }}
  
>
We use performance cookies to collect data on how users interact with our platform. This information helps us improve the user experience.
</Typography>
</Box>

<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-700, #344054)',
  
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '24px', 
    mt:"24px"
  }}
  
>
Functional Cookies:
</Typography>
<Typography

className='text-font '
sx={{
    color: '-gray-scale-gray-500, #667085',
     
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.16px',
   
    mt:"8px"
  }}
  
>
Functional cookies allow us to remember your preferences and settings, such as language and display preferences, to enhance your experience.
</Typography>
</Box>
<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-700, #344054)',
  
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '24px', 
    mt:"24px"
  }}
  
>
Analytics Cookies:
</Typography>
<Typography

className='text-font '
sx={{
    color: '-gray-scale-gray-500, #667085',
     
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.16px',
   
    mt:"8px"
  }}
  
>
We use analytics cookies to gather information about how you use our platform. This data helps us understand user behaviour and improve our services.
</Typography>
</Box>

<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-700, #344054)',
  
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '24px', 
    mt:"24px"
  }}
  
>
Advertising Cookies:
</Typography>
<Typography

className='text-font '
sx={{
    color: '-gray-scale-gray-500, #667085',
     
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.16px',
   
    mt:"8px"
  }}
  
>
Membership Wallet may use advertising cookies to display relevant advertisements to you based on your interests and online behaviour.
</Typography>
</Box>


<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-800, #1D2939)',
 
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '24px',
    mt:"24px"
  }}
  
>
Your Cookie Choices
</Typography>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-600, #475467)',
     
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.16px',
   
    mt:"8px"
  }}
  
>
You can control and manage cookies through your browser settings. You can choose to accept or decline cookies or set your browser to notify you when cookies are being used. However, please note that disabling cookies may affect the functionality of our platform. 
</Typography>
</Box>
<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-800, #1D2939)',
 
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '24px',
    mt:"24px"
  }}
  
>
Third-Party Cookies
</Typography>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-600, #475467)',
     
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.16px',
   
    mt:"8px"
  }}
  
>
Membership Wallet may also use third-party cookies provided by trusted partners, such as analytics and advertising providers. These third-party cookies are subject to the privacy policies of the respective providers. 
</Typography>
</Box>

{/* <Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-800, #1D2939)',
 
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '24px',
    mt:"24px"
  }}
  
>
Changes to this Cookie Policy
</Typography>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-600, #475467)',
     
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.16px',
   
    mt:"8px"
  }}
  
>
We may update this Cookie Policy to reflect changes in our practices or for legal reasons. Any significant changes will be communicated to you. 
</Typography>
</Box> */}

<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-800, #1D2939)',
 
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '24px',
    mt:"24px"
  }}
  
>
Changes to this Cookie Policy
</Typography>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-600, #475467)',
     
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.16px',
   
    mt:"8px"
  }}
  
>
We may update this Cookie Policy to reflect changes in our practices or for legal reasons. Any significant changes will be communicated to you. 
</Typography>
</Box>

<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-800, #1D2939)',
 
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '24px',
    mt:"24px"
  }}
  
>
Contact Us
</Typography>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-600, #475467)',
     
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0.16px',
   
    mt:"8px"
  }}
  
>
If you have questions or concerns about our Cookie Policy, please contact us at <span style={{fontWeight:600}}>info@membershipwallet.com.</span>
By using Membership Wallet's services, you agree to the use of cookies as described in this policy.
</Typography>
</Box>


</Grid>
</Grid>
    </Container>
    <Container maxWidth="xxl" sx={{display:{xl:"flex",xs:"none",position:'relative'}}}>
    <img src={upperarrow} style={{marginLeft:"40px",top:"-430px",position:'absolute'}} alt="jj">
    </img>

  </Container>
    </>
  )
}

export default CookiePolicy
