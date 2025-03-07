export const Translator=["Chat-gpt",
"Gemini",
"Bing",
"Google Translate",
"DeepL",
"WordVice",
"Naver Papago"]
export const UploadFileType = [
    {value: "파일 업로드", key: ''},
    {value: "문서파일", key: 'ttt'},
    {value: "음성파일", key: 'stt'},
    {value: "영상 파일", key: 'vtt'},
    {value: "링크 URL", key: 'ytt'},
]

export function includes(arr, value){
    if (!Array.isArray(arr)||arr.length===0) return false
    else return arr.includes(value)
}