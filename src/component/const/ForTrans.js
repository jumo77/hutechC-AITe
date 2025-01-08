export const Translator=["Chat-gpt","Gemini","Bing","Google Translate","DeepL","WordVice","네이버 클로바"]
export const UploadFileType = [
    "파일 업로드",
    "문서파일",
    "영상 파일",
    "음성파일",
    "링크 URL",
]

export function includes(arr, value){
    if (!Array.isArray(arr)||arr.length===0) return false
    else return arr.includes(value)
}