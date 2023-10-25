import accountableLogo from "../../../assets/logos/accountable-logo.png";
import LoginForm from "../../../forms/LoginForm";
import React from "react";
import RegisterForm from "../../../forms/RegisterForm";

function RegisterPage() {
    return(
        <div className="py-10 lg:px-20 px-10 bg-accountableLightBackground dark:bg-accountableBlack min-h-screen ">
            {/* Form */}
            <div className="p-10 rounded-xl">
                <div className="mx-auto text-center flex flex-col items-center">
                    <img
                        src={accountableLogo}
                        alt="Solynta Academy"
                        className="w-[250px]"
                    />
                </div>
                <div>
                    <div className="text-center my-2">
                        <h2
                            className={`font-bold text-3xl dark:text-accountableLightBackground text-accountableBlack text-center`}
                        >
                            Sign Up
                        </h2>
                    </div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;