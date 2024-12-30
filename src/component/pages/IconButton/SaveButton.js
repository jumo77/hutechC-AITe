import {useNavigate} from "react-router-dom";
import {URL} from "../../const/ForRoute";
import {answers, difficulty} from "../../const/ForShort";

export default function SaveButton({problems}){

    const nav = useNavigate()

    const onClick=()=>{
        let i = -1
        let problem = ""
        let valid = true
        problems.forEach((it, index)=>{
            if (it.score !== undefined && (it.score===null || it.score<0)){
                i = index
                valid=false
                problem= "점수"
                return true
            }
            if (it.difficulty!==undefined && it.difficulty === difficulty[0]) {
                i = index
                valid=false
                problem= "난이도"
                return true
            }
            if (it.answer!==undefined && it.answer === answers.mulCho[0]){
                i = index
                valid=false
                problem= "정답"
                return true
            }
            if (it.answers!==undefined && it.answers.map(i => i==="")){
                i = index
                valid=false
                problem= "정답"
                return true
            }
            return false
        })
        if(!valid) alert((i + 1) + '번 문제의 '+problem+'값이 설정되지 않았습니다. 확인해주세요.')
        else {
        console.log("problems: ",problems)
        nav(URL.submit.saved, {state:{problems: problems}})
        }
    }

    return(
        <button onClick={onClick}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.2644 16.32C14.0024 16.3193 13.7431 16.2688 13.5015 16.1713C13.26 16.0739 13.0409 15.9314 12.857 15.7522L8.50074 11.5947L4.14449 15.7549C3.86472 16.0274 3.50592 16.2127 3.11487 16.2865C2.72382 16.3604 2.31865 16.3195 1.9522 16.169C1.5821 16.0261 1.2655 15.7794 1.04373 15.4611C0.821959 15.1428 0.70533 14.7677 0.709072 14.3847V3.4C0.709072 2.49826 1.08221 1.63346 1.7464 0.995837C2.41059 0.358213 3.31143 0 4.25074 0L12.7507 0C13.2158 0 13.6764 0.0879436 14.1061 0.25881C14.5358 0.429676 14.9262 0.680118 15.2551 0.995837C15.584 1.31156 15.8448 1.68637 16.0228 2.09888C16.2008 2.51138 16.2924 2.95351 16.2924 3.4V14.3847C16.2964 14.7673 16.1802 15.1422 15.9589 15.4605C15.7377 15.7788 15.4217 16.0257 15.0521 16.169C14.8026 16.2692 14.5349 16.3205 14.2644 16.32ZM4.25074 1.36C3.68715 1.36 3.14665 1.57493 2.74814 1.9575C2.34962 2.34008 2.12574 2.85896 2.12574 3.4V14.3847C2.12548 14.498 2.16021 14.6089 2.22554 14.7032C2.29087 14.7976 2.38387 14.8713 2.49279 14.9149C2.60171 14.9586 2.72166 14.9703 2.8375 14.9485C2.95334 14.9268 3.05986 14.8726 3.14361 14.7927L8.00491 10.1544C8.13762 10.0278 8.31715 9.9567 8.50428 9.9567C8.69141 9.9567 8.87094 10.0278 9.00366 10.1544L13.8593 14.7914C13.943 14.8712 14.0496 14.9254 14.1654 14.9472C14.2812 14.9689 14.4012 14.9572 14.5101 14.9136C14.619 14.8699 14.712 14.7963 14.7774 14.7019C14.8427 14.6075 14.8774 14.4967 14.8772 14.3834V3.4C14.8772 2.85896 14.6533 2.34008 14.2548 1.9575C13.8562 1.57493 13.3157 1.36 12.7522 1.36H4.25074Z"
                    fill="white"/>
            </svg>
            저장
        </button>
    )
}