import SubmitMetaData from "./component/SubmitMetaData";
import SubmitQuestion from "./component/SubmitQuestion";
import SubmitSave from "./component/SubmitSave";
import {useEffect, useState} from "react";
import {Context} from "./component/Context";
import SearchResult from "./component/SearchResult";
import SearchExam from "../../../../../component/const/SearchExam";
import StoreExam from "../../../../../component/const/StoreExam";
import {Activate} from "../../../../../component/const/ForCreate";

export default function CreateShort() {

    const [metaData, setMetaData] = useState({
        testOverview:"",
        submitterMemo:"",
        pass:0,
        max:0,
        submitType: 0,
        totalDifficult: 0,
        totalMiddle: 0,
        totalEasy: 0,
    })
    const [value, setValue] = useState("객관식")
    const [problems, setProblems] = useState([])
    const [searching, setSearching] = useState("")
    const [result, setResult] = useState([])
    const [clicked, setClicked] = useState(0)

    useEffect(() => {
        StoreExam(metaData, problems)
    }, [clicked]);

    useEffect(() => {
        problems.length>1 && setMetaData(problems.reduce((acc, problem) => {
            return acc + problem.score}, 0))
    }, [problems]);

    const search = () => {
        if (searching==="") alert("검색어를 입력해주세요.")
        else {
            Activate("searchResult")
            setResult(SearchExam(searching))
        }
    }

    const hideShort =()=>{
        document.getElementById("submitSave").classList.remove("hidden")
        document.getElementById("submitShort").classList.add("hidden")
    }

    const hideSave =()=>{
        document.getElementById("submitSave").classList.add("hidden")
        document.getElementById("submitShort").classList.remove("hidden")
    }

    return (
        <>
            <Context.Provider value={{searching, setSearching, search, hideShort, hideSave,
                value, setValue, problems, setProblems, metaData, setMetaData, result, setResult, clicked, setClicked,}}>
            <SearchResult/>
            <SubmitMetaData/>
            <SubmitQuestion/>
            <SubmitSave/>
            </Context.Provider>
        </>
    )
}