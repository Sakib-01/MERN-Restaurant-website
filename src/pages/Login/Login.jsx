import React, { useContext, useEffect, useRef, useState } from "react";

// captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../components/providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  //   for captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const captchaRef = useRef(null);
  const handleValidateCaptcha = (e) => {
    const captchaValue = captchaRef.current.value;
    if (validateCaptcha(captchaValue) == true) {
      alert("Captcha Matched");
      setDisabled(false);
    } else {
      alert("Captcha Does Not Match");
      setDisabled(true);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />{" "}
              </label>
              <input
                type="texy"
                name="captcha"
                ref={captchaRef}
                placeholder="Type the above text"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs "
              >
                Validate{" "}
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-primary"
                type="submit"
                value="login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;