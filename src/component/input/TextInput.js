import styles from "./Input.module.css"

export const TextInput = ({type, toChange, onChange, value, className}) => {

    return (
        <input
            type="text"
            placeholder="입력하세요."
            className={className? "":styles.input}
            value={value[toChange]}
            onChange={(e) => onChange(type !=="number"? e.target.value
                :isNaN(parseInt(e.target.value))?'':parseInt(e.target.value), toChange)}
        />
    );
}