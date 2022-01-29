import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getShirt } from '../shirts';

import style from '../styles/Shirt.module.css';

function Shirt(props) 
{
    const params = useParams();

    const camiseta = getShirt(parseInt(params.shirtId));

    // Para recoger el parametro que hay en la ruta:
    // const params = useParams();
    // La función useState SIEMPRE devuelve un array con dos elementos, el primer elemento que devuelve
    // el estado actual y el segundo elemento es una función que permite modificar el primer elemento:

    return (
        <Container fluid className={style.camiseta}>
            <Card className={style.carta}>
                <Card.Img className="d-flex flex-row align-items-center rounded-circle img-fluid p-3 w-50" variant="left" src={camiseta.img} />
                <Card.Body className='d-flex flex-column justify-content-center align-items-start w-50 w-md-75 
                h-100'>
                    <Card.Title className="fs-1">{camiseta.nombre}{" | "}{camiseta.precio}</Card.Title>
                    <Card.Text className={style.texto}>
                        {camiseta.bio}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Shirt;

