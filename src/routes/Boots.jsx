import React from 'react';

import { getAllBoots } from '../boots';
import style from '../styles/Boots.module.css';
import Carta from '../components/Carta';
import { useSearchParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Boots() 
{
    // Recoge los parámetros que se envian por URL:
    const [searchParams] = useSearchParams();

    // Recoge si hay un parámetro puesto:
    const filter = searchParams.get("filter") ?? "";

    // const location = useLocation();
    const boots = getAllBoots();

    return (
        <Container fluid className={style.botas}>
            {boots.filter((boot) => {
                if(!filter) return true;

                const nombre = boot.nombre.toLowerCase();
                var bootFound = null;

                if(nombre.includes(filter.toLowerCase()))
                {
                    bootFound = boot;
                }
                
                return bootFound;
            }).map((boot) => (
                <div key={boot.id} className={style.cartaProductoBotas}> 
                    <Carta
                        id={boot.id}
                        nombre={boot.nombre}
                        bio={boot.bio}
                        img={boot.img}
                        precio={boot.precio}
                        marca={boot.marca}
                    />
                </div>
            ))}
        </Container>
    );
}

export default Boots;
