import {Outlet, Route, Routes} from "react-router-dom";
import {Urls} from "../../../component/const/Urls";
import GradingShort from "./Short/GradingShort";
import GradingTrans from "./Trans/GradingTrans";
import GradingPrompt from "./Prompt/GradingPrompt";

export const Grading = () => {
    return (<>
        <Routes>
            <Route path={Urls.short} Component={GradingShort}/>
            <Route path={Urls.trans} Component={GradingTrans}/>
            <Route path={Urls.prompt} Component={GradingPrompt}/>
        </Routes>
        <Outlet/>
    </>)
}