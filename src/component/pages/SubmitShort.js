import TopBar from "../ui/TopBar";
import {useEffect, useState} from "react";
import styles from "./Submit.modules.css"
import {answers, difficulty, options} from "../const/ForShort";
import TemporallySaveButton from "./IconButton/TemporallySaveButton";
import SaveButton from "./IconButton/SaveButton";
import {useLocation} from "react-router-dom";

export default function SubmitShort(){

    const [value, setValue] = useState("객관식")
    const [problems, setProblems] = useState([])

    const {problem} = useLocation().state

    useEffect(() => {
        console.log(problem)
        if(problem)setProblems(problem)
    }, []);

    useEffect(() => {
        console.log(problems)
    }, [problems]);

    const add = ()=>{

        if (value === options[0].label) setProblems((prevState)=>[
            ...prevState, {
                title: "",
                selections: ["","","",""],
                answer: "정답",
                type: options.filter(it=>it.label===value)[0].key,
                difficulty: "난이도",
                score: ""
            }
        ])

        else if (value === options[1].label) setProblems((prevState)=>[
            ...prevState, {
                title: "",
                selections: ["",""],
                type: options.filter(it=>it.label===value)[0].key,
                answer: -1,
                difficulty: "난이도",
                score: ""
            }
        ])
        else if (value === options[2].label) setProblems((prevState)=>[
            ...prevState, {
                title: "",
                answers: ["","","",""],
                difficulty: "난이도",
                score: "",
                type: options.filter(it=>it.label===value)[0].key,
                allowTypo: false,
                allowSpacingTypo: false,
            }
        ])
        else if (value === options[3].label) setProblems((prevState)=>[
            ...prevState, {
                title: "",
                selections: ["","","",""],
                type: options.filter(it=>it.label===value)[0].key,
            }
        ])
        else if (value === options[4].label) setProblems((prevState)=>[
            ...prevState, {
                title: "",
                selections: ["","","",""],
                type: options.filter(it=>it.label===value)[0].key,
            }
        ])
    }

    const handleChangeTitle = (title, index)=>{
        setProblems(problems.map((it, i)=>{
            if (i === index) return{...it, title: title};
            else return it;
        }))
    }

    const handleChangeSelection = (selection, index, ind)=>{
        setProblems(problems.map((it, i)=>{
            if(i===index) return{...it, selections: it.selections.map((its, inde)=>{
                if (inde === ind) return selection
                else return its
                })}
            else return it
        }))
    }

    const handleChangeScore = (score, index) =>{
        setProblems(problems.map((it, i)=>{
            if (i === index) return{...it, score: parseInt(score)};
            else return it;
        }))
    }

    const handleChangeDifficulty = (difficulty, index) =>{
        setProblems(problems.map((it, i)=>{
            if (i === index) return{...it, difficulty: difficulty};
            else return it;
        }))
    }

    const handleChangeAnswer = (answer, index) =>{
        setProblems(problems.map((it, i)=>{
            if (i === index) return{...it, answer: answer};
            else return it;
        }))
    }

    const handleChangeAnswers = (answer, index, ind) =>{
        setProblems(problems.map((it, i)=>{
            if(i===index) return{...it, answers: it.answers.map((its, inde)=>{
                    if (inde === ind) return answer
                    else return its
                })}
            else return it
        }))
    }

    const handleChangeAllowTypo = (allow, index) =>{
        setProblems(problems.map((it, i)=>{
            if (i === index) return{...it, allowTypo: allow};
            else return it;
        }))
    }

    const handleChangeAllowSpacingTypo = (allow, index) =>{
        setProblems(problems.map((it, i)=>{
            if (i === index) return{...it, allowSpacingTypo: allow};
            else return it;
        }))
    }

    return(
        <main>
            <TopBar value={value} setValue={setValue} title="단답형" add={add}/>
            {problems.map((it, index) => (
                <section key={it.type + index.toString()} className={styles.index}>
                    <div className="problemContainer">
                        <div style={{display:"flex"}}>
                            <span style={styles.index}>{String(index+1).padStart(2, "0").padEnd(3, ".")}</span>
                            <input placeholder="문제를 입력하는 곳입니다." value={problems[index].title}
                                   onChange={(e) => {
                                       handleChangeTitle(e.target.value, index)
                                   }}/>
                        </div>
                        {it.selections?.map((i, ind) => (
                            <div key={String(index).padStart(2, "0").padEnd(3, ".") + ind.toString()}
                                 style={{marginLeft: "20px", display:"flex"}}>
                                <span style={styles.index}>{it.type === options[0].key? ind+1:
                                    it.type===options[3].key? 'O':
                                        it.type===options[4].key? 'ㅁ':
                                            ind === 0? "O":"X"}</span>
                                <input placeholder={it.type === options[1].key? "보기를 입력하는 곳입니다.":
                                    [options[0].key, options[3].key, options[4].key].includes(it.type) ?"보기" + (ind+1) + "번":
                                        null} value={i}
                                       onChange={(e) => {
                                           handleChangeSelection(e.target.value, index, ind)}}/>
                            </div>
                        ))}
                        {it.answers?.map((i, ind) => (
                            <div key={String(index).padStart(2, "0").padEnd(3, ".") + ind.toString()}
                                 style={{marginLeft: "20px", display:"flex"}}>
                            <span style={styles.index}>정답</span>
                                <input placeholder={"정답을 입력하는 곳입니다."} value={problems[index].answers[i]}
                                       onChange={(e) => {
                                           handleChangeAnswers(e.target.value, index, ind)
                                       }}/>
                            </div>
                        ))}
                    </div>
                    <div className="infoContainer">
                        {[options[0].key, options[1].key, options[2].key].includes(it.type) && <div className="DSContainer">
                            <select className="margins" value={problems[index].difficulty} style={{width: "90px"}}
                                onChange={(e) => {
                                    handleChangeDifficulty(e.target.value, index)}}>
                                {difficulty.map((option, i) => (<option key={option} disabled={i===0} selected={i===0} hidden={i===0}>{option}</option>))}
                            </select>
                                <input placeholder="점수" value={it.score} type="number" min="1" onChange={(e) => {
                                    handleChangeScore(e.target.value, index)
                                }} className="margins"/></div>
                        }
                        {[options[0].key, options[1].key].includes(it.type) && <div className="DSContainer">
                            <select className="margins" value={problems[index].answer}
                            onChange={(e)=>{handleChangeAnswer(e.target.value, index)}}>
                                {answers[it.type].map((option, i) =>(<option key={option} disabled={i===0} selected={i===0} hidden={i===0}>{option}</option>))}
                        </select></div>}
                        {it.type === options[2].key&& <><div className="li">
                            <input type="checkbox" checked={it.allowTypo} onChange={(e)=>{
                            handleChangeAllowTypo(e.target.value, index)}} className="checkbox"/><span>오타 허용</span>
                        </div><div className="li">
                        <input type="checkbox" checked={it.allowSpacingTypo} onChange={(e)=>{
                            handleChangeAllowSpacingTypo(e.target.value, index)}} className="checkbox"/><span>띄어쓰기 상관 없음</span>
                        </div>
                        </>}
                    </div>
                </section>
            ))}
            <div className="saveContainer">
                <TemporallySaveButton/>
                <SaveButton problems={problems}/>
            </div>
        </main>
    )
}