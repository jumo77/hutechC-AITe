import {useState} from "react";
import {TransContext} from "./component/TransContext";
import SubmitMetaData from "./component/SubmitMetaData";
import SubmitTrans from "./component/SubmitTrans";
import "./component/Style.css"
import {UploadFileType} from "../../../component/const/ForTrans";

export default function CreateTrans(){
    const [file, setFile] = useState(null)
    const [original, setOriginal] = useState("")
    const [answer, setAnswer] = useState("")
    const [fileType, setFileType] = useState(UploadFileType[0])
    const [metaData, setMetaData] = useState({
        translator:[],
        max:0,
        pass:0,
        checkStart:0,
        checkEnd:0,
        testOverview:"",
        submitterMemo:"",
    })

    return(
        <>

        <TransContext.Provider value={{file, setFile, metaData, setMetaData, original, setOriginal,answer, setAnswer, fileType, setFileType}}>
            <SubmitMetaData/>
            <SubmitTrans/>
        </TransContext.Provider>
        </>
    )
}