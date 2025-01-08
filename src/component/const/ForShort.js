export const options = [
    {label: "객관식", key:"mulCho"},
    {label: "OX", key:"ox"},
    {label: "단답형", key:"short"},
    {label: "설문(단일선택)", key:"surveySingle"},
    {label: "설문(다중선택)", key:"surveyMulti"},
]

export const answers = {
    mulCho:["정답",1,2,3,4],
    ox:["정답","O","X"],
}

export const difficulty = ["난이도","상","중","하"]

export const test = "test"

export const totalScore = (problems) =>{
    return problems.reduce((accumulator, currentObject) => {
        return accumulator + currentObject.score;}, 0)
}

export const DummyProblem = [
    {
        title: "강준모의 이름은?",
        selections: ["강준모","강주노","강줌모","장준모"],
        answer: "강준모",
        type: options[0].key,
        difficulty: "중",
        score: 3
    },{
        title: "휴텍씨의 영문명은?",
        selections: ["hutechC","hutekC","hutecC","huteC"],
        answer: "hutechC",
        type: options[0].key,
        difficulty: "난이도",
        score: 4
    },{
        title: "팀 Rapid의 영문명은?",
        selections: ["Team Rapid","Teem Rapid","Tim Rapid","Team Repid"],
        answer: "Team Rapid",
        type: options[0].key,
        difficulty: "난이도",
        score: 3
    },
]