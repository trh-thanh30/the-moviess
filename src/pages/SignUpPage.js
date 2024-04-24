import React, { useEffect, useState } from "react";
import logo from "../assets/image/the-moviess.svg";
import logoMovies from "../assets/image/logo-image.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import IconEyeClose from "../icon/IconEyeClose";
import IconEyeOpen from "../icon/IconEyeOpen";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";

const SignUpPage = () => {
  const [tooglePassword, setTooglePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("Please enter your name")
        .max(20, "Your name must be 20 characters or less"),
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
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        await updateProfile(auth.currentUser, {
          displayName: values.fullName,
        });
        console.log(userCredential);

        const useRef = collection(db, "users");
        await addDoc(useRef, {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
        });

        setLoading(false);
        navigate("/");
        toast.success(`Sign up successfully !!! Hello ${values.fullName} 😽👋`);
        console.log(values);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          toast.error(
            "The email address you entered is already in use. Please try a different email or reset your password if you have forgotten it."
          );
        } else {
          toast.error("There was an error logging in. Please try again");
        }
      }
    },
  });

  useEffect(() => {
    document.title = "The Moives || Sign Up";
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
          <h1 className="heading-signin">Sign Up</h1>
          <div className="flex flex-col gap-6">
            <label className="label-form" htmlFor="fullName">
              Your Name
            </label>
            <input
              onBlur={formik.handleBlur}
              className={`outline-none p-4 rounded-lg transition-colors border ${
                formik.touched.fullName && formik.errors.fullName
                  ? "border-red-500"
                  : "border-green-500"
              }`}
              type="text"
              name="fullName"
              id="fullName"
              placeholder="example@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-sm text-red-600">
                {formik.errors.fullName}
              </div>
            ) : null}

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
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {loading ? <div className="loader"></div> : "Sign Up"}
          </button>
          <div className="mt-8 mb-8 text-center">
            <span className="text-lg text-gray-400">
              Do you already have an account?{" "}
            </span>
            <NavLink
              className="text-lg text-green-500 border-b border-gray-400"
              to={"/sign-in"}
            >
              Sign in now
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
