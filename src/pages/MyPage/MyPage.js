import {Outlet, Route, Routes} from "react-router-dom";
import {Sidebar} from "./component/Sidebar";
import {Urls} from "../../component/const/Urls";
import {TestApp} from "./component/TestApp";
import {Test} from "./component/Test";
import {TestResult} from "./component/TestResult";
import {Qualification} from "./component/Qualification";
import {Transaction} from "./component/Transaction";

export const MyPage = () => {

    return (<div className={'row'}>
        <Sidebar/>
        <div className={'column'} style={{flexGrow: 1}}>
        <Routes>
            <Route path={Urls.testApp} Component={TestApp}/>
            <Route path={Urls.test} Component={Test}/>
            <Route path={Urls.testResult} Component={TestResult}/>
            <Route path={Urls.qualification} Component={Qualification}/>
            <Route path={Urls.transactions} Component={Transaction}/>
        </Routes>
        <Outlet/>
        </div>
    </div>)
}