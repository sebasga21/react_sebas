import React from 'react';

import { getAllShirts } from '../shirts';
import style from '../styles/Shirts.module.css';
import Carta from '../components/Carta';
import { useSearchParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Shirts() 
{
    // Recoge los parámetros que se envian por URL:
    const [searchParams] = useSearchParams();
    // Recoge si hay un parámetro puesto:
    const filter = searchParams.get("filter") ?? "";

    // const location = useLocation();
    const shirts = getAllShirts();

    return (
        <Container fluid className={style.camisetas}>
            {shirts.filter((shirt) => {
                if(!filter) return true;

                const nombre = shirt.nombre.toLowerCase();
                var shirtFound = null;

                if(nombre.includes(filter.toLowerCase()))
                {
                    shirtFound = shirt;
                }
                
                return shirtFound;
            }).map((shirt) => (
                <div key={shirt.nombre} className={style.cartaProductoCamisetas}> 
                    <Carta
                        id={shirt.id}
                        nombre={shirt.nombre}
                        bio={shirt.bio}
                        img={shirt.img}
                        precio={shirt.precio}
                        marca={shirt.marca}
                    />
                </div>
            ))}
        </Container>
    );
}

export default Shirts;