import React, { useContext } from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useSearchParams } from 'react-router-dom';

import Logo from '../media/rayo-removebg-preview.png';
import style from '../styles/Navbar.module.css';
import FavoritesContext from '../store/favorites-context';

function Cabecera() 
{
    const favoritesCtx = useContext(FavoritesContext);    

    // Recoge los parámetros que se envian por URL:
    const [searchParams, setSearchParams] = useSearchParams();
    // Recoge si hay un parámetro puesto:
    const filter = searchParams.get("filter") ?? "";

    const handleFilter = (e) => {
        setSearchParams({filter: e.target.value});
    }

    function submitHandler(e) 
    {
        e.preventDefault();    
    }

    return (
        <Navbar sticky="top" bg="light" variant="light" expand="lg" className="p-0 pb-2 pt-2 pb-lg-0 pt-lg-0" >
            <Container fluid className='m-0 ms-lg-4'>
                <Navbar.Brand className="text-decoration-none fw-bold d-flex align-items-center" href="/">
                    <img alt="Boom Ball" src={Logo} width="55" height="55" className="d-inline-block align-top img-fluid" />{' '}
                    <p className={style.brand}>BoomBall</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border border-light shadow-none' 
                style={{ background: "linear-gradient(45deg, #78F1FF, #6940AE)" }} />
                <Navbar.Collapse id="responsive-navbar-nav" className='p-2 p-lg-0 mt-3 mb-3'>
                    <Nav className="me-auto">
                        <NavLink style={({isActive}) => (isActive ? {color: "#5b0a91"} : {color: "grey"})} 
                        className='text-decoration-none ms-lg-3 mb-2 mt-2 mb-lg-0 mt-lg-0 me-3
                        pb-3 pb-lg-0' id={style.home} to="/">Home</NavLink>
                        <NavLink style={({isActive}) => (isActive ? {color: "#5b0a91"} : {color: "grey"})}
                        className='text-decoration-none mb-2 mt-2 mb-lg-0 mt-lg-0 me-3
                        pb-3 pb-lg-0' id={style.balls} to="/balls">Balls</NavLink>
                        <NavLink style={({isActive}) => (isActive ? {color: "#5b0a91"} : {color: "grey"})}
                        className='text-decoration-none mb-2 mt-2 mb-lg-0 mt-lg-0 me-3
                        pb-3 pb-lg-0' id={style.boots} to="/boots">Boots</NavLink>
                        <NavLink style={({isActive}) => (isActive ? {color: "#5b0a91"} : {color: "grey"})}
                        className='text-decoration-none mb-2 mt-2 mb-lg-0 mt-lg-0 me-3
                        pb-3 pb-lg-0' id={style.shirts} to="/shirts">Shirts</NavLink>
                        <NavLink style={({isActive}) => (isActive ? {color: "#5b0a91"} : {color: "grey"})}
                        className='text-decoration-none mb-2 mt-2 mb-lg-0 mt-lg-0 me-3
                        pb-3 pb-lg-0' id={style.favorites} to="/favorites">
                            Favorites
                            <span className={style.numFav}>{favoritesCtx.totalFavorites}</span>    
                        </NavLink>
                    </Nav>
                    <Form onSubmit={submitHandler} className="d-flex">
                        <input type="text" placeholder="Search" className="me-3 shadow-none mt-3 mb-2 mt-lg-0 mb-lg-0"
                        onChange={handleFilter} value={filter}/>
                        {/* <Link to={filter}>
                            <img className={style.search} src={imgAbout} alt="Balls" width='50' height='50' />
                        </Link> */}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
}

export default Cabecera;
