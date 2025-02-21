import './Auth.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Activation} from "../../component/const/ForCreate";

export default function SignIn() {

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const nav = useNavigate()
    const onLogin = ()=>{
        nav('/')
    }

    return (
        <section className='main centerElements'>
            <form onSubmit={onLogin} className='form centerElements'>
                <legend className='title'>로그인</legend>
            <label className='auth-label'>
                아이디
                <input className='auth-input' placeholder='이메일 주소를 입력해주세요.' value={id} name='username'
                       onChange={(e)=>setId(e.target.value)}/>
            </label>
            <label className='auth-label'>
                비밀번호
                <input className='auth-input' placeholder='비밀번호를 입력해주세요.' value={pw} type='password'
                       onChange={(e)=>setPw(e.target.value)}/>
            </label>
            <button className='auth-label auth-button' style={{color: 'white'}} type='submit'>로그인</button>
            </form>
            <ul className='ul auth-label' style={{gap:'20px'}}>
                <button className='auth-button iconButton' style={{backgroundColor:'#FEE500', color:'black'}}>
                    <img width='21' src='/images/kakao.png' alt={null}/>
                    카카오 로그인
                </button>
                <button className='auth-button iconButton' style={{backgroundColor:'#03C75A', color:'white'}}>
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2389 11.7394L6.454 0.5H0V21.5H6.76025V10.2615L14.546 21.5H21V0.5H14.2389V11.7394Z"
                              fill="white"/>
                    </svg>
                    네이버 로그인
                </button>
                <button className='auth-button iconButton' style={{backgroundColor: '#E5E8F0', color: 'black'}}>
                    <img width='21' src='/images/google.png' alt={null}/>
                    구글 로그인
                </button>
            </ul>
            <ul className='ul auth-label'>
                <p className='link' onClick={()=>nav('/register')}>회원가입</p>
                <p className='link' onClick={Activation('find_id')}>아이디 비밀번호 찾기</p>
            </ul>
        </section>
    )
}