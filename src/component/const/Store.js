export default function Store(key, data){
    if(typeof data !== "string") {
        localStorage.setItem(key, JSON.stringify(data))
    }
    else {
        localStorage.setItem(key, data)
    }
}