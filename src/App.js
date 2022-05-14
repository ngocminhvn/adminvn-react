import React from "react";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import Term from "./page/Term";
import Service from "./page/Service";
import Report from "./page/Report";

class App extends React.Component {
  render()  {
    return (
      <BrowserRouter>
      <Routes>
        <Switch>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="term" element={<Term />} />
        <Route path="service" element={<Service />} />
        <Route path="report" element={<Report />} />
        </Switch>
      </Routes>
    </BrowserRouter>
    );
  }
}
export default App;
