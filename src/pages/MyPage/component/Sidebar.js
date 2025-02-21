import '../myPage.css'
import {sideBarConst} from "./const";
import {Urls} from "../../../component/const/Urls";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const Sidebar = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log(pathname);
    }, [pathname]);

    const navigate = useNavigate();

    return (
        <div style={{margin:37, width: "fitContent", height: "fitContent",}} className="column sideBar">
            <img src="/images/profile.svg" alt="/images/profile.svg"
                style={{width: 128, height: 128, borderRadius: "50%"}}/>
            <h1 style={{textAlign:'center'}}>홍길동</h1>
            <div className='listHolderMyPage'>
                {sideBarConst.map((item, index) =>
                    (item.map((it, i) =>
                <div key={Urls.concat([index,it,i])}
                    className={i===0? 'titleMyPage':Urls.myPage+it.link===pathname? 'selectedMyPage': 'listItemMyPage'}
                     onClick={()=>i!==0 && navigate(Urls.myPage+it.link)}
                >{it.holder}</div>
                )))}
            </div>
        </div>
    )
}