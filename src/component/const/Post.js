export default async function Post(end, body){
    return await fetch("https://api.aiteditor.org/"+end,{
        headers:{"Content-Type":"application/json"},
        method:"POST",
        body:JSON.stringify(body),
    })
}