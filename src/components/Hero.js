import React, { useState, useEffect } from 'react'
import { Button, Fab, AddIcon, Grid, Itemm, Box, Text, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import styles from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import Carousel from 'react-material-ui-carousel'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Backdrop from '@mui/material/Backdrop'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';


function CarouselItems(props) {
    return (
        <CardWrapper>
            <div className='cardHolder'>
                <Card sx={{ minHeight: '280px', width: '100%' }}>
                    <CardCover>
                        <img
                            src={props.item.source}
                            srcSet={props.item.source}
                            loading="lazy"
                            alt=""
                        />
                    </CardCover>
                    <CardCover
                        sx={{
                            background:
                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                        }}
                    />
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                            {props.item.name}
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </CardWrapper>
    )
}

const Hero = () => {

    const [open, setOpen] = React.useState(false)
    const handleClose = () => {
      setOpen(false)
    }
    const handleToggle = () => {
      setOpen(!open)
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    var items = [
        {
            name: "Civil Rigts",
            source: "/attorney.jpg"
        },
        {
            name: "Police Brutality",
            source: "/pen.jpg"
        },
        {
            name: "Wrongful Detainment",
            source: "/books.jpg"
        },
        {
            name: "Exessive Force",
            source: "/dining.jpg"
        },
        {
            name: "False Imprisonment",
            source: "https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        }
    ]

    function LoginClicked() {
        alert('CONTACT US CLICKED');

    }

    function ContactUsClicked() {
        alert('CONTACT US CLICKED');
    }

    const card = (
        <ContactCard>
        <div className='card'>
        <div class="background">
          <div class="container">
            <div class="screen">
              <div class="screen-body">
                <div class="screen-body-item left">
                <div class="screen-header-buttonClose"><CloseIcon style={{cursor: 'pointer'}} onClick={handleClose}></CloseIcon></div>
                  <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="NAME"/>
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="EMAIL"/>
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="CONTACT NO"/>
                    </div>
                    <div class="app-form-group message">
                      <input class="app-form-control" placeholder="MESSAGE"/>
                    </div>
                    <div class="app-form-group buttons">
                      <button class="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
        </ContactCard>
    )

    return (
        <Wrapper>
            
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                
            >
                <Card>{card}</Card>
            </Backdrop>

            <Header />
            <div>
                <div className='backg'>
                    <img className='dekstopImage' src='/android-chrome-512x512.png'></img>
                    <div className='detailsTextHolder'>
                        <div className='detailsText'>
                            Our attorneys are dedicated to protecting the civil rights of our clients. We do this by aggressively pursuing compensation for them in court, seeking payment for the damage caused by police and other public employees.
                        </div>
                        <div className='contactButtonHolder'>
                            <div onClick={handleToggle} className='contactButton'>Contact US</div>
                        </div>
                    </div>
                </div>


                <div className='carouselHolder'>
                    <div className='carouselBackground'></div>
                    <div className='carouselBackgroundTop'>
                        <div className='carouselTitleHolder'>
                            <h3 style={{ color: 'white' }}>Areas of Focus</h3>
                        </div>

                        <div className='carousel'>
                            <Carousel>
                                {
                                    items.map((item, i) => <CarouselItems key={i} item={item} />)
                                }
                            </Carousel>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Wrapper>

    )

}

const ContactCard = styles.div`
height: 100%;
width: 100%;
.background {
    display: flex;
    min-height: 100vh;
  }
  
  .container {
    flex: 0 1 700px;
    margin: auto;
    padding: 10px;
  }
  
  .screen {
    position: relative;
    background: #3e3e3e;
    border-radius: 15px;
  }
  
  .screen:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
    z-index: -1;
  }
  
  .screen-header {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background: #4d4d4f;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  
  .screen-header-left {
    margin-right: auto;
  }
  
  .screen-header-button {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    border-radius: 8px;
    background: white;
  }

  .screen-header-buttonClose {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    border-radius: 8px;
  }
  
  .screen-header-button.close {
  }
  
  .screen-header-button.maximize {
    background: #e8e925;
  }
  
  .screen-header-button.minimize {
    background: #74c54f;
  }
  
  .screen-header-right {
    display: flex;
  }
  
  .screen-header-ellipsis {
    width: 3px;
    height: 3px;
    margin-left: 2px;
    border-radius: 8px;
    background: #999;
  }
  
  .screen-body {
    display: flex;
  }
  
  .screen-body-item {
    flex: 1;
    padding: 50px;
  }
  
  .screen-body-item.left {
    display: flex;
    flex-direction: column;
  }
  
  .app-title {
    display: flex;
    flex-direction: column;
    position: relative;
    color: #ea1d6f;
    font-size: 26px;
  }
  
  .app-title:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 25px;
    height: 4px;
    background: #ea1d6f;
  }
  
  .app-contact {
    margin-top: auto;
    font-size: 8px;
    color: #888;
  }
  
  .app-form-group {
    margin-bottom: 15px;
  }
  
  .app-form-group.message {
    margin-top: 40px;
  }
  
  .app-form-group.buttons {
    margin-bottom: 0;
    text-align: right;
  }
  
  .app-form-control {
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    color: #ddd;
    font-size: 14px;
    text-transform: uppercase;
    outline: none;
    transition: border-color .2s;
  }
  
  .app-form-control::placeholder {
    color: #666;
  }
  
  .app-form-control:focus {
    border-bottom-color: #ddd;
  }
  
  .app-form-button {
    background: none;
    border: none;
    color: white;
    font-size: 14px;
    cursor: pointer;
    outline: none;
  }
  
  .app-form-button:hover {
    color: brown;
    font-weight: bold;
  }
  
  .credits {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: #ffa4bd;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
    font-weight: normal;
  }
  
  .credits-link {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
  
  .dribbble {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  
  @media screen and (max-width: 520px) {
    .screen-body {
      flex-direction: column;
    }
  
    .screen-body-item.left {
      margin-bottom: 30px;
    }
  
    .app-title {
      flex-direction: row;
    }
  
    .app-title span {
      margin-right: 12px;
    }
  
    .app-title:after {
      display: none;
    }
  }
  
    @media only screen and (max-width: 600px) {
     
  .screen-body {
      padding: 40px;
    }
  
    .screen-body-item {
      padding: 0;
    }
    }

`

const CardWrapper = styles.div`
height: 100%;
width: 100%;

.cardHolder{
    height: 100%;
    width: 100%;
    background-color: black;
}
`

const Wrapper = styles.main`
 height: 100vh;
 width: 100%;
.backg{
    height: 100%;
    display: flex;
    align-items: center;
    padding: 5%;
    background-color: rgb(20, 39, 79);
}

.dekstopImage{
    width: 20%;
}

.detailsTextHolder{
    width: 100%;
    height: 100%;
    place-content: center;
    display: grid;
}
.detailsText{
    font-style: italic;
    font-family: 'sans';
    width: 100%;
    color: white;
    height: 100%;
    text-align: center;
}

 .gridHolder{
  margin: 10%;
  marginLeft : 10%,
  opacity: 1;
  padding : 05%;
 }

 .gridHolder2{

  opacity: 1;
  padding : 05%;
  justify-content: center;
  align-items: center;
  marginLeft :  80%;
  width :  120%;
  background-color: black;
}

.contactButtonHolder{
    width: 100%;
    height: 100%;
    place-content: center;
    text-align: center;
    display: grid;
}

.contactButton{
    color: white;
    padding-top: 2rem;
    place-content:center;
    display: grid; 
    transition: var(--transition);
    cursor: pointer;
    &:hover {
        color: white;
        box-shadow: 0 2px var(--clr-primary-10);
       }
}

.carouselHolder{
    height: 500px;
    width: 100%;
    display: grid;
    background-color: rgb(20, 39, 79);
}

.carouselTitleHolder{
    height: 20%;
    width: 100%;
    text-align: center;
    display: grid;
    place-content: center;
}
.carouselBackground{
    position: absolute;
    background-color: black;
    height: 450px;
    width: 100%;
    opacity: 0.5;
    border-radius: 20px;
}
.carousel{
    height: 80%;
    width: 100%;
}

.carouselBackgroundTop{
    z-index: 1;
}

 @media (min-width: 576px) {
  
 }

 @media only screen and (max-width: 600px) {
    .backg{
        height: 100%;
        align-content: center;
        display: grid;
        align-items: center;
        justify-content: start;
        padding: 5%;
        background-color: rgb(20, 39, 79);
    }

    .dekstopImage{
        width: 100%;
    }

    .mobImage{
        height: 100%;
        align-content: center;
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 5%;
        background-color: rgb(20, 39, 79);
        visibility: visible;
    }

    .contactButton{
        width: 100%;
        color: white;
        height: 100%;
        padding-top: 2rem;
        place-content:center;
        display: grid; 
        transition: var(--transition);
        cursor: pointer;
        &:hover {
            color: white;
            box-shadow: 0 2px var(--clr-primary-10);
           }
    }
    
 }
 @media only screen and (min-width: 600px) {
 }

 @media only screen and (min-width: 768px) {
 }

 @media (min-width: 992px) {
 }
 @media (min-width: 1280px) {
 }
`

export default Hero