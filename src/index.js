import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './Layout';
import Home from './routes/Home';
import Balls from './routes/Balls';
import Ball from './routes/Ball';
import Boots from './routes/Boots';
import Boot from './routes/Boot';
import Shirts from './routes/Shirts';
import Shirt from './routes/Shirt';
import Favorites from './routes/Favorites';
import { FavoritesContextProvider } from './store/favorites-context';

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="balls" element={<Balls />} />
          <Route path="balls/:ballId" element={<Ball />} />
          <Route path="boots" element={<Boots />} />
          <Route path="boots/:bootId" element={<Boot />} />
          <Route path="shirts" element={<Shirts />} />
          <Route path="shirts/:shirtId" element={<Shirt />} />
          <Route path="favorites" element={<Favorites  />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* Esta ruta la pongo por si se escribe la ruta mal para que redireccione al Home 
          y no se guarde la ruta mal escrita: */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </FavoritesContextProvider>
  ,document.getElementById('root')
);