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
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

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
        .min(6, "Your password must be 6 characters or longer")
        .required("Please enter your password"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        setLoading(false);
        navigate("/the-moviess");
        toast.success(`Logged in successfully !!! Hello ${values.email} 😽👋`);
      } catch (error) {
        if (error.code === "auth/invalid-credential") {
          toast.error("The email or password you entered is incorrect.");
        } else if (error.code === "auth/user-disabled") {
          toast.error(
            "Your account has been disabled. Please contact support."
          );
        } else {
          toast.error("An error occurred during sign-in. Please try again.");
          console.error(error);
        }
      }
    },
  });
  const handleSignInWithEmail = async (e) => {
    const provider = new GoogleAuthProvider(e);
    return await signInWithPopup(auth, provider);
  };

  useEffect(() => {
    document.title = "The Moives || Sign In";
  }, []);
  return (
    <div className="input-page">
      <div className="container">
        <div className="flex items-center justify-center my-8 md:my-10 gap-x-2">
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
          <h1 className="text-[#2a4343] md:font-normal md:text-5xl md:mb-11 font-normal text-4xl mb-8">
            Sign in
          </h1>
          <div className="flex flex-col gap-4 md:gap-6">
            <label
              className="text-[#7f989a] md:text-lg md:font-medium cursor-pointer text-base font-medium"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              onBlur={formik.handleBlur}
              className={`outline-none md:p-4 p-3 rounded-lg transition-colors border text-sm ${
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

            <label
              className="text-[#7f989a] md:text-lg md:font-medium cursor-pointer text-base font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                onBlur={formik.handleBlur}
                className={`outline-none w-[100%] md:p-4 p-3 rounded-lg transition-colors border text-sm ${
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
            className="outline-none md:mt-11 mt-8 w-full md:p-[16px] p-3 rounded-3xl text-white bg-[#00fa9a] block md:text-xl text-base"
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {loading ? <div className="loader"></div> : "Sign In"}
          </button>

          <div className="flex items-center gap-2 my-8 md:my-14">
            <span className="stick"></span>
            <span className="form-or">Or</span>
            <span className="stick"></span>
          </div>
        </form>
        <div className="max-w-[600px] mx-auto">
          <button
            onClick={handleSignInWithEmail}
            className="p-3 bg-white border rounded-2xl border-gray-300 text-gray-400 text-lg w-[100%] outline-none"
          >
            <div className="flex items-center">
              <img className="w-6 h-6" src={gmail} alt="" />
              <p className="block mx-auto text-base md:text-xl">
                Continue with Gmail
              </p>
            </div>
          </button>
          <div className="mt-6 mb-8 text-center md:mt-8">
            <span className="text-sm text-gray-400 md:text-lg">
              Don’t have an account?{" "}
            </span>
            <NavLink
              className="text-sm text-green-500 border-b border-gray-400 md:text-lg"
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
