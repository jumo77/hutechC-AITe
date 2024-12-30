import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./component/header/NavBar";
import SubmitShort from "./component/pages/SubmitShort";
import TestShorts from "./component/pages/TestShorts";
import SubmitSave from "./component/pages/SubmitSave";

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/submit/short" Component={SubmitShort}/>
          <Route path="/submit/saved" Component={SubmitSave}/>
          <Route path="/test/short" Component={TestShorts}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
