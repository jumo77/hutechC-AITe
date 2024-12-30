import styles from "./Common.module.css"
import {options} from "../const/ForShort";

export default function TopBar({title, value, setValue, add}){
    return(
        <section className={styles.topBar}>
            <span>{title}</span>
            {add && <div className={styles.container}>
                <select value={value} className={styles.dropdown}
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}>
                    {options?.map(option => (<option key={option.key}>{option.label}</option>))}
                </select>
                <button className={styles.button} onClick={add}>추가</button>
            </div>}
        </section>
    )
}