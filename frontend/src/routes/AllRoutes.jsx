import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PagRegister from '../pages/PagRegister';

const AllRoutes = () => {
  return (
    <div>
      <Routes>        
        <Route path='/registerid' element={<PagRegister/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;