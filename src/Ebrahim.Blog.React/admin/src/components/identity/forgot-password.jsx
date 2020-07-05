import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = props => {
    return (<div>
    <div class="kt-login__head">
        <h3 class="kt-login__title">رمز عبور خود را فراموش کردید؟</h3>
        <div class="kt-login__desc">ایمیل خود را وارد نمایید تا رمز عبور بازیابی شود.</div>
    </div>
    <form class="kt-form" action="">
        <div class="input-group">
            <input class="form-control" type="text" placeholder="ایمیل" name="email" id="kt_email" autocomplete="off"/>
        </div>
        <div class="kt-login__actions">
        <Link to="/auth/login" class="btn btn-secondary btn-pill kt-login__btn-secondary">بازگشت</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <button id="kt_login_forgot_submit" class="btn btn-brand btn-pill kt-login__btn-primary">ارسال درخواست</button>
        </div>
    </form>
</div>)
}

export default ForgotPassword