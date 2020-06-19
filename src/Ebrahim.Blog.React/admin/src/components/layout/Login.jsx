import React, { Component } from 'react';
import Background from '../../media/background/bg-2.jpg';

class Login extends Component {
    state = {}
    render() {
        return (<div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v4 kt-login--signin" id="kt_login">
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" style={{ backgroundImage: `url(${Background})` }}>
                <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
                    <div className="kt-login__container">
                        <div className="kt-login__logo">
                            <a href="#">
                                <img src="./assets/media/logos/logo-5.png" />
                            </a>
                        </div>
                        <div className="kt-login__signin">
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
                        </div>
                        <div className="kt-login__account">
                            <span className="kt-login__account-msg">
                                Don't have an account yet ?
					</span>
					&nbsp;&nbsp;
					<a href="javascript:;" id="kt_login_signup" className="kt-login__account-link">Sign Up!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Login;