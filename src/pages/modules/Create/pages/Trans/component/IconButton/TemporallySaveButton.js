import "../../../../Create.css"
import {Activate, TempSavedShortId} from "../../../../../../../component/const/ForCreate";
export default function TemporallySaveButton(){

    const onClick=()=>{
        Activate(TempSavedShortId)
    }

    return(
        <button className="saveTemporally" onClick={onClick}>
            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.1306 3.92135L10.6613 1.4521C10.202 0.990322 9.65573 0.624217 9.05401 0.374969C8.45229 0.12572 7.80711 -0.00172165 7.15581 1.75639e-05H3.95768C3.01872 0.0011423 2.11854 0.374642 1.45459 1.03859C0.79064 1.70254 0.41714 2.60272 0.416016 3.54168V13.4583C0.41714 14.3973 0.79064 15.2975 1.45459 15.9614C2.11854 16.6254 3.01872 16.9989 3.95768 17H11.041C11.98 16.9989 12.8802 16.6254 13.5441 15.9614C14.2081 15.2975 14.5816 14.3973 14.5827 13.4583V7.42688C14.5844 6.77559 14.457 6.13041 14.2077 5.52869C13.9585 4.92696 13.5924 4.38065 13.1306 3.92135ZM12.129 4.92293C12.3451 5.14564 12.5311 5.39568 12.6822 5.66668H9.62435C9.43649 5.66668 9.25632 5.59205 9.12348 5.45921C8.99064 5.32637 8.91602 5.14621 8.91602 4.95835V1.90047C9.18702 2.05162 9.43706 2.2376 9.65977 2.45368L12.129 4.92293ZM13.166 13.4583C13.166 14.0219 12.9421 14.5624 12.5436 14.9609C12.1451 15.3595 11.6046 15.5833 11.041 15.5833H3.95768C3.3941 15.5833 2.8536 15.3595 2.45508 14.9609C2.05657 14.5624 1.83268 14.0219 1.83268 13.4583V3.54168C1.83268 2.9781 2.05657 2.43759 2.45508 2.03908C2.8536 1.64057 3.3941 1.41668 3.95768 1.41668H7.15581C7.27268 1.41668 7.3846 1.43935 7.49935 1.44997V4.95835C7.49935 5.52193 7.72323 6.06243 8.12175 6.46095C8.52026 6.85946 9.06076 7.08334 9.62435 7.08334H13.1327C13.1433 7.19809 13.166 7.31001 13.166 7.42688V13.4583ZM10.8455 9.42863C10.9749 9.56469 11.0449 9.74653 11.0402 9.9342C11.0356 10.1219 10.9566 10.3 10.8207 10.4295L8.27852 12.8478C7.8789 13.2411 7.34003 13.4605 6.77933 13.4583C6.21862 13.456 5.68153 13.2322 5.2851 12.8357L4.19427 11.8625C4.05393 11.7373 3.96905 11.5616 3.95829 11.3739C3.95296 11.281 3.96599 11.1879 3.99664 11.1C4.02728 11.0121 4.07494 10.9311 4.13689 10.8616C4.19884 10.7921 4.27387 10.7355 4.3577 10.695C4.44152 10.6545 4.53251 10.6309 4.62545 10.6256C4.81315 10.6149 4.99743 10.6791 5.13777 10.8042L6.26047 11.8058C6.32475 11.878 6.40311 11.9362 6.49074 11.977C6.57837 12.0178 6.67341 12.0401 6.77002 12.0428C6.86663 12.0455 6.96276 12.0283 7.05249 11.9924C7.14223 11.9565 7.22367 11.9027 7.29181 11.8341L9.84181 9.40384C9.90924 9.33937 9.98874 9.28885 10.0757 9.25519C10.1628 9.22153 10.2555 9.20539 10.3488 9.20769C10.4421 9.21 10.534 9.2307 10.6192 9.26861C10.7044 9.30653 10.7814 9.36091 10.8455 9.42863Z"
                    fill="#212121"/>
            </svg>
            임시 저장
        </button>
    )
}