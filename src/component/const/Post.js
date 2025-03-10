export default async function Post(end, body){
    // return await fetch("http://localhost:8080/"+end,{
    return await fetch("https://api.aiteditor/"+end,{
        headers:{"Content-Type":"application/json"},
        method:"POST",
        body:JSON.stringify(body),
    })
}