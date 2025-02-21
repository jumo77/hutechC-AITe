export default function TestMetaData({header, data}){
    return (
        <table>
            <thead>
            <tr>
                {header?.map((it, index) => (
                    <th key={it + index.toString()} dangerouslySetInnerHTML={{__html: it}}/>
                ))}
            </tr>
            </thead>
            <tbody>
            <tr>
                {data?.map((it, index) => (
                    <td key={it + index.toString()} dangerouslySetInnerHTML={{__html: it}}/>
                ))}
            </tr>
            </tbody>
        </table>
    )
}