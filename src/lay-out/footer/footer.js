import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'; 
import flogo from '../../assets/flog.svg';
import googleiconfooter from '../../assets/fappstore.svg';
import playicon from '../../assets/playfg.svg';
import { Link, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import fbIcon from '../../assets/icon/fbicon.svg';
import instaIcon from '../../assets/icon/insta.svg';
import linkedinIcon from '../../assets/icon/linkin.svg';
import twitterIcon from '../../assets/icon/twicon.svg';
import youtubeIcon from '../../assets/icon/youtube.svg';
import './footer.css'
// import { useLocation, import { useNavigate, useLocation } from 'react-router-dom'; } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
const footerStyles = {
  backgroundColor: 'White', // Customize your color
  color: 'white',
  padding: '1rem',
};

const images = [
    fbIcon,
    instaIcon,
    linkedinIcon,
    twitterIcon,
    youtubeIcon,
  ];

const columnStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '1rem',
  
  
};

const socialMediaLinks = [
  'https://www.facebook.com',
  'https://www.instagram.com',
  'https://www.linkedin.com',
  'https://twitter.com',
  'https://www.youtube.com',
];



const Footer = () => {


  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <>    <footer style={{ backgroundColor: 'White', padding: '1rem',marginTop:"120px" }}>
      <Divider sx={{borderTop: "1px solid var(--gray-scale-gray-300, #D0D5DD)",
  backGround: "#D9DBE9"}} />
      <Container maxWidth="xl"> 
  
    <Grid container spacing={2} sx={{mt:4,}}>
      <Grid item xs={12} sm={6} md={6} sx={columnStyles} >
      
      <Link  onClick={() => handleNavigation('/')} style={{ textDecoration: 'none' ,cursor:"pointer"}}>
                <img src={flogo} alt="foter logo" />
              </Link>
       <Typography className='text-font' sx={{color:'#4E4B66', fontSize:'14px',fontWeight:400,fontStyle:'normal',textTransform:'capitalize',mt:2}}>
       Copyrights © 2023 All Rights Reserved by Membership Wallet
       </Typography>
      </Grid>
        <Grid item xs={12}  sm={6} md={2} sx={columnStyles}>
          <Typography className='text-font ' sx={{color:' #363565',fontSize:'18px',fontWeight:700,fontStyle:'normal',textTransform:'capitalize',mb:2,mr:{lg:0,xs:2}}}>Company</Typography>
            <Link
          onClick={() => handleNavigation('/about-us')} 
          className="text-font link"  sx={{textDecoration:"none",mt:"20px",color:"#4E4B66"}}>About Us</Link>
            <Link 
           onClick={() => handleNavigation('/contact-us')} 
           className="text-font link"  sx={{textDecoration:"none",mt:"20px",color:"#4E4B66"}}>Contact us</Link>
            <Link 
         onClick={() => handleNavigation('/careers')} 
         className="text-font link"  sx={{textDecoration:"none",mt:"20px",color:"#4E4B66"}}>Careers</Link>
        </Grid>
        <Grid  item xs={12} sm={6} md={2} style={columnStyles}>
          <Typography className='text-font ' sx={{mb:2,color:'#363565', fontSize:'18px',fontWeight:700,fontStyle:'normal',textTransform:'capitalize',}}  >Legal</Typography>
            <Link 
          
         // href="/" 
         className="text-font link"  sx={{textDecoration:"none",mt:"20px",color:"#4E4B66"}} onClick={() => handleNavigation('/data-policy')} >Data Policy</Link>
            <Link 
            sx={{textDecoration:"none",mt:"20px",color:"#4E4B66"}}
            
         // href="/" 
         className="text-font link"  onClick={() => handleNavigation('/privacy-policy')} 
        
           >Privacy Policy</Link>
            <Link 
            className="text-font link"
            sx={{textDecoration:"none",mt:"20px",color:"#4E4B66"}} onClick={() => handleNavigation('/cookie-policy')}  >Cookie Policy</Link>
       
       
        </Grid>
        <Grid item xs={12} sm={6} md={2} style={columnStyles}>
        <Typography className='text-font ' sx={{color:' #363565',fontSize:'18px',fontWeight:700,fontStyle:'normal',textTransform:'capitalize',}}>
    Install App
  </Typography>
  <div className='appIcons'>
    <img
      src={googleiconfooter}
      alt="Google Play"
      className='appIcons'
    />
    <img src={playicon} alt="Apple Store"className='appIcons' />
  </div>
        </Grid>
      </Grid>
      <Divider sx={{mt:4,borderTop: "1px solid var(--gray-scale-gray-300, #D0D5DD)",
  backGround: "#D9DBE9"}}/>
      
      <Grid className="image-grid-container" sx={{ display: 'flex' }}>
  {images.map((image, index) => (
    <Grid item xs={6} sm={4} md={1} key={index} sx={{ display: 'flex', mt: 2 }}>
      <a href={socialMediaLinks[index]} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={`Image ${index + 1}`}
          className="grid-image"
          style={{ width: '30px', height: '30px', margin: '8px' }}
        />
      </a>
    </Grid>
  ))}
</Grid>
      
      </Container>

     
     
    </footer>
     <Grid container sx={{ backgroundColor: '#8155FF', color: 'white', padding: '1rem' }}>
     <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
       <Grid item xs={12} md={6} xl={8} sx={{ display: 'flex', alignItems: 'center' }}>
         <Typography className='text-font' sx={{ color: '#FFFFFF',  fontSize: '14px', fontWeight: 400, fontStyle: 'normal', textTransform: 'capitalize' }}>
           © 2023 All Rights Reserved by Membership Wallet
         </Typography>
       </Grid>
       <Grid item xs={12} md={6} xl={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
       <Typography className='text-font' sx={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 400, fontStyle: 'normal', textTransform: 'capitalize', display: { xs: 'none', md: 'block' } }}>
    <span onClick={() => handleNavigation('/data-policy')} style={{ cursor: 'pointer', marginRight: '10px' }}>Data Policy</span> | 
    <span onClick={() => handleNavigation('/privacy-policy')} style={{ cursor: 'pointer', marginRight: '10px',marginLeft:'10px' }}>Privacy Policy</span> | 
    <span onClick={() => handleNavigation('/cookie-policy')} style={{ cursor: 'pointer', marginRight: '10px' ,marginLeft:'10px'}}>Cookies Policy</span>
</Typography>

       </Grid>
     </Container>
   </Grid></>

  );
};

export default Footer;
