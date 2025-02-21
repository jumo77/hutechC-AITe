import "./Common.module.css"
import {Deactivation} from "../const/ForCreate";

export default function DataPopUp({id, form, submit, close}){
    return (
        <div className="savePopUpContainer" id={id} onClick={Deactivation(id)}>
            <div className="savePopUp">
                {form}
                <div>
                </div>
            </div>
        </div>
    )
}