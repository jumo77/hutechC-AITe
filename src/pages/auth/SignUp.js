import {useNavigate} from "react-router-dom";
import {useState} from "react";
import './Auth.css'

export default function SignUp() {

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [pwc, setPwc] = useState('')
    const [allow, setAllow] = useState([false, false, false])

    const nav = useNavigate()
    const onSignUp = () => {
        nav('/')
    }

    const special = /[?.,*~`!^_+<>@\#$%&₩\-\=]/g
    const char = /[a-z]/i
    const number = /[0-9]/g

    return (
        <section className='main centerElements'>
            <form onSubmit={onSignUp} className='form centerElements'>
                <legend className='title'>회원가입</legend>
                <label className='label'>
                    아이디
                    <input className='input' placeholder='아이디로 사용할 이메일 주소를 입력해주세요.' value={id} name='username'
                           onChange={(e) => setId(e.target.value)}/>
                </label>
                <label className='label'>
                    비밀번호
                    <input className='input' placeholder='영문, 숫자, 특수문자가 모두 들어간 8~20자' value={pw} type='password'
                           onChange={(e) => setPw(e.target.value)}/>
                    {pw && (!pw.length > 7 || pw.length < 21) ?
                        <p style={{color: 'red'}}>비밀번호는 8~20자리로 구성해주세요.</p> : null}
                    {pw && !special.test(pw) ? <p style={{color: 'red'}}>비밀번호는 특수문자를 포함해야합니다.</p> : null}
                    {pw && !char.test(pw) ? <p style={{color: 'red'}}>비밀번호는 영문을 포함해야합니다.</p> : null}
                    {pw && !number.test(pw) ? <p style={{color: 'red'}}>비밀번호는 숫자를 포함해야합니다.</p> : null}
                    {pw && !special.test(pw) && !char.test(pw) && !number.test(pw) ? <p style={{color: 'red'}}>
                        {pw.split("")
                            .filter(p => !special.test(pw) && !char.test(pw) && !number.test(pw))
                        }는 사용 불가능한 특수문자입니다.</p> : null
                    }
                </label>
                <label>
                    <input className='input' placeholder='비밀번호를 입력해주세요.' value={pwc} type='password'
                           onChange={(e) => setPwc(e.target.value)}/>
                    {pw && pwc && pw !== pwc ? <p style={{color: 'red'}}>비밀번호가 일치하지 않습니다.</p> : null}
                </label>
                <label className='label checkLabel'>
                    <input type='checkbox' className='checkbox' checked={allow[0]&&allow[1]&&allow[2]}
                    onChange={()=>allow[0] && allow[1] && allow[2]? setAllow([false,false,false]): setAllow([true,true,true])}/>
                    <span className='title'>전체 동의하기</span>
                </label>
                <div className='divider'/>
                <label className='label checkLabel'>
                    <input type='checkbox' className='checkbox' checked={allow[0]} onChange={()=>
                        setAllow(prevState => ({...prevState, 0:!allow[0]}))}/>
                    <span>이용약관 동의 (필수)</span>
                </label>
                <label className='label checkLabel'>
                    <input type='checkbox' className='checkbox' checked={allow[1]} onChange={()=>
                        setAllow(prevState => ({...prevState, 1:!allow[1]}))}/>
                    <span>이용약관 동의 (필수)</span>
                </label>
                <label className='label checkLabel'>
                    <input type='checkbox' className='checkbox' checked={allow[2]} onChange={()=>
                        setAllow(prevState => ({...prevState, 2:!allow[2]}))}/>
                    <span>개인정보 수집 ∙ 이용 동의 (필수)</span>
                </label>
                <button className='label button' style={{color: 'white'}} type='submit'>가입</button>
            </form>
            <ul className='ul label' style={{gap: '20px'}}>
                <button className='button iconButton' style={{backgroundColor: '#FEE500', color: 'black'}}>
                    <img width='21' src='images/kakao.png' alt={null}/>
                    카카오 간편가입
                </button>
                <button className='button iconButton' style={{backgroundColor: '#03C75A', color: 'white'}}>
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2389 11.7394L6.454 0.5H0V21.5H6.76025V10.2615L14.546 21.5H21V0.5H14.2389V11.7394Z"
                              fill="white"/>
                    </svg>
                    네이버 간편가입
                </button>
                <button className='button iconButton' style={{backgroundColor: '#E5E8F0', color: 'black'}}>
                    <img width='21' src='images/google.png' alt={null}/>
                    구글 간편가입
                </button>
            </ul>
        </section>
    )
}