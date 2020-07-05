import React from 'react'
import { Link } from 'react-router-dom'

const Register = props => {
    return (<div>
        <div class="kt-login__head">
            <h3 class="kt-login__title">ثبت‌نام</h3>
            <div class="kt-login__desc">اطلاعات خود را وارد نمایید</div>
        </div>
        <form class="kt-form" action="">
            <div class="input-group">
                <input class="form-control" type="text" placeholder="نام و نام‌خانوادگی" name="fullname" />
            </div>
            <div class="input-group">
                <input class="form-control" type="text" placeholder="ایمیل" name="email" autocomplete="off" />
            </div>
            <div class="input-group">
                <input class="form-control" type="password" placeholder="رمز عبور" name="password" />
            </div>
            <div class="input-group">
                <input class="form-control" type="password" placeholder="تایید رمز عبور" name="rpassword" />
            </div>
            <div class="row kt-login__extra">
                <div class="col kt-align-left">
                    <label class="kt-checkbox">
                        <input type="checkbox" name="agree" /><a href="#" class="kt-link kt-login__link kt-font-bold">شرایط ثبت نام را مطالعه کرده و می پذیرم. </a>.
                    <span></span>
                    </label>
                    <span class="form-text text-muted"></span>
                </div>
            </div>
            <div class="kt-login__actions">
                <Link to="/auth/login" class="btn btn-secondary btn-pill kt-login__btn-secondary">بازگشت</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <button id="kt_login_signup_submit" class="btn btn-brand btn-pill kt-login__btn-primary">ثبت نام</button>
            </div>
        </form>
    </div>)
}

export default Register