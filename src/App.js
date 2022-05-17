import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Home from "./page/Home";
import About from "./page/About";
import Term from "./page/Term";
import Service from "./page/Service";
import Report from "./page/Report";
import Scamer from "./page/Scamer";
import Info from "./page/Info";

class App extends React.Component {
  render()  {
    return (
    <Router>
     <Header></Header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="term" element={<Term />} />
        <Route path="service" element={<Service />} />
        <Route path="report" element={<Report />} />
        <Route path='/scamer/:id' element={<Scamer />} />
        <Route path='/info/:code' element={<Info />} />
      </Routes>
     <Footer></Footer>
    </Router>
    );
  }
}
export default App;