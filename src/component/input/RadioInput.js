import styles from "./Input.module.css";

export default function RadioInput({value, children, toChange, onChange}) {
    return (
        <fieldset className={styles.radio}>
            {children?.map((i, index) => (<label>
                    <input type="radio" checked={value[toChange] === index} key={i+index.toString()}
                           onChange={(e) => onChange?.(index, toChange)}/>
                    {i}
            </label>
            ))}
        </fieldset>
    )
}