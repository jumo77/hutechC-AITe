import {fixed} from "../component/const/DummyData";
import SearchExam from "../component/const/SearchExam";

export default function ListShort(){
    return(
        <>
            <table>
                <thead>
                <tr>
                {Object.keys(fixed)?.map(it=><th dangerouslySetInnerHTML={{__html:it}}/>)}
                </tr>
                </thead>
                <tbody>
                {SearchExam("<")?.map(it=>(
                    <tr>{

                    }</tr>
                ))}

                </tbody>
            </table>
        </>
    )
}