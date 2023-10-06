import React, { useRef } from "react";
import accountableLogo from "../../../assets/logos/accountable-logo.png";
import LoginForm from "../../../forms/LoginForm";

function LoginPage() {
    return (
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
                    <div className="text-center my-10">
                        <h2
                            className={`font-bold text-3xl dark:text-accountableLightBackground text-accountableBlack text-center`}
                        >
                            Sign In
                        </h2>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
