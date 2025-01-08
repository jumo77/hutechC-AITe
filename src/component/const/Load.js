export default function Load(key){
    const res = localStorage.getItem(key)
    if (res===null) return null
    if (res?.at(0)==="["||res?.at(0)==="{") return JSON.parse(res)
    else return res
}