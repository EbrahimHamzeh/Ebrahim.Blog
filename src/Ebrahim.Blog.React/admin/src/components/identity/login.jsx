import React from 'react'

const Login = props => {
    return (<div className="kt-login__signin">
    <div className="kt-login__head">
        <h3 className="kt-login__title">Sign In To Admin</h3>
    </div>
    <form className="kt-form" action="">
        <div className="input-group">
            <input className="form-control" type="text" placeholder="Email" name="email" autocomplete="off" />
        </div>
        <div className="input-group">
            <input className="form-control" type="password" placeholder="Password" name="password" />
        </div>
        <div className="row kt-login__extra">
            <div className="col">
                <label className="kt-checkbox">
                    <input type="checkbox" name="remember" /> Remember me
            <span></span>
                </label>
            </div>
            <div className="col kt-align-right">
                <a href="javascript:;" id="kt_login_forgot" className="kt-login__link">Forget Password ?</a>
            </div>
        </div>
        <div className="kt-login__actions">
            <button id="kt_login_signin_submit" className="btn btn-brand btn-pill kt-login__btn-primary">Sign In</button>
        </div>
    </form>
</div>)
}

export default Login