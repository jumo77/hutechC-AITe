export const Saved = "저장되었습니다."
export const TempSaved = "임시저장되었습니다."

export const SavedShortId = "SavedShortId"
export const SavedTransId = "SavedTransId"
export const SavedPromptId = "SavedPromptId"
export const TempSavedShortId = "TempSavedShortId"
export const TempSavedTransId = "TempSavedTransId"
export const TempSavedPromptId = "TempSavedPromptId"

export const Activate = (id)=>{
    document.getElementById(id).classList.add("active")
}

export const Deactivate = (id)=>{
    document.getElementById(id).classList.remove("active")
}

export const Activation = (id)=>{
    return ()=>Activate(id)
}


export const Deactivation = (id)=>{
    return ()=>document.getElementById(id).classList.remove("active")
}