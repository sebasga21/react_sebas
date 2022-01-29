import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './Layout.module.css';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Layout() 
{
    return (
        <div className={style.contenedor}>   
            <Navbar />        

            {/* Sirve para enchufar componentes: */}
            <section className={style.section}>
                <Outlet />
            </section>  

            {/* <Footer />        */}
        </div>
    );
}
