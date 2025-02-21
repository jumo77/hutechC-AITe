import {Link} from "react-router-dom";
import {Urls} from "../component/const/Urls";

export default function Home(){
    return(
        <>
            <Link to={Urls.create+Urls.short}>단답형 출제하기</Link>
            <Link to={Urls.test+Urls.short}>단답형 시험보기</Link>
            <Link to={Urls.grade+Urls.short}>단답형 채점하기</Link>
            <Link to={Urls.create+Urls.trans}>번역 출제하기</Link>
            <Link to={Urls.test+Urls.trans}>번역 시험보기</Link>
            <Link to={Urls.grade+Urls.trans}>번역 채점하기</Link>
            <Link to={Urls.create+Urls.prompt}>GPT 출제하기</Link>
            <Link to={Urls.test+Urls.prompt}>GPT 시험보기</Link>
            <Link to={Urls.grade+Urls.prompt}>GPT 채점하기</Link>
        </>
    )
}