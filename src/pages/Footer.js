import React from 'react'
import styled from 'styled-components'
import Backdrop from '@mui/material/Backdrop'
import DirectionsIcon from '@mui/icons-material/Directions'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
  }

  //Company Name Card
  const [cOpen, cSetOpen] = React.useState(false)
  const cHandleClose = () => {
    cSetOpen(false)
  }
  const cHandleToggle = () => {
    cSetOpen(!open)
  }

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
          <Typography gutterBottom variant="h5" component="div" >
            Location
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1515 Market Street, Suite 1650 | Philadelphia, PA 19102 | Phone: (215)
            599-1400 | Fax: 215-599-0120
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">
            Directions <DirectionsIcon />
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  )

  const companyCard = (
    <React.Fragment>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="280"
          image="./android-chrome-512x512.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jeffrey R. Lessin & Associates
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Jeffrey R. Lessin & Associates, P.C., represents clients in civil rights matters in the Philadelphia, Pennsylvania, area, including the Main Line and cities such as West Chester,Chester, Norrisville,
            Coatesville, Ardmore, Levittown, Media, Bala Cynwyd, Allentown, Doylestown, Easton, Norristown, Reading, Westchester, Bensalem, and
            counties such as Berks County, <br></br> Bucks County, Chester County, Delaware County, Lehigh County, Montgomery County, Northampton County and Philadelphia County.
          </Typography>
          <text >© Jeffrey R. Lessin & Associates, P.C. All rights reserved.</text>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">
            Directions <DirectionsIcon />
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  )

  return (
   <Wrapper>
    <div className="infoHolder">
     <div className="company-details" onClick={cHandleToggle}>
      <h4> Jeffrey R. Lessin & Associates, P.C. </h4>
      <h6 className="companyTagline" style={{ color: 'black' }}>
       {' '}
       Pepresents people living in communities throughout Pennsylvania{' '}
      </h6>
     </div>
     <div className="location-details" onClick={handleToggle}>
      <h4 style={{ marginTop: '10px' }}> Location </h4>
      <LocationOnIcon style={{ fontSize: '50px' }} />
     </div>

      <h5 style={{ color: 'grey' }}>
       &copy; {new Date().getFullYear()}
       <span style={{ color: 'black' }}> Lessin Law</span>
      </h5>
      <div className="countriesHolder">
       <p style={{ fontSize: '0.85rem' }}>
        {' '}
        Counties: Berks County • Bucks County • Chester County • Delaware County
        • Lehigh County • Montgomery County • Northampton County • Philadelphia
        County
       </p>{' '}
      </div>
      
    </div>

    <Backdrop
     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
     open={open}
     onClick={handleClose}
    >
     <Card variant="outlined">{card}</Card>
    </Backdrop>
    <Backdrop
     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
     open={cOpen}
     onClick={cHandleClose}
    >
     <Card variant="outlined">{companyCard}</Card>
    </Backdrop>
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
 width: 100%;
 height: 100%;
`

const Wrapper = styled.footer`
background-color: whitesmoke;
 @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
 height: 200px;
 width: 100%;
 justify-content: center;
 align-items: center;
 text-align: center;
 display: flex;
 position: relative;
 bottom: 0;

 .infoHolder {
  top: 0px;
  display: flex;
  position: absolute;
  width: 100%;
  height: 80%;
 }

 .company-details {
  color: black;
  font-style: sans;
  margin: 2.5rem;
  display: grid;
  width: 30%;
  justify-content: center;
  place-content: center;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
   box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
    0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1),
    0px 24px 32px rgba(9, 55, 53, 0.14);
   background-color: white;
   transition: box-shadow 2s background-color 2s;
   transition-duration: 1s, 1s;
  }
 }

 .location-details {
  color: black;
  margin: 2.5rem;
  display: flex;
  width: 30%;
  justify-content: center;
  place-content: center;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
   box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
    0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1),
    0px 24px 32px rgba(9, 55, 53, 0.14);
   background-color: white;
   transition: box-shadow 2s background-color 2s;
   transition-duration: 1s, 1s;
  }
 }

 .social-media {
  color: black;
  margin: 2.5rem;
  display: flex;
  width: 30%;
  justify-content: center;
  place-content: center;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
   box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
    0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1),
    0px 24px 32px rgba(9, 55, 53, 0.14);
   background-color: white;
   transition: box-shadow 2s background-color 2s;
   transition-duration: 1s, 1s;
  }
 }

 .bottom-details {
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

 .countriesHolder{
  display: flex;
  justify-content: center;
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
  padding: 0.5rem;

  img {
   padding: 0.5rem;
  }
 }

 .div1:hover {
  background-color: silver;
  border-radius: 20px;
  box-shadow: '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08),0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14)';

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

 .mobSocialLoc{
  color: black;
  font-style: sans;
  margin: 2.5rem;
  display: flex;
  width: 30%;
  justify-content: center;
  place-content: center;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
   box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
    0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1),
    0px 24px 32px rgba(9, 55, 53, 0.14);
   background-color: white;
   transition: box-shadow 2s background-color 2s;
   transition-duration: 1s, 1s;
  }
  visibility: hidden;
 }

 @media (max-width: 600px) {
  display: grid;
  /* border-radius: 30px; */
  .infoHolder {
   display: grid;
  }
  .company-details {
   width: auto;
   font-size: auto;
   margin: 1px;
   margin-top: 10px;
   height: 40%;
   font-size: 10px;
  }
  .location-details {
   width: 100%;
   margin-left: 0px;
  }
  .countriesHolder{
    display: none;
  }
  .location-details{
    display: none;
  }
  .social-media{
    display: none;
  }
  .companyTagline{
    display: none;
  }
  .mobSocialLoc{
    visibility: visible;
    width: auto;
   font-size: auto;
   margin: 1px;
   margin-top: 10px;
   height: 40%;
   font-size: 10px;
  }
 }

 @media (max-width: 200px) {
  .company-details {
   display: none;
  }
 }
`

export default Footer
