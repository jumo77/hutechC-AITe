import {useState} from "react";
import {UploadFileType} from "../../../../../component/const/ForTrans";
import {Context} from "./component/Context";
import SubmitMetaData from "./component/SubmitMetaData";
import SubmitOptions from "./component/SubmitOptions";

export default function Prompt(){
    const [file, setFile] = useState(null)
    const [original, setOriginal] = useState("")
    const [answer, setAnswer] = useState("")
    const [fileType, setFileType] = useState(UploadFileType[0])
    const [metaData, setMetaData] = useState({
        ai:[],
        max:"",
        allowedPrompting:"",
        words:"",
        testOverview:"",
        submitterMemo:"",
    })
    const [question, setQuestion] = useState({
        step1:{label:"1단계", title:"", options:[]},
        step2:{label:"2단계", title:"", options:[]},
        step3:{label:"3단계", title:"", options:[]}
    })

    return(
        <Context.Provider value={{file, setFile, original, setOriginal, answer, setAnswer,
            fileType, setFileType, metaData, setMetaData, question, setQuestion,}}>
            <SubmitMetaData/>
            <SubmitOptions/>
        </Context.Provider>
    )
}