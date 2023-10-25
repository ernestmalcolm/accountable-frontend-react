import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useFormik} from "formik";
import LoginFormSchema from "../LoginForm/validation";
import {signUpWithEmailAndPassword} from "../../utils/auth/requestAuthSupabase";

function RegisterForm() {
    const Router = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    // Remember me - state
    const [rememberMe, setRememberMe] = useState();
    const [eMail, setEMail] = useState("")
    const [password, setPassword] = useState("")
    // const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [alertMessage, setAlertMessage] = useState('');
    const [alertClassName, setAlertClassName] = useState('');
    const [button, setButton] = useState("bg-accountableDarkerGreen")
    const [buttonText, setButtonText] = useState("Sign up")
    const [ptr, setPtr] = useState("")

    const ptrfunct = (checker) => {
        setPtr(checker)
    }

    const displayAlert = (message) => {
        setAlertMessage(message);
        if (message.charAt(0)!=="Y") {
            setButton("bg-red-500");
            setButtonText("Error, Try again");
        } else {
            setButton("bg-green-500");
            setButtonText("Success")
        }
        setAlertClassName(message.charAt(0) === "U" || message.charAt(0) === "S" ? "text-red-500 border-red-500 bg-meta-7/10" : "text-green-500 border-green-500 bg-green-500/10");
    };


    // Laith
    const onSubmit = async (values, actions) => {
        setIsLoading(true);
        // TO-DO: Send API request to server
        await axios
            .post("", {
                email: values.email,
                password: values.password,
            })
            .then((res) => {
            })
            .catch((err) => {
            });
    };

    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginFormSchema,
        onSubmit,
    });
    // Laith

    const handleEmailAndPasswordSignIn = async (e) => {
        e.preventDefault();

        const isValidPassword = password.length >= 8;
        const validPassword = new RegExp('^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$')
        console.log(password)
        if (!isValidPassword) {
            displayAlert("Signup requires a valid password, should be longer than 8 characters");
        } else {
            console.log(validPassword.test(password))
            if (validPassword.test(password)){
                const returnSupabaseSignUp = await signUpWithEmailAndPassword(eMail, password, phoneNumber, firstName, lastName);
                displayAlert(returnSupabaseSignUp)
                ptrfunct(true)
            } else {
                displayAlert("Please check your password it have a capital letter, number and a special character and 8 characters")
                setAlertClassName("bg-red-500/10")
            }

        }
    }
    if (ptr) {
        setTimeout(() => {
            Router('/auth/login')
        }, 5000)
    }

    return (
        <form className="flex flex-col mt-5 items-center bg-accountableLightBackground dark:bg-accountableBlack">
            <div className="w-full relative my-1 lg:w-1/4">
                {alertMessage && <div role="alert" className={`alert ${alertClassName} rounded border-s-4 p-4`}>
                    <p className="mt-2 text-sm">
                        <div>{alertMessage}</div>
                    </p>
                </div>}
                <input
                    className="w-full h-16 bg-cosretBlue-300 px-8 dark:text-accountableLightBackground text-accountableBlack text-sm mt-7 focus:outline-none border-[2px] rounded-lg bg-transparent border-[#CDCDCD] dark:border-accountableGrey placeholder:text-accountableBlack placeholder:dark:text-accountableLightBackground"
                    id="firstName"
                    type="text"
                    name="firstName"
                    // value={values.email}
                    onChange={event => setFirstName(event.target.value)}
                    placeholder="First Name"
                />

                <input
                    className="w-full h-16 bg-cosretBlue-300 px-8 dark:text-accountableLightBackground text-accountableBlack text-sm mt-7 focus:outline-none border-[2px] rounded-lg bg-transparent border-[#CDCDCD] dark:border-accountableGrey placeholder:text-accountableBlack placeholder:dark:text-accountableLightBackground"
                    id="lastName"
                    type="text"
                    name="lastName"
                    // value={values.email}
                    onChange={event => setLastName(event.target.value)}
                    placeholder="Last Name"
                />

                <input
                    className="w-full h-16 bg-cosretBlue-300 px-8 dark:text-accountableLightBackground text-accountableBlack text-sm mt-7 focus:outline-none border-[2px] rounded-lg bg-transparent border-[#CDCDCD] dark:border-accountableGrey placeholder:text-accountableBlack placeholder:dark:text-accountableLightBackground"
                    id="email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={event => setEMail(event.target.value)}
                    placeholder="Email Address"
                />

                <input
                    className="w-full h-16 bg-cosretBlue-300 px-8 dark:text-accountableLightBackground text-accountableBlack text-sm mt-7 focus:outline-none border-[2px] rounded-lg bg-transparent border-[#CDCDCD] dark:border-accountableGrey placeholder:text-accountableBlack placeholder:dark:text-accountableLightBackground"
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    // value={values.email}
                    onChange={event => setPhoneNumber(event.target.value)}
                    placeholder="Phone Number"
                />

                <input
                    className="w-full h-16 bg-cosretBlue-300 px-8 dark:text-accountableLightBackground text-accountableBlack text-sm mt-7 focus:outline-none border-[2px] rounded-lg bg-transparent border-[#CDCDCD] dark:border-accountableGrey placeholder:text-accountableBlack placeholder:dark:text-accountableLightBackground"
                    id="password"
                    type="password"
                    name="password"
                    // value={values.password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Password"
                />

                {/*<input*/}
                {/*    className="w-full h-16 bg-cosretBlue-300 px-8 dark:text-accountableLightBackground text-accountableBlack text-sm mt-7 focus:outline-none border-[2px] rounded-lg bg-transparent border-[#CDCDCD] dark:border-accountableGrey placeholder:text-accountableBlack placeholder:dark:text-accountableLightBackground"*/}
                {/*    id="passwordConfrm"*/}
                {/*    type="password"*/}
                {/*    name="passwordConfirm"*/}
                {/*    // value={values.password}*/}
                {/*    onChange={event => setPasswordConfirmation(event.target.value)}*/}
                {/*    placeholder="Confirm Password"*/}
                {/*/>*/}

            </div>

            {/* Action buttons */}
            <div className="w-full lg:w-1/4">
                <button
                    className={`h-12 px-7 py-2 w-full font-bold dark:text-accountableLightBackground text-accountableBrightGreen rounded-lg ${button} dark:bg-accountableGrey`}
                    onClick={handleEmailAndPasswordSignIn}
                >
                    {buttonText}
                </button>
                {/* Don't have an account? */}
                <p className="text-center dark:text-accountableLightBackground text-accountableBlack mt-4">
                    have an account?{" "}
                    <Link
                        to="/auth/login"
                        className="text-accountableDarkGreen dark:text-accountableBrightGreen font-semibold"
                    >
                        Sign in
                    </Link>
                </p>
            </div>

            <small className="mt-4 dark:text-accountableLightBackground text-accountableBlack">
                Google{" "}
                <a
                    href=""
                    target="_blank"
                    className="text-xs underline underline-offset-2"
                >
                    Privacy Policy
                </a>{" "}
                and{" "}
                <a
                    href=""
                    target="_blank"
                    className="text-xs underline underline-offset-2"
                >
                    Terms of Service
                </a>{" "}
                apply
            </small>
        </form>
    )
}

export default RegisterForm