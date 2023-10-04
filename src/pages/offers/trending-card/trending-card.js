import React, { useState } from 'react';
import { Typography, Button, Box, SvgIcon, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import saleimg from "../../../assets/offers/sale.svg";
import saleimgtwo from "../../../assets/offers/special.svg";
import saleimgthree from "../../../assets/offers/persensale.svg";

const cards = [
  {
    img: saleimg,
    text: '60%',
  },
  {
    img: saleimgtwo,
    text: '50%',
  },
  {
    img: saleimgthree,
    text: '20%',
  },
];

const cardColors = {
  '60%': 'rgba(242, 188, 2, 0.80)',
  '50%': 'rgba(255, 95, 85, 0.80)',
  '20%': 'rgba(4, 179, 124, 0.80)',
};

const TrendingCard = () => {
  const [hoveredStates, setHoveredStates] = useState(cards.map(() => false));
  const buttonTexts = cards.map((card, index) =>
    hoveredStates[index] ? 'View Details' : '£9.50'
  );

  const handleMouseEnter = (index) => {
    const newHoveredStates = [...hoveredStates];
    newHoveredStates[index] = true;
    setHoveredStates(newHoveredStates);
  };

  const handleMouseLeave = (index) => {
    const newHoveredStates = [...hoveredStates];
    newHoveredStates[index] = false;
    setHoveredStates(newHoveredStates);
  };

  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item lg={4} md={6} xs={12} sx={{ display: "flex", justifyContent: 'center' }} key={index}>
          <Card
            style={{
              width: '100%',
              maxWidth: '448.714px',
              minHeight: '530.979px',
              borderRadius: '16px',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // Center content horizontally
            }}
          >
            <CardMedia
              component="img"
              alt="Card Image"
              // height="265.074px"
              style={{
                width: '100%',
                // height: '100%', 
                borderRadius: '16px', // Apply border-radius here
                // borderRadius: '16px',
                maxWidth: '408.829px',
                minHeight: '265.074px',
                flexShrink: 0,
                position: 'relative',
                padding: '1rem',
                overflow: 'hidden',
              }}
              src={card.img}
            />
          
            <Box sx={{ position: 'relative' }}>
              <Typography
                variant="body2"
                sx={{
                  position: 'absolute',
                  top: '-240px',
                  right: '-162px',
                  backgroundColor: cardColors[card.text],
                  width: '99px',
                  height: '40px',
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '0px 8px 8px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {card.text}
              </Typography>
            </Box>

            <CardContent>
              <Typography
                variant="body2"
                sx={{
                  color: '#796EFF',
                  fontSize: '13.295px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  letterSpacing: '0.266px',
                  mt: "29px"
                }}
                className='text-font'
              >
                Sponge Cakes
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#475467',
                  fontSize: '13.295px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  mt: '13px'
                }}
                className='text-font'
              >
                4.9 <SvgIcon sx={{ color: '#EFA029' }}>
                  <polygon points="12,2 15,8 22,8 16,13 19,20 12,15 5,20 8,13 2,8 9,8"></polygon>
                </SvgIcon>
                (136 Ratings)
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'var(--gray-scale-gray-600, #475467)',
                  fontSize: '19.943px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '28.252px',
                }}
                className='text-font'
              >
                Admission to Santus Circus, 31 August 2023 - 24 September
              </Typography>
            </CardContent>

            <Box
              sx={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 16px',
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: '6px',
                  background: 'rgba(121, 110, 255, 0.10)',
                  width: '100%',
                  maxWidth: '224px',
                  color: '#796EFF',
                  '&:hover': {
                    background: '#796EFF',
                    color: 'white',
                  },
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {buttonTexts[index]}
              </Button>
              <Typography
                sx={{
                  color: 'var(--gray-scale-gray-500, #667085)',
                 
                  fontSize: '23.267px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textDecorationLine: 'line-through',
                }}
                className='text-font'
              >
                £19.00
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TrendingCard;
