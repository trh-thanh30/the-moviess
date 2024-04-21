import React, { useEffect, useState } from "react";
import logo from "../assets/image/the-moviess.svg";
import logoMovies from "../assets/image/logo-image.svg";
import gmail from "../assets/image/gmail.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import IconEyeClose from "../icon/IconEyeClose";
import IconEyeOpen from "../icon/IconEyeOpen";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignInPage = () => {
  const [tooglePassword, setTooglePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter the correct email format : 'example@gmail.com' ")
        .required("Please enter your email address"),
      password: Yup.string()
        .max(18, "Your password must be 18 characters or less")
        .required("Please enter your password"),
    }),
    onSubmit: (values) => {
      setTimeout(() => {
        navigate("/");
        toast.success("Logged in successfully !!! Hello there 😽👋");
        console.log("Register sucess");
        console.log(values);
      }, 1000);
    },
  });

  useEffect(() => {
    document.title = "The Moives || Sign In";
  }, []);
  return (
    <div className="input-page">
      <div className="container">
        <div className="flex items-center justify-center my-10 gap-x-4">
          <span>
            <img src={logoMovies} alt="the-movies" />
          </span>

          <span>
            <img src={logo} alt="the-movies" />
          </span>
        </div>

        <form
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="max-w-[600px] mx-auto"
          action=""
        >
          <h1 className="heading-signin">Sign in</h1>
          <div className="flex flex-col gap-6">
            <label className="label-form" htmlFor="email">
              E-mail
            </label>
            <input
              onBlur={formik.handleBlur}
              className={`outline-none p-4 rounded-lg transition-colors border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-green-500"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-sm text-red-600">{formik.errors.email}</div>
            ) : null}

            <label className="label-form" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                onBlur={formik.handleBlur}
                className={`outline-none w-[100%] p-4 rounded-lg transition-colors border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-green-500"
                }`}
                type={tooglePassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {!tooglePassword ? (
                <IconEyeClose
                  className="input-icon"
                  onClick={() => setTooglePassword(true)}
                ></IconEyeClose>
              ) : (
                <IconEyeOpen
                  className="input-icon"
                  onClick={() => setTooglePassword(false)}
                ></IconEyeOpen>
              )}
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-sm text-red-600">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="button-form"
            disabled={formik.isSubmitting}
            onClick={() => setLoading(true)}
          >
            {loading ? <div className="loader"></div> : "Sign In"}
          </button>

          <div className="flex items-center gap-2 my-14">
            <span className="stick"></span>
            <span className="form-or">Or</span>
            <span className="stick"></span>
          </div>
        </form>
        <div className="max-w-[600px] mx-auto">
          <button className="p-3 bg-white border rounded-2xl border-gray-300 text-gray-400 text-lg w-[100%] outline-none">
            <div className="flex items-center">
              <img className="w-6 h-6" src={gmail} alt="" />
              <p className="block mx-auto">Continue with Gmail</p>
            </div>
          </button>
          <div className="mt-8 mb-8 text-center">
            <span className="text-lg text-gray-400">
              Don’t have an account?{" "}
            </span>
            <NavLink
              className="text-lg text-green-500 border-b border-gray-400"
              to={"/sign-up"}
            >
              Create now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
