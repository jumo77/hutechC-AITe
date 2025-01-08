import styles from "./Input.module.css"

export const TextInput = ({type, toChange, onChange, value}) => {

    return (
        <input
            type="text"
            className={styles.input}
            value={value[toChange]}
            onChange={(e) => onChange(type !=="number"? e.target.value
                :isNaN(parseInt(e.target.value))?'':parseInt(e.target.value), toChange)}
        />
    );
}