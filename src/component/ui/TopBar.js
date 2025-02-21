import styles from "./Common.module.css"
import {options} from "../const/ForShort";
import {boxType} from "../../pages/modules/Create/pages/Prompt/component/const";

export default function TopBar({title, value, setValue, second, setSecond, add, step}){
    return(
        <section className={styles.topBar}>
            <span>{title}</span>
            {second?
                <div className={styles.container}>
                    <select value={value[step]} className={styles.dropdown}
                            onChange={(e) => {
                                setValue(prev=>({
                                    ...prev,
                                    [step]:e.target.value
                                }))
                            }}>
                        {boxType?.map((option, index) => (<option value={option.key}
                            key={"TBqwer" + index.toString()} selected={index===0} disabled={index===0}>
                            {option.label}</option>))}
                    </select>
                    <select value={second[step]} className={styles.dropdown}
                            onChange={(e) => {
                                setSecond(prev=>({
                                    ...prev,
                                    [step]:e.target.value
                                }))
                            }} defaultValue={-1}>
                        <option disabled={true} value={-1}>갯수</option>
                        {Array(4).fill(0).map((option, index) => (
                            <option value={index} key={"TBasdf" + index.toString()}>{index+2}개</option>))}
                    </select>
                <button onClick={()=>add(step)}>추가</button>
                </div>
                : value ? <div className={styles.container}>
                    <select value={value} className={styles.dropdown}
                            onChange={(e) => {
                                setValue(e.target.value)
                            }}>
                        {options?.map((option, index) => (
                            <option key={"TBzxcv"+index.toString()}>{option.label}</option>))}
                </select>
                <button onClick={add}>추가</button>
            </div>:null}
        </section>
    )
}