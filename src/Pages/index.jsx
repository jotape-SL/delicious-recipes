import Home from './Home';
import Cuisine from './Coisine';
import Searched from './Searched';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/searched/:search' element={<Searched />} />
    </Routes>
  );
}

export default Pages;
