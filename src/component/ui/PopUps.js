import SavePopUp from "./SavePopUp";
import {
    Saved,
    SavedPromptId,
    SavedShortId,
    SavedTransId, TempSaved,
    TempSavedPromptId,
    TempSavedShortId,
    TempSavedTransId
} from "../const/ForCreate";

export default function PopUps(){
    return(
        <>
            <SavePopUp id={SavedShortId} text={Saved}/>
            <SavePopUp id={SavedTransId} text={Saved}/>
            <SavePopUp id={SavedPromptId} text={Saved}/>
            <SavePopUp id={TempSavedShortId} text={TempSaved}/>
            <SavePopUp id={TempSavedTransId} text={TempSaved}/>
            <SavePopUp id={TempSavedPromptId} text={TempSaved}/>
        </>
    )
}