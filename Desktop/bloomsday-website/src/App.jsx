import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import Information from "./Components/Information";
import Contact from "./Components/Contact";
import Cast from "./Components/Cast";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cast" element={<Cast />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
