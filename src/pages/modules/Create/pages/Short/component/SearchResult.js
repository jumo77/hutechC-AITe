import {useContext} from "react";
import {Context} from "./Context";
import Load from "../../../../../../component/const/Load";
import {Deactivate} from "../../../../../../component/const/ForCreate";

export default function SearchResult(){

    const {result, setProblems} = useContext(Context)

    const onClick = (key) => {
        setProblems(JSON.parse(Load(key)))
    }

    return(
        <div className="searchWindow" id="searchResult" onClick={()=>Deactivate("searchResult")}>
            <div className="resultFrame">
                {result?.length>0?result?.map(it =>(<div onClick={()=>{onClick(it.key)}}>
                    <span>{it.submitterMemo}</span>
                    <span>{it.applicationCategory}</span>
                    <span>{it.year}</span>
                    <span>{it.round}</span>
                    <span>{it.testSubject}</span>
                    <span>{it.testGrade}</span>
                    <span>{it.examName}</span>
                    <span>{it.detailedDescription}</span>
                    <span>{it.departureLanguage}</span>
                    <span>{it.arrivalLanguage}</span>
                        <span>{it.purpose}</span>
                </div>
                )):<span>검색 결과가 없습니다.</span>}
            </div>
        </div>
    )
}