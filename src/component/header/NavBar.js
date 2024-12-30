import styles from "./NavBar.module.css"
import {Link} from "react-router-dom";
import BellIcon from "./icon/BellIcon";
import {ProfileIcon} from "./icon/ProfileIcon";
export default function NavBar(){
    return(
        <header className={styles.navBar}>
            <ul className={styles.navList}>
                <div className={styles.logo}>로고이미지</div>
                <Link to="/">홈</Link>
                <Link to="/">회사 및 협회 소개</Link>
                <Link to="/">번역 자격증</Link>
                <Link to="/">AITe 번역 전문가</Link>
                <Link to="/">프롬프트 언어전문가</Link>
                <Link to="/">공지사항</Link>
                <div className={styles.iconContainer}>
                    <Link to="/alert"><BellIcon/></Link>
                    <Link to="/profile"><ProfileIcon/></Link>
                </div>
            </ul>
        </header>
    )
}