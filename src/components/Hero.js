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
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


function CarouselItems(props) {
    return (
        <CardWrapper>
            <div className='cardHolder'>
                <Card sx={{ minHeight: '280px', width: '100%'}}>
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

    return (
        <Wrapper>
            <Header />
            <div>
                <div className='backg'>
                <img className='dekstopImage' src='/android-chrome-512x512.png'></img>
                    <div className='detailsTextHolder'>
                        <div className='detailsText'>
                            Our attorneys are dedicated to protecting the civil rights of our clients. We do this by aggressively pursuing compensation for them in court, seeking payment for the damage caused by police and other public employees.
                        </div>
                        <div className='contactButtonHolder'>
                            <div className='contactButton'>Contact US</div>
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