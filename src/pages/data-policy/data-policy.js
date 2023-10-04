import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import cockiesdot from "../../assets/home/dots.svg"
import upperarrow from "../../assets/home/upper-arrow.svg"

const DataPolicy = () => {
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
Data Policy
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
>Membership Wallet is dedicated to maintaining the privacy and security of your data. This Data Policy explains how we collect, process, and protect your information while providing a centralized platform for managing loyalty cards and memberships. By using our services, you agree to the terms outlined in this policy. 
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
    mt:"36px"
  }}
  
>
Data Collection 
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
  
>We collect various types of data to operate and enhance our services. This includes: 
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
Personal Information:
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
  
>When you create an account, we may collect your name, email address, and other contact details.
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
Membership and Loyalty Card Data:
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
  
>To enable card management, we collect and store data from the loyalty cards and memberships you add to our platform. This may include card numbers, barcodes, and associated details. 
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
    mt:"20px"
  }}
  
>
Usage Information:
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
  
> We gather information about your interactions with our platform, such as your device information, IP address, and usage patterns.
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
Data Usage 
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
  
>We use the information we collect for the following purposes: 
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
Service Delivery:
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
  
>To provide you with access to our platform, manage your loyalty cards and memberships, and deliver relevant content.
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
Communication:
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
  
>To send you updates, newsletters, and notifications related to your account and our services.
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
    mt:"16px"
  }}
  
>
Enhancement:
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
  
>To analyse usage data and feedback to enhance our platform and user experience. 
</Typography>
</Box>

<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-800, #1D2939)',
 
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '24px',
    mt:"16px"
  }}
  
>
Legal Compliance:
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
   
    mt:"4px"
  }}
  
>To comply with applicable laws and regulations.
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
    mt:"36px"
  }}
  
>
Data Sharing
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
  
>We do not sell your personal information to third parties. However, we may share your data with:
</Typography>
</Box>

<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-800, #1D2939)',
 
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '24px',
    mt:"36px"
  }}
  
>
Service Providers:
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
  
>Trusted third-party service providers who assist us in delivering our services.
</Typography>
</Box>
<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-800, #1D2939)',
 
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '24px',
    mt:"36px"
  }}
  
>
Legal Obligations:
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
  
>When required by law or to protect our rights, safety, or property, we may share information with law enforcement agencies or other relevant parties.
</Typography>
</Box>
<Box>
<Typography

className='text-font '
sx={{
    color: 'var(--gray-scale-gray-800, #1D2939)',
 
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '24px',
    mt:"36px"
  }}
  
>
Service Providers:
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
  
>Trusted third-party service providers who assist us in delivering our services.
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
    mt:"36px"
  }}
  
>
Your Choices 
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
You can control certain aspects of your data through your account settings. You have the right to access, correct, or delete your personal information. If you have questions or concerns about your data, please contact us at info@membershipwallet.com. 
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
    mt:"36px"
  }}
  
>
Security
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
Membership Wallet takes data security seriously. We implement measures to protect your information from unauthorised access, disclosure, alteration, or destruction. 
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
    mt:"36px"
  }}
  
>
Changes to this Privacy Policy 
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
We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes. 
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
If you have questions or concerns about our Data Policy, please contact us at <span style={{fontWeight:600}}>info@membershipwallet.com.</span>
By using Membership Wallet's services, you agree to the use of Datas as described in this policy.
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

export default DataPolicy
