import {includes} from "../const/ForTrans";

export default function CheckboxInput({label, onChange, toChange, metaData}){

    return(
        <label >
            <input type="checkbox" style={{height:"auto"}} checked={includes(metaData.translator,label)}
                   onChange={()=>onChange(label, toChange, !includes(metaData.translator, label))}/>
            {label}
        </label>
    )
}