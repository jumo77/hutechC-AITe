import TopBar from "../../../../../../component/ui/TopBar";
import {useContext, useState} from "react";
import {Context} from "./Context";
import {boxType} from "./const";
import "../../../Create.css"

export default function SubmitOptions() {

    const {question, setQuestion} = useContext(Context)

    const [type, setType] = useState({
        step1: boxType[0].key,
        step2: boxType[0].key,
        step3: boxType[0].key,
    })
    const [count, setCount] = useState({
        step1: -1,
        step2: -1,
        step3: -1,
    })

    const add = (key) => {
        console.log(type[key])
        let toPush = {
            title: "",
            type: type[key]
        };
        switch (type[key]) {
            case boxType[0].key:
                alert("형태를 선택해주세요!")
                return
            case boxType[1].key:
            case boxType[2].key:
                if (count[key]===-1){
                    alert("갯수를 선택해주세요!")
                    return;
                }else {
                const selection = []
                selection.push("")
                selection.push("")
                for (let i = 0; i < count[key]; i++) {
                    selection.push("")
                }
                toPush = {
                    ...toPush,
                    selection: selection,
                }}
                break
            case boxType[3].key:
                toPush = {
                    ...toPush,
                    input:""
                }
            case boxType[4].key:
                toPush = {
                    ...toPush,
                    value: ""
                }
                break
            default:
                alert("버그가 난 것 같습니다. 개발자에게 문의해주세요.")
                return
        }
        console.log(toPush)
        const list = {...question}
        list[key].options.push(toPush)
        setQuestion(list)
    }

    const onChangeTitle = (value, step) => {
        const list = {...question}
        list[step].title = value
        setQuestion(list)
    }

    const onChangeSubject = (value, step, subject) => {
        const list = {...question}
        list[step].options[subject].title = value
        setQuestion(list)
    }

    const onChangeExample = (value, step, subject, selection) => {
        const list = {...question}
        list[step].options[subject].selection[selection] = value
        setQuestion(list)
    }

    const onChangeValue = (value, step, subject) => {
        const list = {...question}
        list[step].options[subject].value = value
        setQuestion(list)
    }

    return Object.keys(question).map(key => (<>
        <TopBar key={key} step={key} title={question[key].label} value={type}
                setValue={setType} second={count} setSecond={setCount} add={add}/>
        <div className="questionHolder">
            <input placeholder="단계 설명글을 입력해주세요." value={question[key].title}
                onChange={(e) => onChangeTitle(e.target.value, key)}/>
        </div>
        {question[key].options?.map((it, subject) => (<section key={key + "section"}>
            <div className="titleHolder">
                <input placeholder="주제 입력" value={it.title} style={{width: "calc(100% - 20px"}}
                    onChange={e => onChangeSubject(e.target.value, key, subject)}/>
            </div>
            <div className="contentsHolder">
                {it.hasOwnProperty('selection') ? it.selection.map((item, selection) => (<>
                        <img src={it.type === boxType[1].key ? "/images/radio.svg" : "/images/select.svg"}/>
                        <input placeholder="보기 입력" value={item} onChange={e =>
                            onChangeExample(e.target.value, key, subject, selection)}
                               style={{flexGrow: "0", width: "120px"}}/>
                    </>)) :
                    it.hasOwnProperty('input')?
                        <input value={it.value} placeholder={'모범 문장 입력'} onChange={e =>
                            onChangeValue(e.target.value, key, subject)}/>:
                    <textarea value={it.value} placeholder={'예시 문단 입력'} onChange={e =>
                        onChangeValue(e.target.value, key, subject)}/> }
            </div>
        </section>))}
    </>))
}
