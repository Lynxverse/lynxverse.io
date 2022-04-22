import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Donate from 'components/pages/Donate';
import LandingPage from 'components/pages/LandingPage';
import Layout from './Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="landing" element={<LandingPage />} />
          <Route path="donate" element={<Donate />} />
          <Route path="*" element={"404"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
