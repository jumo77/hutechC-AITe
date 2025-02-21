import {fixed} from "../../../../../component/const/DummyData";
import {TextInput} from "../../../../../component/input/TextInput";
import {useContext} from "react";
import {TransContext} from "./TransContext";

export default function MetaData() {

    const {metaData,setMetaData,applicant,score} = useContext(TransContext)

    const variable = {
        header:[
            "응시자","번역기","총점","현재 점수<br/>합격 점수","현재 시험 결과"
        ],
    }
    
    const onChange = (value, toChange)=>{
        setMetaData(prev=>({
           ...prev,
           [toChange]:value 
        }))
    }

    return(<>
        <h2>번역 자격증 채점하기</h2>
        <p style={{marginTop: "30px"}}>시험 정보</p>
        <table>
            <thead>
            <tr>
                {Object.keys(fixed)?.map((it, index) => (
                    <th key={it + index.toString()} dangerouslySetInnerHTML={{__html: it}}/>
                ))}
            </tr>
            </thead>
            <tbody>
            <tr>
                {Object.values(fixed)?.map((it, index) => (
                    <td key={it + index.toString()} dangerouslySetInnerHTML={{__html: it}}/>
                ))}
            </tr>
            </tbody>
        </table>
        <table>
            <thead>
            <tr>
                {variable.header?.map((it, index) => <th style={index > 1 ? {width: "150px"} : null}
                        key={it + index.toString()} dangerouslySetInnerHTML={{__html:it}}/>)}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td dangerouslySetInnerHTML={{__html:applicant.name+"<br/>"+applicant.email}}/>
                <td>{applicant.translator}</td>
                <td>{score.max}</td>
                <td dangerouslySetInnerHTML={{__html:score.pass+"<br/>"+score.applicant}}/>
                <td>{score.pass<score.applicant?"합격":"불합격"}</td>
            </tr>
            </tbody>
        </table>
        <table>
            <thead>
            <tr>
                <th>시험 개요</th>
                <th>출제자 메모</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><TextInput value={metaData} toChange="testOverview" onChange={onChange}/></td>
                <td><TextInput value={metaData} toChange="submitterMemo" onChange={onChange}/></td>
            </tr>
            </tbody>
        </table>

    </>)
}