import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import FavoritesContext from '../store/favorites-context';
import style from '../styles/Carta.module.css';

function Carta(props) 
{
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler()
    {
        if(itemIsFavorite)
        {
            favoritesCtx.removeFavorite(props.id);
        }
        else
        {
            favoritesCtx.addFavorite({
                id: props.id,
                nombre: props.nombre,
                bio: props.bio,
                img: props.img,
                precio: props.precio,
                marca: props.marca
            });
        }
    }

    return (
        <Card className={style.cartaProducto} style={{ width: '20rem' }}>
            <Card.Img variant="top" className={style.imgCarta} src={props.img}/>
            <Card.Body className={style.bodyCarta}>
                <Card.Title>{props.nombre}</Card.Title>
            </Card.Body>
            <Card.Footer className={style.footerCarta}>
                <Link className={style.linkProducto} to={props.id.toString()}>See More</Link>
                <Button className='shadow-none' id={style.buttonProducto} onClick={toggleFavoriteStatusHandler}>
                    { itemIsFavorite ? 'Quit' : 'Save' }
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default Carta;