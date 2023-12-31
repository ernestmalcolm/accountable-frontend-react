import { FaBars, FaTimes } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "..";
import DashboardNav from "../DashboardNav";
import accountableLogo from "../../../../assets/logos/accountable-logo.png";

export default function DashboardNavbar(props) {
    const [isNavHidden, setIsNavHidden] = useState(true);

    // Get user from user context
    const { user } = useContext(UserContext);

    return (
        <>
            {/* Nabvar */}
            <div className="bg-accountableLightBackground dark:bg-black lg:hidden w-full flex justify-between items-center px-10 py-7">
                <h1 className="text-accountableBrightGreen font-bold text-xl uppercase">
                    Accountable
                </h1>
                <div className="lg:hidden">
                    {isNavHidden ? (
                        <FaBars
                            size={25}
                            color="#fff"
                            className="cursor-pointer"
                            onClick={() => setIsNavHidden(false)}
                        />
                    ) : (
                        <FaTimes
                            size={25}
                            color="#fff"
                            className="cursor-pointer"
                            onClick={() => setIsNavHidden(true)}
                        />
                    )}
                </div>
            </div>

            <DashboardNav
                user={user}
                isNavHidden={isNavHidden}
                setIsNavHidden={setIsNavHidden}
                page={props?.page}
            />
        </>
    );
}
