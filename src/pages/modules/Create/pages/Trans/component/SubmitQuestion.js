import {useContext, useEffect, useState} from "react";
import {Context} from "./Context";
import {useDropzone} from "react-dropzone";
import FindFileButton from "./IconButton/FindFileButton";
import * as pdfjsLib from "pdfjs-dist";
import {Translator, UploadFileType} from "../../../../../../component/const/ForTrans";

export default function SubmitQuestion() {
    const {
        metaData,
        file,
        setFile,
        original,
        setOriginal,
        answer,
        setAnswer,
        fileType,
        setFileType
    } = useContext(Context)
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

    const [translate, setTranslate] = useState(false)
    const loadPdf = async () => {
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = async () => {
                const loadingTask = pdfjsLib.getDocument({
                    data: fileReader.result,
                    cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
                });
                const pdf = await loadingTask.promise;

                let textContent = '';
                for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                    const page = await pdf.getPage(pageNum);
                    const textContentItem = await page.getTextContent({normalizeWhitespace: false});
                    textContent += textContentItem.items
                        .map((item) => item.str)
                        .join('');
                }
                setOriginal(textContent)
            };
            fileReader.readAsArrayBuffer(file);
        }
    };

    useEffect(() => {
        console.log(file?.name.split("."))
        if (file)
            switch (file?.name.split(".")[1]) {
            case "pdf":
                loadPdf()
                    .then(() => {
                        window.confirm("파일을 로딩했습니다. 번역은 결제가 필요합니다.") ?
                            setTranslate(true) : setTranslate(false)
                    })
                    .catch(err => console.error(err))
                break
            case "hwp":
                const formData = new FormData()
                formData.append("hwp", file)
                fetch("http://localhost:8080/ttt/hwp", {
                    method: "POST",
                    body: formData
                })
                    .then(r=>r.text())
                    .then(r=>setOriginal(r))
                break
            default:
                alert("지원하지 않는 파일형식입니다.")
        }
    }, [file]);

    useEffect(() => {
        // if (original !== "" && translate) {
        //     Translator.forEach(it => {
        //         if (metaData.translator.includes(it))
        //             fetch("http://localhost:8080/api/translate/deepl", {
        //                 headers: {"Content-Type": "application/json"},
        //                 method: "Post",
        //                 body: JSON.stringify({text: [original], target_lang: "EN"})
        //             })
        //                 .then(res => res.text())
        //                 .then(res => setAnswer(res))
        //                 .catch(err => console.error(err))
        //     })
        // }
        if (original !== ""){

            const textarea = document.getElementById("originalTextArea")
            if (!textarea){
            }else {
                console.log(textarea)
                textarea.style.height = "0px";
                textarea.style.height = textarea.scrollHeight + "px";
            }
        }
    }, [original]);

    const set = (e)=>{
        console.log(e.target.value)
        setFileType(e.target.value)
    }

    const onDrop = (acceptedFile) => setFile(acceptedFile[0])

    const {getRootProps, getInputProps, isDragActive, isFileDialogActive} = useDropzone({onDrop})

    return (<>
        <section>
            <table>
                <thead>
                <tr>
                    <th><select onChange={e => set(e)}>
                        {UploadFileType.map((it, index) =>
                            (<option selected={index === 0} disabled={index === 0}
                                key={it + index.toString()} value={it}>{it}</option>))}
                    </select></th>
                </tr>
                </thead>
                <tbody>
                {fileType === UploadFileType[0] ?
                    <tr><td>업로드할 파일 형식을 선택해주세요.</td></tr>
                    : fileType === UploadFileType[1] ?
                        <tr>
                            <td id="file"
                                style={isDragActive || isFileDialogActive ? {backgroundColor: "#f5f5f5"} : null} {...getRootProps()}>
                                <input {...getInputProps()}/>
                                <img src="/images/fileIcon.svg" alt=""/>
                                <p style={{marginTop: "15px"}}>업로드할 파일을 드래그하세요.</p>
                                <div style={{marginTop: "20px"}}>
                                    <img src="/images/pdf.svg" alt=""/>
                                    <img src="/images/ppt.svg" alt=""/>
                                    <img src="/images/doc.svg" alt=""/>
                                    <img src="/images/txt.svg" alt=""/>
                                </div>
                                <FindFileButton/>
                            </td>
                        </tr>
                        :
                        <tr>
                            <td id="file"
                                style={isDragActive || isFileDialogActive ? {backgroundColor: "#f5f5f5"} : null} {...getRootProps()}>
                                <input {...getInputProps()}/>
                                <img src="/images/fileIcon.svg" alt=""/>
                                <p style={{marginTop: "15px"}}>{fileType} 선택시 이미지를 제공해주세요.</p>
                                <FindFileButton/>
                            </td>
                        </tr>
                }
                </tbody>
            </table>
        </section>
        <section>
            <table>
                <thead><tr>
                    <th width="50%">
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg" style={{marginRight: "5px"}}>
                            <path
                                d="M1.6994 0H14.2365C15.1984 0 15.9679 0.827586 16 1.82759V14.3103C16 14.8276 15.8076 15.2759 15.487 15.6207L11.9279 19.4483C11.6072 19.7931 11.1583 20 10.7094 20H1.6994C0.769539 20 0 19.1724 0 18.1724V1.82759C0 0.827586 0.769539 0 1.6994 0ZM1.2505 1.82759V18.1724C1.2505 18.4138 1.44289 18.6207 1.6994 18.6207H10.1964V15.4483C10.1964 14.4483 10.9659 13.6207 11.8958 13.6207H14.6533V1.82759C14.6533 1.58621 14.4609 1.37931 14.2365 1.37931H1.66733C1.44289 1.37931 1.2505 1.58621 1.2505 1.82759ZM11.479 15.4483V17.9655L14.2365 15H11.8958C11.6713 15 11.479 15.2069 11.479 15.4483ZM11.7341 4.48283H3.87838C3.04471 4.48283 3.04471 3.10352 3.87838 3.10352H11.7341C12.5677 3.10352 12.5677 4.48283 11.7341 4.48283ZM3.87838 7.58634H11.7341C12.5677 7.58634 12.5677 6.20703 11.7341 6.20703H3.87838C3.04471 6.20703 3.04471 7.58634 3.87838 7.58634ZM11.7341 10.6899H10.7722H3.87838C3.04471 10.6899 3.04471 9.31055 3.87838 9.31055H11.7341C12.5677 9.31055 12.5677 10.6899 11.7341 10.6899Z"
                                fill="#212121"/>
                        </svg>
                        원문
                    </th>
                    <th width="50%">
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg" style={{marginRight: "5px"}}>
                            <path
                                d="M14.36 4.61335L11.5712 1.70835C11.0524 1.16509 10.4354 0.734373 9.75584 0.441139C9.07625 0.147906 8.34758 -0.00202547 7.61199 2.06634e-05H3.99999C2.93952 0.00134388 1.92284 0.440755 1.17297 1.22187C0.423105 2.00298 0.00127028 3.06202 0 4.16668V15.8333C0.00127028 16.938 0.423105 17.997 1.17297 18.7782C1.92284 19.5593 2.93952 19.9987 3.99999 20H12C13.0605 19.9987 14.0771 19.5593 14.827 18.7782C15.5769 17.997 15.9987 16.938 16 15.8333V8.73751C16.0019 7.97128 15.858 7.21224 15.5765 6.50434C15.295 5.79643 14.8815 5.1537 14.36 4.61335ZM13.2288 5.79168C13.4728 6.05369 13.6829 6.34786 13.8536 6.66668H10.4C10.1878 6.66668 9.98433 6.57888 9.8343 6.4226C9.68427 6.26632 9.59999 6.05436 9.59999 5.83335V2.23585C9.90606 2.41367 10.1885 2.63248 10.44 2.88668L13.2288 5.79168ZM14.4 15.8333C14.4 16.4964 14.1471 17.1323 13.697 17.6011C13.247 18.0699 12.6365 18.3333 12 18.3333H3.99999C3.36348 18.3333 2.75303 18.0699 2.30294 17.6011C1.85285 17.1323 1.6 16.4964 1.6 15.8333V4.16668C1.6 3.50364 1.85285 2.86776 2.30294 2.39892C2.75303 1.93008 3.36348 1.66669 3.99999 1.66669H7.61199C7.74399 1.66669 7.87039 1.69335 7.99999 1.70585V5.83335C7.99999 6.49639 8.25285 7.13227 8.70293 7.60111C9.15302 8.06995 9.76347 8.33335 10.4 8.33335H14.3624C14.3744 8.46835 14.4 8.60001 14.4 8.73751V15.8333ZM11.7792 11.0925C11.9253 11.2526 12.0044 11.4665 11.9991 11.6873C11.9939 11.9081 11.9047 12.1177 11.7512 12.27L8.87999 15.115C8.42866 15.5777 7.82006 15.8359 7.18679 15.8333C6.55352 15.8306 5.94693 15.5673 5.49919 15.1008L4.26719 13.9558C4.1087 13.8086 4.01283 13.6019 4.00068 13.3811C3.99466 13.2717 4.00938 13.1622 4.04399 13.0588C4.0786 12.9554 4.13243 12.8601 4.20239 12.7783C4.27236 12.6966 4.3571 12.63 4.45178 12.5824C4.54645 12.5347 4.64921 12.507 4.75417 12.5007C4.96616 12.4881 5.1743 12.5636 5.33279 12.7108L6.60079 13.8892C6.67338 13.9741 6.76188 14.0426 6.86085 14.0906C6.95982 14.1385 7.06717 14.1649 7.17628 14.168C7.28539 14.1711 7.39396 14.151 7.49531 14.1087C7.59665 14.0665 7.68863 14.0031 7.76559 13.9225L10.6456 11.0633C10.7217 10.9875 10.8115 10.9281 10.9098 10.8885C11.0081 10.8489 11.1129 10.8299 11.2182 10.8326C11.3235 10.8353 11.4273 10.8596 11.5236 10.9043C11.6199 10.9489 11.7067 11.0128 11.7792 11.0925Z"
                                fill="#212121"/>
                        </svg>
                        번역된 내용
                    </th>
                </tr></thead>
                <tbody><tr>
                    {!file ?
                        <>
                            <td><img src="/images/original.svg" alt=""/><p>업로드 된 파일의 텍스트 표시</p></td>
                            <td><img src="/images/translated.svg" alt=""/><p>번역된 텍스트 표시</p></td>
                        </>
                        : <>
                            <td>
                                {original ==="" ?<>
                                    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt=""/>
                                    <span>텍스트 추출 중...</span>
                                    </>:
                                    <textarea id="originalTextArea" style={{width: "100%", resize:"none"}}
                                        onChange={event =>
                                        setOriginal(event.target.value)} value={original}/>}
                            </td>
                            <td>
                                {answer === "" ?<>
                                        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt=""/>
                                        <span>번역 중...</span>
                                    </>:
                                    <textarea
                                        onChange={event =>
                                        setAnswer(event.target.value)} value={answer} style={{width: "100%"}}/>}
                            </td>
                        </>}
                </tr></tbody>
            </table>
        </section>
    </>)
}