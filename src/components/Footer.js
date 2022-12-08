import React from 'react';
import styled from 'styled-components';
import Backdrop from '@mui/material/Backdrop';
import DirectionsIcon from '@mui/icons-material/Directions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const card = (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="./dining.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Location
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1515 Market Street, Suite 1650 | Philadelphia, PA 19102 | Phone:
            (215) 599-1400 | Fax: 215-599-0120
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Directions <DirectionsIcon /></Button>
        </CardActions>
      </Card>
    </React.Fragment>
  )


  return (
    <Wrapper>

      <div className='infoHolder'>
        <div className='company-details'><h4> Jeffrey R. Lessin & Associates, P.C., represents people living in
          communities throughout Pennsylvania </h4></div>
        <div className='location-details' onClick={handleToggle}>
          <h4> Location </h4>
          <LocationOnIcon style={{ fontSize: '50px' }} />
        </div>
      </div>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}>
        <Card variant="outlined">{card}</Card>
      </Backdrop>

      <div className='bottom-details'>
        <h5>
          &copy; {new Date().getFullYear()}
          <span> Lessin Law</span>
        </h5>
        <p style={{ fontSize: '0.85rem' }}>
          {' '}
          Counties: Berks County • Bucks County • Chester County • Delaware County •
          Lehigh County • Montgomery County • Northampton County • Philadelphia
          County
        </p>{' '}
      </div>





      {/* <div className="div1">
    <h4>
     Jeffrey R. Lessin & Associates, P.C., represents people living in
     communities throughout Pennsylvania
    </h4>
   </div>

   <div className="div2">
    {' '}
    <DirectionsIcon style={{fontSize: '50px'}}></DirectionsIcon>
    <p>1515 Market Street, Suite 1650 | Philadelphia, PA 19102 | Phone:
      (215) 599-1400 | Fax: 215-599-0120</p>
    <h5>
     &copy; {new Date().getFullYear()}
     <span> Lessin Law</span>
    </h5>
    <p style={{ fontSize: '0.85rem' }}>
     {' '}
     Counties: Berks County • Bucks County • Chester County • Delaware County •
     Lehigh County • Montgomery County • Northampton County • Philadelphia
     County
    </p>{' '}
   </div>
   <div className="div3"> </div> */}
    </Wrapper>
  )
}


const CardWrapper = styled.section`
 @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
 display: static;
 position: relative;
 overflow-y: auto;
 overflow-x: hidden;
 background-color: white;
 border-radius: 20px;
 width: 100%
 height: 100%;`;

const Wrapper = styled.footer`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
 min-height: 20rem;
 width: 100%;
 justify-content: center;
 align-items: center;
 background-color: var(--clr-black);
 text-align: center;
 display: flex;
 position: relative;


 .infoHolder{
  top: 0px;
  display: flex;
  position: absolute;
  width: 100%;
  height: 80%;
  background: var(--clr-black);
 }

 .company-details{
    color: white;
    font-style: sans;
    margin: 2.5rem;
    display: grid;
    width: 60%;
    justify-content: center;
    place-content: center;
    align-items: center;
    border-radius: 25px;
    background: var(--clr-black);
    cursor: pointer;
    &:hover{
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08),0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14);
      background-color: black;
    }
 }
 
 .location-details{
  color: white;
  margin: 2.5rem;
  display: flex;
  width: 30%;
  justify-content: center;
  place-content: center;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  &:hover{
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08),0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14);
    background-color: black;
  }
  
}



.bottom-details{
  position: absolute;
  width: 100%;
  height: 20%;
  color: white;
  bottom: 0px;
}


 span {
  color: var(--clr-grey-9);
 }
 
 h5 {
  color: var(--clr-white);
  margin: 0.1rem;

  font-weight: 400;
  text-transform: none;
  line-height: 1.25;
 }


 .logo {
  width: 100%;
  display: block;
  object-fit: cover;
  height: 2rem;
 }

 .div1,
 .div3,
 .div4,
 .div5 {
  p:hover {
   color: var(--clr-grey-6);
  }
  h5:hover {
   color: var(--clr-grey-6);
  }
  span:hover {
   color: var(--clr-grey-6);
  }
 }
 .div1 {
  display: inline;
  grid-column: 2/3;
  grid-row: 1/2;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-size: 0.7rem;
  font-family: roboto;
  color: white;
  border-radius: 20px;
  padding:0.5rem;

  img {
   padding: 0.5rem;
  }
 }

 .div1:hover{
    background-color: silver;
    border-radius: 20px;
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08),0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14)';
    
    cursor: pointer;
 }

 .div2 {
  grid-column: 1/3;
  grid-row: 2/3;
  font-size: 1rem;
  color: white;
  font-family: roboto;
 }
 .div3 {
  grid-column: 1/2;
  grid-row: 2/3;

  color: white;
  font-family: roboto;
 }

 @media (max-width: 600px) {
  background-color: var(--clr-black);
  .infoHolder{
    display: grid;
  }
  .company-details{
    width: auto;
    font-size: auto;
    margin: 1px;
    margin-top: 10px;
    background-color: var(--clr-black);
  }
  .location-details{
    width: 100%;
    margin-left: 0px;
  }
  }

  @media (max-width: 200px) {
    
    .company-details{
      display: none;
    }
    }
`

export default Footer
