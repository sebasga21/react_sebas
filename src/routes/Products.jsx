import React from 'react';
import { Container } from 'react-bootstrap';

import Carta from '../components/Carta';
import style from '../styles/Products.module.css';

function Products(props) 
{
    return (
        <Container fluid className={style.fav}>
            {props.favs.filter((fav) => {
                if(!props.filter) return true;

                const nombre = fav.nombre.toLowerCase();
                var favFound = null;

                if(nombre.includes(props.filter.toLowerCase()))
                {
                    favFound = fav;
                }
                
                return favFound;
            }).map((fav) => (
                <div key={fav.nombre} className={style.cartaProductoFav}> 
                    <Carta
                        id={fav.id}
                        nombre={fav.nombre}
                        bio={fav.bio}
                        img={fav.img}
                        precio={fav.precio}
                        marca={fav.marca}
                    />
                </div>
            ))}
        </Container>
    );
}

export default Products;
