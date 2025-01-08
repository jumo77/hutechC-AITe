import styles from "./Input.module.css"

export default function TextField({view, toChange, onChangeContent, onChangeEach, split}){
    return (
        view[toChange].view?
    <div className={styles.fieldContainer} style={{minWidth:view[toChange].width}}>
        <label className={styles.label}>{view[toChange].label}</label>
        {!split?
            <div className={styles.textAreaContainer}>
                <textarea
                    readOnly={view[toChange].disabled}
                    className={styles.textArea}
                    value={view[toChange].content}
                    onChange={(e) => onChangeContent?.(e.target.value, toChange)}
                />
            </div> :
            view[toChange].each?.map((it, index)=> (
                <div>
                    <input
                        type={typeof view[toChange].each[0]}
                        className={styles.input}
                        value={view[toChange].content}
                        disabled={view[toChange].disabled!==undefined}
                        onChange={(e) => onChangeEach?.(e.target.value, toChange, index)}
                    />
                </div>
            ))}
    </div>
            :null
    )
}