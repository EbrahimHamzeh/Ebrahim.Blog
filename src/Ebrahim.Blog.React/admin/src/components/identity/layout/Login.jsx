import React, { Component } from 'react';
import Background from '../../../media/background/bg-2.jpg';

class Login extends Component {
    state = {}
    render() {
        return (<div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v4 kt-login--signin" id="kt_login">
            <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" style={{ backgroundImage: `url(${Background})` }}>
                <div class="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
                    <div class="kt-login__container">
                        <div class="kt-login__logo">
                            <a href="#">
                                <img src="./assets/media/logos/logo-5.png" />
                            </a>
                        </div>
                        <div class="kt-login__signin">
                            <div class="kt-login__head">
                                <h3 class="kt-login__title">Sign In To Admin</h3>
                            </div>
                            <form class="kt-form" action="">
                                <div class="input-group">
                                    <input class="form-control" type="text" placeholder="Email" name="email" autocomplete="off" />
                                </div>
                                <div class="input-group">
                                    <input class="form-control" type="password" placeholder="Password" name="password" />
                                </div>
                                <div class="row kt-login__extra">
                                    <div class="col">
                                        <label class="kt-checkbox">
                                            <input type="checkbox" name="remember" /> Remember me
									<span></span>
                                        </label>
                                    </div>
                                    <div class="col kt-align-right">
                                        <a href="javascript:;" id="kt_login_forgot" class="kt-login__link">Forget Password ?</a>
                                    </div>
                                </div>
                                <div class="kt-login__actions">
                                    <button id="kt_login_signin_submit" class="btn btn-brand btn-pill kt-login__btn-primary">Sign In</button>
                                </div>
                            </form>
                        </div>
                        <div class="kt-login__account">
                            <span class="kt-login__account-msg">
                                Don't have an account yet ?
					</span>
					&nbsp;&nbsp;
					<a href="javascript:;" id="kt_login_signup" class="kt-login__account-link">Sign Up!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Login;