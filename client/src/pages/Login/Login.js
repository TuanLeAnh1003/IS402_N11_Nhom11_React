import React, { useState, useEffect } from 'react'
import Facebook from '../../assets/imgs/SignIn_fb.png';
import Google from '../../assets/imgs/SignIn_gg+.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Login.css'

function Login({ setShowLogin, handleOpenSignup }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = () => {

    }

    return (
        <div className="signInWrap" onClick={() => setShowLogin(false)}>
            <div className="signIn" onClick={e => e.stopPropagation()}>
                <div style={{ width: '50%' }}></div>
                <div className="signIn_form">
                    <FontAwesomeIcon icon={solid('circle-xmark')} onClick={() => setShowLogin(false)} /><br />
                    <h1>ĐĂNG NHẬP</h1>
                    <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <div className="signIn_password">
                        <input type={showPassword ? "text" : "password"} placeholder="Mật khẩu" onChange={e => setPassword(e.target.value)} />
                        {!showPassword && <div onClick={() => setShowPassword(!showPassword)}><FontAwesomeIcon icon={solid('eye')} /></div>}
                        {showPassword && <div onClick={() => setShowPassword(!showPassword)}><FontAwesomeIcon icon={solid('eye-slash')} /></div>}
                    </div>
                    <div className="signIn_check">
                        <input type="checkbox" name="remember" />
                        <label htmlFor="remember">Ghi nhớ</label>
                    </div>
                    <button onClick={handleLogin}>Đăng nhập</button>
                    <a href="#">Quên mật khẩu?</a>
                    <div className="signIn_method">
                        <span className="line"></span>
                        <span>Bạn có thể đăng nhập bằng</span>
                        <span className="line"></span>
                    </div>
                    <div className="signIn_media">
                        <img src={Facebook} alt="facebook" />
                        <img src={Google} alt="google" />
                    </div>
                    <div className="signIn_toSignUp">
                        <span>Chưa có tài khoản?</span>
                        <button onClick={handleOpenSignup}>Đăng ký</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login