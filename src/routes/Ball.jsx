import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getBall } from '../balls';

import style from '../styles/Ball.module.css';

function Ball() 
{
    const params = useParams();

    const bola = getBall(parseInt(params.ballId));

    // Para recoger el parametro que hay en la ruta:
    // const params = useParams();
    // La función useState SIEMPRE devuelve un array con dos elementos, el primer elemento que devuelve
    // el estado actual y el segundo elemento es una función que permite modificar el primer elemento:

    return (
        <Container fluid className={style.bola}>
            <Card className={style.carta}>
                <Card.Img className="d-flex flex-row align-items-center rounded-circle img-fluid p-3 w-50" variant="left" src={bola.img} />
                <Card.Body className='d-flex flex-column justify-content-center align-items-start w-50 w-md-75 
                h-100'>
                    <Card.Title className="fs-1">{bola.nombre}{" | "}{bola.precio}</Card.Title>
                    <Card.Text className={style.texto}>
                        {bola.bio}
                    </Card.Text>
                </Card.Body>
                <Button variant="primary">
                    Save
                </Button>
            </Card>
        </Container>
    );
}

export default Ball;
