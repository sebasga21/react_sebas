import React from 'react';

import { getAllBalls } from '../balls';
import style from '../styles/Balls.module.css';
import { useSearchParams } from 'react-router-dom';
import Carta from '../components/Carta';
import { Container } from 'react-bootstrap';

function Balls() 
{
    // Recoge los parámetros que se envian por URL:
    const [searchParams] = useSearchParams();
    // Recoge si hay un parámetro puesto:
    const filter = searchParams.get("filter") ?? "";

    // const location = useLocation();
    const balls = getAllBalls();

    return (
        <Container fluid className={style.bolas}>
            {balls.filter((ball) => {
                if(!filter) return true;

                const nombre = ball.nombre.toLowerCase();
                var ballFound = null;

                if(nombre.includes(filter.toLowerCase()))
                {
                    ballFound = ball;
                }
                
                return ballFound;
            }).map((ball) => (
                <div key={ball.nombre} className={style.cartaProductoBolas}> 
                    <Carta
                        id={ball.id}
                        nombre={ball.nombre}
                        bio={ball.bio}
                        img={ball.img}
                        precio={ball.precio}
                        marca={ball.marca}
                    />
                </div>
            ))}
        </Container>
    );

    // cameras.filter(camera => {
    // if(!filter) return true;
    // const name = user.name.toLowerCase();
    // return name.includes(filter.toLowerCase());
    // })
}

export default Balls;
