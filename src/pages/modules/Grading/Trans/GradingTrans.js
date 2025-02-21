import {useState} from "react";
import MetaData from "./component/MetaData";
import {TransContext} from "./component/TransContext";
import ModifyTransScore from "./component/ModifyTransScore";
import "../Style.css"

export default function GradingTrans(){
    const [metaData, setMetaData] = useState({
        testOverview:"",
        submitterMemo:"",
    })
    const applicant = {
        name:"홍**",
        email:"abc********",
        translator:"DeepL",
    }
    const [score, setScore] = useState({
        max:500,
        pass:400,
        applicant:300
    })

    return(
        <TransContext.Provider value={{metaData,setMetaData, applicant, score, setScore}}>
            <MetaData/>
            <ModifyTransScore/>
        </TransContext.Provider>
    )
}