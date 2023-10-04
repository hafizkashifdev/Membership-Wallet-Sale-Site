
import React, { useState } from 'react';
import condot from "../../assets/home/dots.svg"
import {
  Grid,
  Container,
  Box,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FlagUks from "../../assets/contactus/FlagUK.svg";

import PhoneIcon from "../../assets/contactus/call-calling.svg";
import FaxIcon from "../../assets/contactus/call.svg";
import EmailIcon from "../../assets/contactus/sms.svg";

const countries = [
  // { value: "USA", label: "United States" },
  { value: "England", label: "", code: "+44" },
  // { value: "France", label: "France" },
  // { value: "Germany", label: "Germany" },
  // { value: "Japan", label: "Japan" },
];


const ContactUs = () => {

  const [selectedValue, setSelectedValue] = useState(''); 

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
  const connectdivStyle = {
    background: 'var(--gray-scale-gray-50, #F9FAFB)',
    borderRadius: '0px 0px 300px 300px',
    padding: '20px', 
    height:"643px"
  };

  return (
    <>
 <Container maxWidth="xxl">
<Box sx={{display:{lg:"flex",xs:"none"},pr:"50px",position:'relative',}}>
 <img src={condot} alt="img" style={{marginLeft:"auto",position:"absolute",right:70,top:170}}>
  </img>
 </Box>
    </Container>

    <div style={connectdivStyle}>
   
      <Container maxWidth="lg">

<Grid container >
<Grid item xs={12} sx={{mt:"170px"}}>
<Typography variant="h6" 
 className='text-font'
sx={{color: '#8155FF',
    fontSize: '60px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '72px', 
    letterSpacing: '-1.2px',
    textAlign:"center"}}>Contact Us</Typography>
</Grid>
</Grid>
      </Container>
      
    </div>

    <Container maxWidth="lg" >
      <Grid container sx={{position:"relative"}}>
<Grid item 
xs={12}
 sx={{
  borderRadius: '20px',
  background: '#FFF',
  boxShadow: '0px 24px 94px -10px rgba(78, 78, 78, 0.20)',
  // padding: '20px',
  // border:"1px solid black",
  // height:"1023px",
  maxWidth: "1109px",
  width:"100%",
  marginTop:"-300px"

  
  
}}
>
            <Grid container spacing={2} sx={{ px: {md:"107px",sm:"40px",xs:"10px"} ,mt:"50px"}}>
              <Grid item  lg={6} xs={12} gap={2}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                  First Name{" "}
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter first name"
                  className='text-font'
                  sx={{
                      
                    fontSize: "16px",
                    background: "#F9FAFB",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#8155FF"
                      }
                    }
                  }}
                >
                  Enter first name
                </TextField>
              </Grid>
              <Grid item lg={6} xs={12}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                  Last Name{" "}
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter last name"
                  className='text-font'
                  sx={{
               
                    fontSize: "16px",
                    borderRadius: "8px",
                    background: "#F9FAFB",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#8155FF"
                      }
                    }
                  }}
                >
                  Enter last name
                </TextField>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ px: {md:"107px",sm:"40px",xs:"10px"} ,mt:"30px"}}>
            <Grid item lg={6} xs={12} sx={{  }}>
              <InputLabel
                fullWidth
                className='text-font'
                sx={{
                
                  fontSize: "16px",
                  py: "12px",
                }}
              >
                Email{" "}
              </InputLabel>
              <TextField
                fullWidth
                placeholder="Enter email"
                className='text-font'
                sx={{
                 
                  fontSize: "16px",
                  background: "#F9FAFB",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#8155FF"
                    }
                  }
                }}
              >
                Enter email
              </TextField>

            </Grid>
            <Grid item lg={2} xs={12}>
                <InputLabel
                className='text-font'
                  sx={{
                   
                    fontSize: "16px",
                    py: "11px",
                  }}
                >
                  Phone Number{" "}
                </InputLabel>
                <FormControl fullWidth sx={{ py: "4px" }}>
                  <Select
                    value="+44"
                    className='text-font'
                   
                      
                    sx={{
                      fontSize: 16,
                      borderRadius: "8px",
                      outline: "none",
                      height: "57px",
                      background: "#F9FAFB",
                     
                      "&.Mui-focused fieldset": {
                        border: "#8155FF",
                      },
                    }}
                    renderValue={(selectedValue) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={FlagUks}
                          alt="Flag"
                          style={{ marginRight: "8px" }}
                        />
                        {selectedValue}
                      </div>
                    )}
                  >
                    {countries.map((country) => (
                      <MenuItem key={country.value} value={country.label}>
                        <img src={FlagUks} alt="Flag" /> {country.label}{" "}
                        {country.code && `(${country.code})`}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={4} xs={12} mt={6}>
                <TextField
                  placeholder="xxxx xxxxxx"
                  fullWidth
                  className='text-font'
                  sx={{
                  
                    fontSize: "16px",
                    background: "#F9FAFB",
                    borderRadius: "8px",
                    height: "57px",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#8155FF"
                      }
                    }
                  }}
                >
                  xxxx xxxxxx
                </TextField>
              </Grid>
              </Grid>
              <Grid item xs={12} sx={{px: {md:"107px",sm:"40px",xs:"10px"},mt:"30px"}}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                  Title
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="  Enter subject"
                  className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    background: "#F9FAFB",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#8155FF"
                      }
                    }
                  }}
                >
                  Enter Tile{" "}
                </TextField>
              </Grid>
              
           
             
            <Grid container spacing={2} sx={{ px: {md:"107px",sm:"40px",xs:"10px"} ,mt:"30px"}}>
              <Grid item  lg={6} xs={12} >
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                 Company
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter Company"
                  className='text-font'
                  sx={{
                   
                    fontSize: "16px",
                    background: "#F9FAFB",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#8155FF"
                      }
                    }
                   
                  }}
                >
                  Enter Company
                </TextField>
              </Grid>
              <Grid item lg={6} xs={12}>
      <InputLabel className='text-font' sx={{ fontSize: '16px', py: '8px' }}>
        Number of stores (optional)
      </InputLabel>
      <FormControl fullWidth>
        <Select
          value={selectedValue} 
          onChange={handleSelectChange} 
          renderValue={(value) =>
            value !== '' ? (
              value
            ) : (
              <span
                style={{
                  color: 'black',
                  fontSize: '16px',
                  fontWeight: 400,
                }}
              >
                Select number of stores
              </span>
            )
          }
          sx={{
            fontSize: '16px',
            borderRadius: '8px',
            color: '#A5A7A6',
            height: '57px',
            background: '#F9FAFB',
            '&.Mui-focused fieldset': {
              border: '#8155FF',
            },
          }}
        >
          <MenuItem value="Ten">Ten</MenuItem>
          <MenuItem value="Twenty">Twenty</MenuItem>
          <MenuItem value="Thirty">Thirty</MenuItem>
        </Select>
      </FormControl>
    </Grid>
           
              
           
              <Grid item xs={12} gap={2} sx={{mt:"30px"}}>
                <InputLabel
                className='text-font'
                  sx={{
                    
                    fontSize: "16px",
                    py: "8px",
                  }}
                >
                  Your request
                </InputLabel>
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  placeholder="Write something..."
                  sx={{ background: "#F9FAFB",  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#8155FF"
                    }
                  }}}
                />
              </Grid>
              <Grid item xs={12} gap={2} sx={{ mt: "30px" }}>
  <Button
    fullWidth
    sx={{
      color: "#FFFFFF",
      backgroundColor: "#916BFE",
      "&:hover": {
        backgroundColor: "#7455D0", 
        color: "#FFFFFF", 
      },
    }}
  >
    Submit
  </Button>
