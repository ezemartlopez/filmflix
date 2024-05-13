import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Base from '../pages/Base';
import View from '../pages/View';


function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />} >
          <Route path="" element={<Home/>} />
          <Route path=":id" element={<View/>} />
        </Route>
        {/* ... otras rutas */}
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp