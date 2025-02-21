import styles from "./Common.module.css"
import {Deactivation} from "../const/ForCreate";
export default function SavePopUp({id, text}){
    return(
        <div className={styles.savePopUpContainer} id={id} onClick={Deactivation(id)}>
            <div className={styles.savePopUp}>
                <p className={styles.text}>{text}</p>
                <button className={styles.button} onClick={Deactivation(id)}>확인</button>
            </div>
        </div>
    )
}