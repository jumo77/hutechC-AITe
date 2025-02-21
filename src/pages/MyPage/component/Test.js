import {ListTable} from "./ListTable";
import {testList} from "./const";

export const Test = () =>
    <ListTable data={testList.map(it => ({
        "번호": it["번호"],
        "시험일<br/>시험시간": it["시험일<br/>시험시간"],
        "접수 구분<br/>차수": it["접수 구분<br/>차수"],
        "시험 종목<br/>시험 등급": it["시험 종목<br/>시험 등급"],
        "검정과목<br/>분야 ∙ 영역": it["검정과목<br/>분야 ∙ 영역"],
        "시험명": it["시험명"],
        "출발어<br/>도착어": it["출발어<br/>도착어"],
        "연습용": "연습하기",
        "시험상태": it["시험상태"],
    }))}/>