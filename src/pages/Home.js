import {Link} from "react-router-dom";
import {Urls} from "../component/const/Urls";

export default function Home(){
    return(
        <>
            <Link to={Urls.index+Urls.create+Urls.short}>단답형 출제하기</Link>
            <Link to={Urls.index+Urls.test+Urls.short}>단답형 시험보기</Link>
            <Link to={Urls.index+Urls.grade+Urls.short}>단답형 채점하기</Link>
            <Link to={Urls.index+Urls.create+Urls.trans}>번역 출제하기</Link>
            <Link to={Urls.index+Urls.test+Urls.trans}>번역 시험보기</Link>
            <Link to={Urls.index+Urls.grade+Urls.trans}>번역 채점하기</Link>
            <Link to={Urls.createPrompt}>GPT 출제하기</Link>
            <Link to={Urls.testPrompt}>GPT 시험보기</Link>
        </>
    )
}