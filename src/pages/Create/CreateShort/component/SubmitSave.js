import TopBar from "../../../../component/ui/TopBar";
import styles from "../../Create.css"
import {difficulty, options} from "../../../../component/const/ForShort";
import ModifyButton from "./IconButton/ModifyButton";
import SubmitButton from "./IconButton/SubmitButton";
import {useContext} from "react";
import {SearchContext} from "./SearchContext";

export default function SubmitSave(){

    const {problems, metaData} = useContext(SearchContext)

    return(
        <div id="submitSave" className="hidden">
            <TopBar title="출제 내용"/>
            {problems?.map((it, index) => (
                <section key={it.type + index.toString()} className={styles.index}>
                    <div className="problemContainer borderRight">
                        <div style={{display:"flex"}}>
                            <span style={styles.index}>{String(index+1).padStart(2, "0").padEnd(3, ".")}</span>
                            <span>{it.title}</span>
                        </div>
                        {it.selections?.map((i, ind) => (
                            <div key={String(index).padStart(2, "0").padEnd(3, ".") + ind.toString()}
                                 style={{marginLeft: "20px", display:"flex"}}>
                                <span style={styles.index}>{it.type === options[0].key? (ind+1)+". ":
                                    it.type===options[3].key? 'O':
                                        it.type===options[4].key? 'ㅁ':
                                            ind === 0? "O":"X"}</span>
                                <span>{i}</span>
                            </div>
                        ))}
                        {it.answers?.map((i, ind) => (
                            <div key={String(index).padStart(2, "0").padEnd(3, ".") + ind.toString()}
                                 style={{marginLeft: "20px", display:"flex"}}>
                                <span style={styles.index}>정답</span>
                                <span>{i}</span>
                            </div>
                        ))}
                    </div>
                    <div className="infoContainer">
                        {[options[0].key, options[1].key, options[2].key].includes(it.type) && <>
                            <span>난이도:</span>
                            <span style={{fontWeight: "bold"}}>{it.difficulty}</span>
                            <span>점수:</span>
                            <span style={{fontWeight: "bold"}}>{it.score}</span>
                        </>}
                        {[options[0].key, options[1].key].includes(it.type) && <div className="DSContainer">
                            <span>정답:{it.answer}</span>
                        </div>}
                        {it.type === options[2].key&& <>
                            <span>오타 {it.allowTypo? "허용":"금지"}</span>
                            <span>띄어쓰기 {it.allowSpacingTypo? "상관 없음":"채점"}</span>
                        </>}
                    </div>
                </section>
            ))}
            <div className="saveContainer">
                <span>총 문항수:{problems?.length}</span>
                <span>난이도</span>
                <span>상:{metaData.totalDifficult}</span>
                <span>중:{metaData.totalMiddle}</span>
                <span>하:{metaData.totalEasy}</span>
                <span>만점:{metaData.max}</span>
            </div>
            <div className="saveContainer">
                <ModifyButton/>
                <SubmitButton/>
            </div>
        </div>
    )
}