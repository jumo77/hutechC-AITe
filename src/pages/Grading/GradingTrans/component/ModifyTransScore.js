import {useState} from "react";
import SplitButton from "./IconButton/SplitButton";
import TextField from "../../../../component/input/TextField";

export default function ModifyTransScore() {

    const [splited, setSplited] = useState(false)
    const fixed = {
        original: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."+
            "Where does it come from?" +
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n"
            +
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n" +
            "Where can I get some?" +
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        translator: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."+
            "Where does it come from?" +
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n"
            +
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n" +
            "Where can I get some?" +
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        applicant: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."+
            "Where does it come from?" +
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n"
            +
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n" +
            "Where can I get some?" +
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    }
    const [view, setView] = useState({
        original: {
            label: "원문",
            view: true,
            content: fixed.original,
            each: fixed.original.split(/.|!|\?/),
            disabled: true,
            width: "300px",
        },
        translator: {
            label: "번역기",
            view: true,
            content: fixed.translator,
            each: fixed.translator.split(/.|!|\?/),
            disabled: true,
            width: "300px",
        },
        example1: {label: "정답 예시 1", view: true, content: "", each: [], width:"300px"},
        example2: {label: "정답 예시 2", view: false, content: "", each: [], width:"300px"},
        applicant: {
            label: "응시생 답안지",
            view: true,
            content: fixed.applicant,
            each: fixed.applicant.split(/.|!|\?/),
            disabled: true,
            width: "300px",
        },
        eachMaxScore: {label: "개별 총점", view: false, content: 0,each: Array(fixed.original.split(/.|!|\?/).length).fill(0), width:"100px"},
        eachApplicantScore: {label: "개별 점수", view: false, content: 0,each: Array(fixed.original.split(/.|!|\?/).length).fill(0), width:"100px"},
        feedback: {label: "피드백", view: false, content: "", each: Array(fixed.original.split(/.|!|\?/).length).fill(""), width:"300px"},
    })

    const onSelect = (toChange) => {
        console.log(toChange)
        const v = {...view}
        v[toChange].view = !view[toChange].view
        setView(v)
    }

    const onChangeContent = (value, toChange) => {
        const v = {...view}
        v[toChange].content = value
        setView(v)
    }

    const onChangeEach = (value, toChange, index) => {
        const v = {...view}
        v[toChange].content[index] = value
        setView(v)
    }

    return (<>
        <div className="bar">
            <div>
                <span>항목 표시/숨기기</span>
                {Object.keys(view).map((it, index) => (
                    index === 4 ? null : !(index > 3 && !splited) ? <label>
                            <input type="checkbox" key={view[it].label + index.toString()} className="checkbox"
                                   checked={view[it].view} onChange={() => {
                                onSelect(it)
                            }}/>{view[it].label}</label>
                        : null))}
            </div>
            <SplitButton setSplit={setSplited}/>
        </div>
        <div className="tableHolder">
            {Object.keys(view).map((it, index) => (
                <TextField toChange={it} view={view} split={splited} key={index.toString() + it}
                           onChangeContent={onChangeContent} onChangeEach={onChangeEach}/>
            ))}
        </div>
    </>)
}