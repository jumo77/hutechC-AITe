import {fixed} from "../../../../component/const/DummyData";
import TopBar from "../../../../component/ui/TopBar";
import styles from "../../Create/Create.css";
import {DummyProblem, options} from "../../../../component/const/ForShort";
import {useLocation} from "react-router-dom";
import Load from "../../../../component/const/Load";
import {useEffect, useState} from "react";
import {TextInput} from "../../../../component/input/TextInput";
import SubmitButton from "./component/SubmitButton";

export default function TestShort(){

    const [answers, setAnswers] = useState([])

    const {state} = useLocation()
    const [problems, setProblems] = useState([])

    useEffect(() => {
        state?.key ? setProblems(Load(state.key)) : setProblems(DummyProblem)
    }, []);

    useEffect(() => {
        setAnswers(Array(problems.length).fill(""))
    }, [problems]);

    const onChange = (value, index) => {
        const list=[...answers]
        list[index]=value
        setAnswers(list)
    }

    return (
        <>
            <table>
                <thead>
                <tr>{Object.keys(fixed)?.map((it, index)=><th key={it+index.toString()} dangerouslySetInnerHTML={{__html: it}}/> )}</tr>
                </thead>
                <tbody>
                <tr>{Object.values(fixed)?.map((it,index)=><td key={it+index.toString()} dangerouslySetInnerHTML={{__html:it}}/>)}</tr>
                </tbody>
            </table>
            <TopBar title="출제 내용"/>
            {problems?.map((it, index) => (
                <section key={it.type + index.toString()} className={"problemSection"}>
                    <div className="problemContainer borderRight">
                        <div style={{display:"flex"}}>
                            <span style={styles.index}>{String(index+1).padStart(2, "0").padEnd(3, ".")+it.title}</span>
                        </div>
                        {it.selections?.map((i, ind) => (i!==""?
                            <div key={String(index).padStart(2, "0").padEnd(3, ".") + ind.toString()}
                                 style={{marginLeft: "20px", display:"flex"}}>
                                <span style={styles.index}>{[options[0].key, options[3].key,options[4].key]
                                    .includes(it.type) && (ind+1)+". "+i}</span>
                            </div>:null
                        ))}
                    </div>
                    <div className="infoContainer">
                        {[options[0].key, options[1].key, options[2].key].includes(it.type) && <>
                            <div>
                            <span>난이도:</span>
                            <span style={{fontWeight: "bold"}}>{it.difficulty}</span>
                            </div>
                            <div>
                            <span>점수:</span>
                            <span style={{fontWeight: "bold"}}>{it.score}</span>
                            </div>
                        </>}
                        {[options[0].key, options[3].key, options[4].key].includes(it.type) && <div className="DSContainer">
                            <fieldset>
                                {it.selections?.map((i, ind) => (<label>
                                        <input type="radio" checked={answers[index]===i} key={i+ind.toString()}
                                               onChange={() => onChange?.(i, index)}/>
                                        {i}
                                    </label>
                                ))}
                        </fieldset>
                        </div>}
                        {it.type === options[2].key&& <>
                            <span>오타 {it.allowTypo? "허용":"조심"}</span>
                            <span>띄어쓰기 {it.allowSpacingTypo? "상관 없음":"조심"}</span>
                            <TextInput value={answers} toChange={index} onChange={onChange}/>
                        </>}
                    </div>
                </section>
            ))}
            <div className="saveContainer">

            <SubmitButton answers={answers}/>
            </div>
        </>
    )
}