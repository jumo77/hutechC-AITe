import {useContext} from "react";
import {Context} from "../../pages/modules/Create/pages/Short/component/Context";
import styles from "./Input.module.css"
import SearchButton from "../../pages/modules/Create/pages/Short/component/IconButton/SearchButton";

export default function TextSearch(){
    const {searching, setSearching} = useContext(Context)
    return(
        <div style={{display:"flex", flexDirection:"row"}}>
            <input value={searching} className={styles.input} style={{width:"430px"}}
                   onChange={(e)=>setSearching(e.target.value)} />
            <SearchButton/>
        </div>
    )
}