import {Urls} from "../../../component/const/Urls";

export const ListTable = ({data}) =>(
    <table style={{flexGrow: 1}}>
        <thead><tr>
            {Object.keys(data[0]).map((key, index) => (
                <th key={Urls.concat(['List Table', key, index])} dangerouslySetInnerHTML={{__html: key}}/>
            ))}
        </tr></thead>
        <tbody>
        {data.map((item, index) => (<tr key={Urls.concat(['list table body row'+index])}>
            {Object.values(item).map((it, i) => (
                <td key={Urls.concat(['list table body item',i,it])}
                    dangerouslySetInnerHTML={{__html: it}}/>
        ))}</tr>))}
        </tbody>
    </table>
)