import React from 'react';
import { Link } from "react-router-dom";

import LogoWhite from "../../media/logo-white.png";
import Background from '../../media/background/bg-2.jpg';

const LoginLayout = props => {
    return (<div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v4 kt-login--signin" id="kt_login">
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" style={{ backgroundImage: `url(${Background})` }}>
            <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
                <div className="kt-login__container">
                    <div className="kt-login__logo">
                        <a href="#">
                            <img src={LogoWhite} />
                        </a>
                    </div>
                    {props.children}
                    <div className="kt-login__account">
                        <span className="kt-login__account-msg">
                            حساب کاربری نداری؟ 
					</span>
					&nbsp;&nbsp;
					<Link to="/auth/register" className="kt-login__account-link">ثبت‌نام!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default LoginLayout