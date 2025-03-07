import {TextInput} from "../../../../../../component/input/TextInput";
import {useContext, useEffect} from "react";
import {fixed} from "../../../../../../component/const/DummyData";
import {Context} from "./Context";
import CheckboxInput from "../../../../../../component/input/CheckboxInput";
import {Translator} from "../../../../../../component/const/ForTrans";
import "./Style.css"
import TestMetaData from "../../../../../../component/metadata/TestMetaData";
import {AboutTest} from "../../../component/AboutTest";

export default function SubmitMetaData() {

    const {metaData, setMetaData} = useContext(Context)

    const onChange = (value, toChange) => {
        console.log(value)
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
        header: ["AI 번역기 (최대 4개 선택)", "총점", "합격 점수", "관리자 확인 점수"],
        testOverview: {toChange: "testOverview", placeholder: "입력하세요"},
        submitterMemo: {toChange: "submitterMemo", placeholder: "입력하세요"}
    }

    return (<>
        <AboutTest subTitle={"시험 정보"} title={'시험 출제하기'} metaData={metaData} onChange={onChange}>
        <table>
            <thead>
            <tr>
                {variable.header?.map((it, index) => (
                    <th style={index > 0 && index !==3? {width: "100px"} : null} key={it + index.toString()}>{it}</th>))}
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
                <td><input value={metaData.checkStart} className="input" placeholder={'입력하세요'}
                           onChange={e=>
                    onChange(isNaN(parseInt(e.target.value))?'':parseInt(e.target.value),"checkStart")}/>
                    ~
                    <input value={metaData.checkEnd} className="input" placeholder={'입력하세요'}
                           onChange={e =>
                        onChange(isNaN(parseInt(e.target.value))?'':parseInt(e.target.value),"checkEnd")}/>
                </td>
            </tr>
            </tbody>
        </table>
        </AboutTest>
    </>)
}
