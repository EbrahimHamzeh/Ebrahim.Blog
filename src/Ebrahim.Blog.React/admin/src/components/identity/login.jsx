import React from "react";
import Joi from "@hapi/joi";
import { Link } from "react-router-dom";
import * as auth from "../../services/UserService";
import Form from "../commen/form";

class Login extends Form {
  state = {
    data: { username: "", password: "", rememberMe: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().min(2).message("نام‌کاربری نامعتبر است"),
    password: Joi.string().required().min(3).message("رمز نامعتبر است"),
    rememberMe: Joi.optional(),
  };

  validate = () => {
    const { data } = this.state;
    const validationResult = Joi.object(this.schema).validate(data, {
      abortEarly: false,
    });

    if (!validationResult.error) {
      return null;
    }

    const errors = {};
    for (let item of validationResult.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const {
        data: { accessToken, refreshToken },
      } = await auth.getLogin(data.username, data.password);
      console.log("JWT", accessToken);
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      this.props.history.push("/admin/dashboard");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="kt-login__signin">
        <div className="kt-login__head">
          <h3 className="kt-login__title">ورود به بخش مدیریت</h3>
        </div>
        <form className="kt-form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              value={this.state.data.username}
              onChange={this.handleChange}
              placeholder="نام‌کاربری"
              name="username"
              id="username"
              autoComplete="off"
            />
            {this.state.errors["username"] && (
              <div className="error invalid-feedback">
                This field is required.
              </div>
            )}
          </div>
          <div className="input-group">
            <input
              className="form-control"
              type="password"
              value={this.state.data.password}
              onChange={this.handleChange}
              placeholder="رمز عبور"
              name="password"
              id="password"
            />
            {this.state.errors["password"] && (
              <div className="error invalid-feedback">
                This field is required.
              </div>
            )}
          </div>
          <div className="row kt-login__extra">
            <div className="col">
              <label className="kt-checkbox">
                <input
                  type="checkbox"
                  value={this.state.data.rememberMe}
                  onChange={this.handleChange}
                  name="remember"
                />{" "}
                مرا به خاطر بسپار<span></span>
              </label>
            </div>
            <div className="col kt-align-right">
              <Link to="/auth/forgot-password" className="kt-login__link">
                رمز را فراموش کردید؟
              </Link>
            </div>
          </div>
          <div className="kt-login__actions">
            <button
              id="kt_login_signin_submit"
              className="btn btn-brand btn-pill kt-login__btn-primary"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
