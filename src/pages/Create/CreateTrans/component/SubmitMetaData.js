import {TextInput} from "../../../../component/input/TextInput";
import {useContext, useEffect} from "react";
import {fixed} from "../../../../component/const/DummyData";
import {TransContext} from "./TransContext";
import CheckboxInput from "../../../../component/input/CheckboxInput";
import {Translator} from "../../../../component/const/ForTrans";

export default function SubmitMetaData() {

    const {metaData, setMetaData} = useContext(TransContext)

    const onChange = (value, toChange) => {
        setMetaData(prev => ({
            ...prev,
            [toChange]: value
        }))
    }

    const changeTranslators = (value, toChange, adding) => {
        let trans = [...metaData.translator]
        const translator = "translator"
        if (adding) {
            if (trans.length === 4) alert("최대 4개만 선택 가능합니다.")
            else if (!Array.isArray(trans)) onChange([value], translator)
            else {
                trans.push(value)
                onChange(trans, translator)
            }
        } else onChange(trans.filter(it => it !== value), translator)
    }

    useEffect(() => {
    }, [metaData]);

    const variable = {
        header: ["AI 번역기 (최대 4개 선택)", "총점", "합격 점수"],
        testOverview: {toChange: "testOverview", placeholder: "입력하세요"},
        submitterMemo: {toChange: "submitterMemo", placeholder: "입력하세요"}
    }

    return (<>
        <h2>번역 출제하기</h2>
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
                {variable.header?.map((it, index) => (
                    <th style={index > 0 ? {width: "100px"} : null} key={it + index.toString()}>{it}</th>))}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    {Translator.map((it, index) =>
                        (<CheckboxInput key={index.toString() + it} index={index} metaData={metaData}
                                        toChange="translator" label={it} onChange={changeTranslators}/>))}
                </td>
                <td><TextInput value={metaData} type="number" toChange="max" onChange={onChange}/></td>
                <td><TextInput value={metaData} type="number" toChange="pass" onChange={onChange}/></td>
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