</Grid>

              {/* <Grid item xs={12} gap={2} sx={{ textAlign: "center" ,mt:"48px"}}>
                <Typography
            
            className="text-font "
                  sx={{
                    // fontFamily:"Gilroy-Medium",
                    fontSize: "18px",
                    fontWeight: 400,
                  }}
                >
                  Do you have some questions about Membership Wallet?  Visit our{" "}
                  <span
                  className="text-font "
                    style={{
                      color: "#916BFE",
                      fontSize: "18px",
                      fontWeight: "800",
                    }}
                  >
                    FAQs
                  </span>{" "}
                  to find the
                  <br /> list of most important questions and answers for you.{" "}
                </Typography>
              </Grid> */}
              {/* <hr
                style={{ width: "50%", marginLeft: "25%", textAlign: "left" }}
              /> */}
            </Grid>
            <Grid container xs={12} sx={{px: {md:"107px",sm:"40px",xs:"10px"}, mt: "61px", mb: "50px" }}>
  <Grid item lg={4} xs={12} container alignItems="center" sx={{ gap: {lg:"16px",xs:"4px"} ,mt:{lg:"0px",xs:"10px"}}}>
    <Grid item >
      <img src={PhoneIcon} alt="" />
    </Grid>
    <Grid item> 
      <Typography
      className='text-font'
        sx={{
        
          fontSize: "13px",
          color: "#3B4A45",
        }}
      >
        PHONE
      </Typography>
      <Typography
      className='text-font'
        sx={{
          whiteSpace: "nowrap",
        
          fontSize: "13px",
          color: "#916BFE",
        }}
      >
        +44 20 3885 4872
      </Typography>
    </Grid>
  </Grid>
  <Grid
    item
    lg={4} xs={12}
    sx={{
      gap: {lg:"16px",xs:"4px"} ,
      mt:{lg:"0px",xs:"10px"},
       // Add a right border
      paddingRight: "16px", 
    }}
    container
  
  >
    {/* <Grid >
      <img src={FaxIcon} alt="" />
    </Grid> */}
    {/* <Grid item>
      <Typography
      className='text-font'
        sx={{
        
          fontSize: "13px",
          color: "#3B4A45",
        }}
      >
        FAX
      </Typography>
      <Typography
      className='text-font'
        sx={{
          whiteSpace: "nowrap",
        
          fontSize: "13px",
          color: "#916BFE",
        }}
      >
        +44 20 3885 4872
      </Typography>
    </Grid> */}
  </Grid>
  <Grid
    item
    lg={4} xs={12}
    sx={{ gap: {lg:"16px",xs:"4px"} ,mt:{lg:"0px",xs:"20px"}}}
    container
    alignItems="center"
  >
    <Grid item>
      <img src={EmailIcon} alt="" />
    </Grid>
    <Grid item>
      <Typography
      className='text-font'
        sx={{
      
          fontSize: "13px",
          color: "#3B4A45",
        }}
      >
        EMAIL
      </Typography>
      <Typography
      className='text-font'
        sx={{
          whiteSpace: "nowrap",
         
          fontSize: "13px",
          color: "#916BFE",
        }}
      >
        info@membershipwallet.com
      </Typography>
    </Grid>
  </Grid>
</Grid>

          </Grid>
        </Grid>
     
{/* </Grid>
      </Grid> */}
    </Container>

    </>
  );
};

export default ContactUs;
