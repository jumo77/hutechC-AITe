export default function SplitButton({setSplit}){
    return(
        <button onClick={()=>setSplit(prev => !prev)}>
            분리하기
        </button>
    )
}