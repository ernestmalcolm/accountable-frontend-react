import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFormSchema from "./validation";
import { useFormik } from "formik";

// Logos
import googleLogo from "../../assets/logos/google.png";
import microsoftLogo from "../../assets/logos/microsoft.png";
import facebookLogo from "../../assets/logos/facebook.png";
import {
    signUpWithEmailAndPassword,
    signInWithProviders,
    LoginUserWithEmailAndPassword
} from "../../utils/auth/requestAuthSupabase";

function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const Router = useNavigate();
    const [eMail, setEMail] = useState("")
    const [password, setPassword] = useState("")
    const [displayMessage, setDisplayMessage] = useState("")
    const [ptr, setPtr] = useState("")
    const [dispClassName, setDispClassName] = useState("")
    const [button, setButton] = useState("")
    const [buttonText, setButtonText] = useState("Login")
    let clicked = false;

    // Remember me - state
    const [rememberMe, setRememberMe] = useState();

    const dispMessage = (message) => {
        setDisplayMessage(message);
        if (message) {
            setButton("bg-accountableDarkGreen");
            setButtonText("Error, Try Again");
        } else {
            setButton("bg-accountableDarkGreen")
            setButtonText("Success")
        }
        setDispClassName(message ?  "text-red-500 border-red-500 bg-red-300/10" : "text-green-500 border-green-500 bg-green-300/10");
    };

    // const onSubmit = async (values, actions) => {
    //     setIsLoading(true);
    //     // TO-DO: Send API request to server
    //     await axios
    //         .post("", {
    //             email: values.email,
    //             password: values.password,
    //         })
    //         .then((res) => {})
    //         .catch((err) => {});
    // };

    // const { values, errors, handleChange, handleSubmit } = useFormik({
    //     initialValues: {
    //         email: "",
    //         password: "",
    //     },
    //     validationSchema: LoginFormSchema,
    //     onSubmit,
    // });

    // const handleProvidersSignIn = async (provider) => {
    //     await signInWithProviders(provider)
    // }

    const ptrfunction = (checker) => {
        setPtr(checker)
    }

    const handleEMail = (e) => {
        setEMail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        clicked = true
        setButton(clicked ? "bg-amber-500" : "bg-accountableGrey")
        setButtonText("Wait")
        e.preventDefault()
        await LoginUserWithEmailAndPassword(eMail, password, dispMessage, ptrfunction)
    }

    if (ptr) {
        Router('/dashboard')
    }

    return (
        <form className="flex flex-col mt-10 items-center bg-accountableLightBackground dark:bg-accountableBlack">
            <div className="w-full relative my-1 lg:w-1/4">
                {displayMessage &&
                    <div role="alert" className={`alert ${dispClassName} rounded border-s-4 p-4`}>
                        <p className="mt-2 text-sm">
                            <div>{displayMessage}</div>
                        </p>
                    </div>}

                <input
                    className="w-full h-16 bg-cosretBlue-300 px-8 dark:text-accountableLightBackground text-accountableBlack text-sm mt-7 focus:outline-none border-[2px] rounded-lg bg-transparent border-[#CDCDCD] dark:border-accountableGrey placeholder:text-accountableBlack placeholder:dark:text-accountableLightBackground"
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleEMail}
                    placeholder="Email Address"
                />

            </div>
            <div className="w-full relative lg:w-1/4">
                <input
                    className="w-full h-16 bg-cosretBlue-300 px-8 dark:text-accountableLightBackground text-accountableBlack text-sm mt-7 focus:outline-none border-[2px] rounded-lg bg-transparent border-[#CDCDCD] dark:border-accountableGrey placeholder:text-accountableBlack placeholder:dark:text-accountableLightBackground"
                    id="password"
                    type="password"
                    name="password"
                    onChange={handlePassword}
                    placeholder="Password"
                />
            </div>

            {/* Action buttons */}
            <div className="w-full pt-5 lg:w-1/4">
                <button
                    className={`h-12 px-7 py-2 w-full font-bold dark:text-accountableLightBackground text-accountableBlack rounded-lg ${button} dark:bg-accountableGrey`}
                    onClick={handleSubmit}
                >
                    {buttonText}
                </button>
                {/* Don't have an account? */}
                <p className="text-center dark:text-accountableLightBackground text-accountableBlack mt-4">
                    Don't have an account?{" "}
                    <Link
                        to="/auth/signup"
                        className="text-accountableDarkGreen dark:text-accountableBrightGreen font-semibold"
                    >
                        Sign up
                    </Link>
                </p>
            </div>

            <div className="flex items-center my-7">
                <hr className="bg-gray-500 border-none h-[0.5px] w-40" />
                <p className="bg-gray-300 p-1 text-gray-500">OR</p>
                <hr className="bg-gray-500 border-none h-[0.5px] w-40" />
            </div>

            <div className="w-full lg:w-1/4 flex flex-col gap-y-4">
                <button
                    className="h-12 px-7 py-2 w-full rounded-lg bg-[#fff] dark:bg-accountableDarkBlack dark:text-accountableLightBackground text-accountableBlack flex items-center justify-center gap-x-3 border border-[#0D0D0D33]"

                >
                    <img src={googleLogo} alt="Sign in with Google" />
                    <span>Sign In With Google</span>
                </button>
                <button
                    className="h-12 px-7 py-2 w-full rounded-lg bg-[#fff] dark:bg-accountableDarkBlack dark:text-accountableLightBackground text-accountableBlack flex items-center justify-center gap-x-3 border border-[#0D0D0D33]"
                    onClick={() => {}}
                >
                    <img src={microsoftLogo} alt="Sign in with Google" />
                    <span>Sign In With Microsoft</span>
                </button>
                <button
                    className="h-12 px-7 py-2 w-full rounded-lg bg-[#fff] dark:bg-accountableDarkBlack dark:text-accountableLightBackground text-accountableBlack flex items-center justify-center gap-x-3 border border-[#0D0D0D33]"
                    onClick={() => {}}
                >
                    <img src={facebookLogo} alt="Sign in with Google" />
                    <span>Sign In With Facebook</span>
                </button>
            </div>

            <small className="mt-4 dark:text-accountableLightBackground text-accountableBlack">
                Google{" "}
                <a
                    href=""
                    target="_blank"
                    className="text-xs  underline underline-offset-2"
                >
                    Privacy Policy
                </a>{" "}
                and{" "}
                <a
                    href=""
                    target="_blank"
                    className="text-xs  underline underline-offset-2"
                >
                    Terms of Service
                </a>{" "}
                apply
            </small>
        </form>
    );
}

export default LoginForm;
