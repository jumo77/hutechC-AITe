import {TextInput} from "../../../../component/input/TextInput";
import RadioInput from "../../../../component/input/RadioInput";
import TextSearch from "../../../../component/input/TextSearch";
import {useContext} from "react";
import {SearchContext} from "./SearchContext";
import {fixed} from "../../../../component/const/DummyData";
import {Text} from "../../../../component/input/Text";

export default function SubmitMetaData() {

    const {metaData, setMetaData} = useContext(SearchContext)

    const onChange = (value, toChange) => {
        setMetaData(prev => ({
            ...prev,
            [toChange]: value
        }))
    }

    const variable = {
        header: ["만점", "합격 점수", "출제 화면"],
        testOverview: {toChange: "testOverview", placeholder: "입력하세요"},
        submitterMemo: {toChange: "submitterMemo", placeholder: "입력하세요"}
    }

    return (<>
        <h2>일반 시험 출제하기</h2>
        <p style={{marginTop: "30px"}}>시험 정보</p>
        <table>
            <thead>
            <tr>
                {fixed.header?.map((it, index) => (
                    <th key={it + index.toString()} dangerouslySetInnerHTML={{__html: it}}/>
                ))}
            </tr>
            </thead>
            <tbody>
            <tr>
                {fixed.metaData?.map((it, index) => (
                    <td key={it + index.toString()} dangerouslySetInnerHTML={{__html: it}}/>
                ))}
            </tr>
            </tbody>
        </table>
        <table>
            <thead>
            <tr>
                {variable.header?.map((it, index) => (<th key={it + index.toString()}
                                                          className={index < 2 ? "width100" : null}>{it}</th>))}
                <th>지난 문제 불러오기</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><Text value={metaData.max}/></td>
                <td><TextInput value={metaData} type="number" toChange="pass" onChange={onChange}/></td>
                <td><RadioInput value={metaData} children={["기본 문제 제공", "직접 출제"]} toChange="submitType"
                                onChange={onChange}/></td>
                <td><TextSearch/></td>
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
