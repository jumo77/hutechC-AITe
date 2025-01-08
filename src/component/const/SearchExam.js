import Load from "./Load";

export default function SearchExam(searching){
    let allKeys = Object.keys(window.localStorage).filter(it=>it.includes())
    let result = []
    allKeys.filter(it => it.includes(searching)).forEach(it => {
        result = [...result, JSON.parse(Load(it))]
    })
    return result
}