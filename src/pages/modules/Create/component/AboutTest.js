import TestMetaData from "../../../../component/metadata/TestMetaData";
import {fixed} from "../../../../component/const/DummyData";
import {TextInput} from "../../../../component/input/TextInput";

export const AboutTest = ({title, subTitle,  metaData, onChange, children}) => {
    return (
        <>
            <h2>{title}</h2>
            <p style={{marginTop: "30px"}}>{subTitle}</p>
            <TestMetaData header={Object.keys(fixed)} data={Object.values(fixed)}/>
            {children}
            <table>
                <thead>
                <tr>
                    <th>시험 개요</th>
                    <th>출제자 메모</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><TextInput value={metaData} toChange="testOverview" onChange={onChange}/></td>
                    <td><TextInput value={metaData} toChange="submitterMemo" onChange={onChange}/></td>
                </tr>
                </tbody>
            </table>
        </>
    )
}