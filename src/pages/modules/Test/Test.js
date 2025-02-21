import {Outlet, Route, Routes} from "react-router-dom";
import {Urls} from "../../../component/const/Urls";
import TestShort from "./Short/TestShort";
import TestTrans from "./Trans/TestTrans";
import TestPrompt from "./Prompt/TestPrompt";

export const Test = () => {
    return (<>
        <Routes>
            <Route path={Urls.short} Component={TestShort}/>
            <Route path={Urls.trans} Component={TestTrans}/>
            <Route path={Urls.prompt} Component={TestPrompt}/>
        </Routes>
        <Outlet/>
    </>)
}