import Store from "./Store";
import {fixed} from "./DummyData";
import {test} from "./ForShort";

export default function StoreExam(metaData, problems){
    let key = ""
    Object.values(fixed).forEach(it=>{key = key+it+"<br/>"})
    key+=test
    const exam = {
        pass: metaData.pass,
        max: metaData.max,
        submitterMemo: metaData.submitterMemo,
        testOverview: metaData.testOverview,
        testDate:"YY.MM.DD.DOW",
        testStartTime:"14:00",
        testEndTime:"14:30",
        applicationCategory:"정시",
        year:"24",
        round:"10",
        testSubject:"AITe 번역 전문가",
        testGrade:"전문1급",
        examName:"시험명 표시 영역",
        detailedDescription:"",
        departureLanguage:"한국어",
        arrivalLanguage:"English(US)",
        purpose:"응시용",
        problems: problems,
    }
    Store(key, JSON.stringify(exam))
}