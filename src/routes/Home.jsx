import React from 'react';

import imgBalls from '../media/football.png';
import imgBoots from '../media/football-boots.png';
import imgShirts from '../media/football-jersey.png';
import imgAbout from '../media/emojiSebas2.png'; 

import style from '../styles/Home.module.css';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

function Home() 
{
    return (
        <Container fluid className='w-100 d-flex flex-column justify-content-center align-items-center p-4 p-md-0'>
            <Card className={style.cartaHello}>
                <Card.Img className="d-flex flex-row align-items-center rounded-circle img-fluid p-3" variant="left" src={imgAbout} />
                <Card.Body className='d-flex flex-column justify-content-center align-items-start w-100 w-md-75 
                h-100'>
                    <Card.Title className="fs-1">Hi! I'm Sebas!</Card.Title>
                    <Card.Text>
                        Welcome to my new React page! This page simulates an online football store with football 
                        balls as the main product, I know this page may seem a bit childish but I 
                        am proud of it because it was quite difficult to do, it's the first time that 
                        I try to work with React so I hope you like it!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Container fluid className='w-100 d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 
            mb-0 mb-md-5'>
                <Card className={style.carta}>
                    <Card.Img className="d-flex flex-row align-items-center rounded-circle img-fluid w-75 h-100 h-md-75 p-3" variant="left" 
                    src={imgBalls} />
                    <Card.Body className='d-flex flex-row justify-content-center align-items-end w-100 h-50 fs-5'>
                        <Link className={style.enlace} to="/balls">See Balls</Link>
                    </Card.Body>
                </Card>
                <Card className={style.carta}>
                    <Card.Img className="d-flex flex-row align-items-center rounded-circle img-fluid w-75 h-100 h-md-75 p-3" variant="left" 
                    src={imgBoots} />
                    <Card.Body className='d-flex flex-row justify-content-center align-items-end w-100 h-50 fs-5'>
                        <Link className={style.enlace} to="/boots">See Boots</Link>
                    </Card.Body>
                </Card>
                <Card className={style.carta}>
                    <Card.Img className="d-flex flex-row align-items-center rounded-circle img-fluid w-75 h-100 h-md-75 p-3" variant="left" 
                    src={imgShirts} />
                    <Card.Body className='d-flex flex-row justify-content-center align-items-end w-100 h-50 fs-5'>
                        <Link className={style.enlace} to="/shirts">See Shirts</Link>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    );
}

export default Home;