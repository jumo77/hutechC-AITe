import {TextInput} from "../../../../../../component/input/TextInput";
import {useContext, useEffect} from "react";
import CheckboxInput from "../../../../../../component/input/CheckboxInput";
import {Context} from "./Context";
import {AboutTest} from "../../../component/AboutTest";
import {AI} from "./const";

export default function SubmitMetaData() {

    const {metaData, setMetaData} = useContext(Context)

    const onChange = (value, toChange) => {
        setMetaData(prev => ({
            ...prev,
            [toChange]: value
        }))
    }

    const changeAi = (value, toChange, adding) => {
        const trans = [...metaData.ai]
        const ai = "ai"
        if (adding) {
            if (trans.length === 4) alert("최대 4개만 선택 가능합니다.")
            else if (!Array.isArray(trans)) onChange([value], ai)
            else {
                trans.push(value)
                onChange(trans, ai)
            }
        } else onChange(trans.filter(it => it !== value), ai)
    }

    useEffect(() => {
    }, [metaData]);

    const variable = {
        header: ["AI 모델 (최대 4개 선택)", '검색 허용 횟수', "총점", "합격 점수", "관리자 확인 점수"],
    }

    return (<AboutTest title={'프롬프트 출제하기'} subTitle={'시험 정보'} metaData={metaData} onChange={onChange}>
        <table>
            <thead>
            <tr>
                {variable.header?.map((it, index) => (
                    <th style={index > 0 && index !==4? {width: "100px"} : null} key={it + index.toString()}>{it}</th>))}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    {AI.map((it, index) =>
                        (<CheckboxInput key={index.toString() + it} index={index} metaData={metaData}
                                        toChange="translator" label={it} onChange={changeAi}/>))}
                </td>
                <td><TextInput value={metaData} type="number" toChange="allowedPrompting" onChange={onChange}/></td>
                <td><TextInput value={metaData} type="number" toChange="max" onChange={onChange}/></td>
                <td><TextInput value={metaData} type="number" toChange="pass" onChange={onChange}/></td>
                <td><input value={metaData.checkStart} className="input" onChange={e=>
                    onChange(isNaN(parseInt(e.target.value))?'':parseInt(e.target.value),"checkStart")}/>
                    ~
                    <input value={metaData.checkEnd} className="input" onChange={e =>
                        onChange(isNaN(parseInt(e.target.value))?'':parseInt(e.target.value),"checkEnd")}/>
                </td>
            </tr>
            </tbody>
        </table>
    </AboutTest>)
}
