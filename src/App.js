import * as React from "react";
import Header from "./components/header";
import Tutorial1Component from "./components/tutorial1";
import Tutorial2Component from "./components/tutorial2";
import KnowledgeComponent from "./components/knowledge";
import LonginComponent from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqComponent from "./components/faq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<KnowledgeComponent />}></Route>
          <Route
            path="easyescrow1-4sdk"
            element={<Tutorial1Component />}
          ></Route>
          <Route path="easyescrow5sdk" element={<Tutorial2Component />}></Route>
          <Route path="faq" element={<FaqComponent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
