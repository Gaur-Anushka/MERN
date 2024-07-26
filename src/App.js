import "./App.css";

import Boots from "./components/Boots";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element={<Boots />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
