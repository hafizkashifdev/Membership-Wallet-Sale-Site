import React, { useState ,useRef} from 'react';
import { Button, Popover, Typography, Box, Container, IconButton } from '@mui/material';
import righticon from "../../../assets/offers/right.svg"




const buttons = [
    {
      title: 'Food & Drink',
      data: 'Food & Drink',
      items: ['Restaurants', 'Breweries, Wineries & Distilleries', 'Cafes & Treats', 'Groceries & Markets','Bars','In-Store & Delivery','Groceries','Meal Kits','All Food'],
    },
    {
      title: 'Fashion',
      data: 'Fashion',
      items: ['Clothing', 'Designer', 'Shoes', 'Accessories','Jewelry','Bags','Sunglasses','Lingerie & Underwear','Swimwear','Activewear','Menswear','All Fashion'],
    },
    {
      title: 'Technology',
      data: 'Technology',
      items: ['Entertainment', 'Travel & Lodging', 'Digital Subscriptions', 'Daily Essentials','Eye Care','Student Insurance','All Lifestyle'],
    },
    {
        title: 'Lifestyle',
        data: 'Lifestyle',
        items: ['Massage', 'Makeup', 'Skincare', 'Salons','Cosmetic Procedures','Brows & Lashes','Hair Removal','Hair & Styling','Spas','Nail Salons','Blowouts & Styling','Makeup','Tanning','Face & Skin Care'],
      },
      {
        title: 'Beauty & Spa',
        data: 'Beauty & Spa',
        items: ['Automotive', 'Car wash', 'Electric Chargers'],
      },
      {
        title: 'Transport',
        data: 'Transport',
        items: ['Restaurants', 'Breweries, Wineries & Distilleries', 'Cafes & Treats', 'Groceries & Markets','Bars','In-Store & Delivery','Groceries','Meal Kits','All Food'],
      },
      {
        title: 'Health & Fitness',
        data: 'Health & Fitness',
        items: ['Family vacations', 'Big city vacations', 'Europe Tours', 'Asia & Pacific Tours','Casino','Travel & Lodging'],
      },
      {
        title: 'Travel & Hotel',
        data: 'Travel & Hotel',
        items: ['Family vacations', 'Big city vacations', 'Europe Tours', 'Asia & Pacific Tours','Casino','Travel & Lodging'],
      },
      {
        title: 'Membership & Loyalty Cards',
        data: 'Membership & Loyalty Cards',
        items: ['Family vacations', 'Big city vacations', 'Europe Tours', 'Asia & Pacific Tours','Casino','Travel & Lodging'],
      },
      {
        title: 'Shopping',
        data: 'Membership & Loyalty Cards',
        items: ['Auto & Home Appliances', 'Baby & Kids', 'Electronics', 'Entertainment','Grocery & Household', 'Health & Beauty', 'Home & Garden', 'Jewelry & Watches', `Men's Fashion`,'Pet Supplies', 'Sports & Outdoors', 'Toys', ],
      },
  ];

  
  const ButtonList = () => {
    const [anchorEls, setAnchorEls] = useState(Array(buttons.length).fill(null));
    const [selectedButton, setSelectedButton] = useState(null);
    const buttonContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [initialMouseX, setInitialMouseX] = useState(null);
    const [initialScrollX, setInitialScrollX] = useState(null);
  
    const handleButtonClick = (event, buttonIndex) => {
      const newAnchorEls = [...anchorEls];
      newAnchorEls[buttonIndex] = event.currentTarget;
      setAnchorEls(newAnchorEls);
      setSelectedButton(buttonIndex);
    };
  
    const handlePopoverClose = (buttonIndex) => {
      const newAnchorEls = [...anchorEls];
      newAnchorEls[buttonIndex] = null;
      setAnchorEls(newAnchorEls);
      setSelectedButton(null);
    };
    const scrollLeft = () => {
      if (buttonContainerRef.current) {
        const currentScrollLeft = buttonContainerRef.current.scrollLeft;
        const scrollDistance = 200;
        buttonContainerRef.current.scrollLeft = currentScrollLeft - scrollDistance; // Scroll to the left
      }
    };
    const isPopoverOpen = selectedButton !== null;
  
    const handleMouseDown = (event) => {
      setIsDragging(true);
      setInitialMouseX(event.clientX);
      setInitialScrollX(buttonContainerRef.current.scrollLeft);
      buttonContainerRef.current.style.cursor = 'grabbing';
    };
  
    const handleMouseMove = (event) => {
      if (!isDragging) return;
  
      const deltaX = event.clientX - initialMouseX;
      buttonContainerRef.current.scrollLeft = initialScrollX - deltaX;
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
      buttonContainerRef.current.style.cursor = 'grab';
    };
  
    const scrollRight = () => {
      if (buttonContainerRef.current) {
       
        const currentScrollLeft = buttonContainerRef.current.scrollLeft;
        const scrollDistance = 200; 
        buttonContainerRef.current.scrollLeft = currentScrollLeft + scrollDistance;
      }
    };
  
    return (
      <Container maxWidth="xl">
        <Box
          display="flex"
          sx={{
            mt: '56px',
            overflowX: 'hidden',
            alignItems: 'center',
            position: 'relative', 
          }}
        >
           <IconButton
  onClick={scrollLeft} // Use the scrollLeft function for left arrow
  style={{
    backgroundColor: 'var(--untitled-others-blue-light-blue-light-300, #7CD4FD)', 
    borderRadius: '6px', 
    marginRight: '10px',
    transform: 'rotate(180deg)', // Rotate the icon 180 degrees
  }}
>
  <img src={righticon} alt='left-icon' style={{ width: '24px', height: '24px', }} />
</IconButton>

          {/* Button List */}
          <Box
            ref={buttonContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
             
              width: '100%', 
              overflow: 'hidden', 
             
            }}
          >
          
            <Button
          
          
          className="text-font"
          sx={{
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            letterSpacing: '0.8px',
            gap: '2px',
            p: '12px 24px',
            color: 'white',
            backgroundColor: '#7CD4FD',
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
            marginRight: '10px',
            cursor: 'pointer', 
            '&:hover': {
              backgroundColor: '#7CD4FD', 
              color: 'white', 
            },
          }}
        >
          All
        </Button>
            {buttons.map((button, index) => (
              <Box
                key={index}
                sx={{
                
                }}
              >
                <Button
  onClick={(event) => handleButtonClick(event, index)}
  style={{
    color: selectedButton === index ? '--gray-scale-gray-100, #F2F4F7)' : '--gray-scale-gray-100, #F2F4F7)',
    fontWeight: selectedButton === index ? 'bold' : 'normal',
    backgroundColor: 'var(--gray-scale-gray-100, #F2F4F7)',
    textTransform: 'capitalize',
    marginRight: '10px',
    width: 'auto',
    whiteSpace: 'nowrap',

    ...(isPopoverOpen && selectedButton === index
      ? {
          position: 'relative', 
          zIndex: 1, 
        }
      : {}), 
  }}
  className="text-font"
  sx={{
    color: 'var(--gray-scale-gray-500, #667085)',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '0.8px',
    gap: '2px',
    p: '12px 24px',
  
    ...(isPopoverOpen && selectedButton === index
      ? {
          backgroundColor: 'var(--gray-scale-gray-100, #F2F4F7)',
        }
      : {}), 
  }}
>
  {button.title}
</Button>

  
               
                <Popover
                  open={isPopoverOpen && anchorEls[index] !== null}
                  anchorEl={anchorEls[index]}
                  onClose={() => handlePopoverClose(index)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Box p={2}>
                    <Typography
                      className="text-font"
                      variant="subtitle1"
                      sx={{
                        color: '#35ACFE',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: 'normal',
                        letterSpacing: '0.9px',
                        mb: '4px',
                      }}
                    >
                      {button.data}
                    </Typography>
                    {selectedButton === index &&
                      button.items.map((item, itemIndex) => (
                        <Typography
                          key={itemIndex}
                          className="text-font"
                          sx={{
                            color: 'var(--gray-scale-gray-500, #667085)',
                            height: '24px',
                            paddingRight: '0px',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '24px',
                            mt: '4px',
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                  </Box>
                </Popover>
              </Box>
            ))}
          </Box>
  
 
         
          <IconButton
  onClick={scrollRight}
  style={{
    backgroundColor: 'var(--untitled-others-blue-light-blue-light-300, #7CD4FD)', 
    borderRadius: '6px', 
    marginLeft: '10px'
    
  }}
>
  <img src={righticon} alt='right-icon' style={{ width: '24px', height: '24px', }} />
</IconButton>

        </Box>
      </Container>
    );
  };
  
  export default ButtonList;