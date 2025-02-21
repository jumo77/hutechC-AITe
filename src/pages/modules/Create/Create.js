import {Outlet, Route, Routes} from "react-router-dom";
import {Urls} from "../../../component/const/Urls";
import CreateShort from "./pages/Short/CreateShort";
import CreateTrans from "./pages/Trans/CreateTrans";
import Prompt from "./pages/Prompt/Prompt";

export const Create = () => {
    return (<>
        <Routes>
            <Route path={Urls.short} Component={CreateShort}/>
            <Route path={Urls.trans} Component={CreateTrans}/>
            <Route path={Urls.prompt} Component={Prompt}/>
        </Routes>
        <Outlet/>
    </>)
}