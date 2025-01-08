import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./component/header/NavBar";
import TestShort from "./pages/Test/TestShort/TestShort";
import {Urls} from "./component/const/Urls";
import Home from "./pages/Home";
import CreateShort from "./pages/Create/CreateShort/CreateShort";
import CreateTrans from "./pages/Create/CreateTrans/CreateTrans";
import GradingShort from "./pages/Grading/GradingShort/GradingShort";
import TestTrans from "./pages/Test/TestTrans/TestTrans";
import GradingTrans from "./pages/Grading/GradingTrans/GradingTrans";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <main>

            <Routes>
                <Route index Component={Home}/>
                <Route path={Urls.index+Urls.create+Urls.short} Component={CreateShort}/>
                <Route path={Urls.index+Urls.test+Urls.short} Component={TestShort}/>
                <Route path={Urls.index+Urls.grade+Urls.short} Component={GradingShort}/>
                <Route path={Urls.index+Urls.create+Urls.trans} Component={CreateTrans}/>
                <Route path={Urls.index+Urls.test+Urls.trans} Component={TestTrans}/>
                <Route path={Urls.index+Urls.grade+Urls.trans} Component={GradingTrans}/>
            </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
