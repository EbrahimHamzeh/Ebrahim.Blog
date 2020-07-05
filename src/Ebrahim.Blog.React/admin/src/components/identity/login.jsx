import React from 'react'
import { Link } from 'react-router-dom'

const Login = props => {
    return (<div className="kt-login__signin">
    <div className="kt-login__head">
        <h3 className="kt-login__title">ورود به بخش مدیریت</h3>
    </div>
    <form className="kt-form" action="">
        <div className="input-group">
            <input className="form-control" type="text" placeholder="نام‌کاربری" name="username" autocomplete="off" />
        </div>
        <div className="input-group">
            <input className="form-control" type="password" placeholder="رمز عبور" name="password" />
        </div>
        <div className="row kt-login__extra">
            <div className="col">
                <label className="kt-checkbox">
                    <input type="checkbox" name="remember" /> مرا به خاطر بسپار
            <span></span>
                </label>
            </div>
            <div className="col kt-align-right">
                <Link to="/auth/forgot-password" className="kt-login__link">رمز را فراموش کردید؟</Link>
            </div>
        </div>
        <div className="kt-login__actions">
            <button id="kt_login_signin_submit" className="btn btn-brand btn-pill kt-login__btn-primary">ورود</button>
        </div>
    </form>
</div>)
}

export default Login