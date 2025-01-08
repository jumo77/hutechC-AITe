import {useContext} from "react";
import {SearchContext} from "../../pages/Create/CreateShort/component/SearchContext";
import styles from "./Input.module.css"
import SearchButton from "../../pages/Create/CreateShort/component/IconButton/SearchButton";

export default function TextSearch(){
    const {searching, setSearching} = useContext(SearchContext)
    return(
        <div style={{display:"flex", flexDirection:"row"}}>
            <input value={searching} className={styles.input} style={{width:"430px"}}
                   onChange={(e)=>setSearching(e.target.value)} />
            <SearchButton/>
        </div>
    )
}