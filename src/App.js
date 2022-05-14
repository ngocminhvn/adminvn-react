import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import Term from "./page/Term";
import Service from "./page/Service";
import Report from "./page/Report";
// ok
class App extends React.Component {
  render()  {
    return (
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="term" element={<Term />} />
        <Route path="service" element={<Service />} />
        <Route path="report" element={<Report />} />
      </Routes>
    </BrowserRouter>
    );
  }
}
export default App;
