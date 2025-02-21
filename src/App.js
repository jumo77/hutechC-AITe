import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./component/header/NavBar";
import {Urls} from "./component/const/Urls";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import PopUps from "./component/ui/PopUps";
import {Create} from "./pages/modules/Create/Create";
import {Grading} from "./pages/modules/Grading/Grading";
import {Test} from "./pages/modules/Test/Test";
import {MyPage} from "./pages/MyPage/MyPage";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <main>
            <Routes>
                <Route index Component={Home}/>
                <Route path={Urls.process(Urls.create)} Component={Create}/>
                <Route path={Urls.process(Urls.test)} Component={Test}/>
                <Route path={Urls.process(Urls.grade)} Component={Grading}/>
                <Route path='/signin' Component={SignIn}/>
                <Route path='/signup' Component={SignUp}/>
                <Route path={Urls.process(Urls.myPage)} Component={MyPage}/>
            </Routes>
            </main>
            <PopUps/>
        </BrowserRouter>
    );
}

export default App;
