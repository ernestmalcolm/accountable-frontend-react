import { useContext, useState } from "react";
import { UserContext } from "../../";

// Icons
import uploadIcon from "../../../../../assets/icons/upload.svg";
import emailIcon from "../../../../../assets/icons/email.svg";
import galleryIcon from "../../../../../assets/icons/gallery.svg";
import pdfIcon from "../../../../../assets/icons/pdf.svg";

import { FiUpload } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFiletypeCsv, BsFileEarmarkImage } from "react-icons/bs";

export default function Contacts() {
    const { user, projects } = useContext(UserContext);
    const [uploadType, setUploadType] = useState();

    //   UPLOAD TYPE STATE
    const [isCustomerUpload, setIsCustomerUpload] = useState(false);
    const [isSupplierUpload, setIsSupplierUpload] = useState(false);

    return (
        <>
            {/* LATEST ACTIVITY */}
            <section className="mt-10 relative">
                <div className="flex flex-wrap gap-y-10 gap-x-5 justify-center items-center lg:justify-between w-full">
                    <div className="flex items-center justify-between w-full">
                        <button
                            className="bg-[#CDCDCD] dark:bg-[#323232]  rounded-lg w-28 h-10 p-2 text-sm "
                            onClick={() => {}}
                        >
                            CANCEL
                        </button>

                        <p className="font-bold text-xl">Upload Contacts</p>

                        <button
                            className="bg-[#CDCDCD] dark:bg-[#323232]  rounded-lg w-28 h-10 p-2 text-sm "
                            onClick={() => {}}
                            disabled
                        >
                            NEW
                        </button>
                    </div>

                    <div className="flex flex-col justify-center lg:justify-start">
                        <h3 className="text-xl uppercase">
                            Choose Which Contacts To Upload
                        </h3>
                        <div className="mt-5 flex items-center gap-x-7">
                            <button
                                className={`${
                                    isCustomerUpload
                                        ? "bg-accountableDarkGreen text-white"
                                        : "border-[0.5px] text-gray-500"
                                } border-[#CDCDCD] font-semibold dark:border-gray-500 rounded-lg w-44 h-24 p-2 text-sm`}
                                onClick={() => {
                                    setIsCustomerUpload(true);
                                    setIsSupplierUpload(false);
                                }}
                            >
                                CUSTOMER
                            </button>
                            <button
                                className={`${
                                    isSupplierUpload
                                        ? "bg-accountableDarkGreen text-white"
                                        : "border-[0.5px] text-gray-500"
                                } border-[#CDCDCD] font-semibold dark:border-gray-500 rounded-lg w-44 h-24 p-2 text-sm `}
                                onClick={() => {
                                    setIsCustomerUpload(false);
                                    setIsSupplierUpload(true);
                                }}
                            >
                                SUPPLIER
                            </button>
                        </div>
                    </div>

                    <div className="border-[2px] border-[#CDCDCD] dark:border-[#323232] w-full border-dashed min-h-[80vh] border-spacing-[10rem] text-center flex flex-col items-center justify-center">
                        {/* <img
                            src={uploadIcon}
                            alt=""
                            className="w-[200px] cursor-pointer"
                            onClick={() => {}}
                        /> */}

                        <FiUpload className="w-auto h-[200px] cursor-pointer text-[#CDCDCD]" />

                        <div className="mt-7 ">
                            <h2 className="font-bold text-2xl">Upload</h2>
                            <p className="text-gray-500 mt-2">
                                Email, PDF, From Device, Camera
                            </p>
                        </div>

                        <div className="flex items-center text-gray-500 dark:text-[#fff] gap-x-4 mt-7">
                            <MdOutlineMailOutline className="text-5xl" />
                            <BsFiletypeCsv className="text-5xl" />
                            <BsFileEarmarkImage className="text-5xl" />
                            {/* <img src={emailIcon} alt="" className="" />
                            <img src={pdfIcon} alt="" className="" />
                            <img src={galleryIcon} alt="" className="" /> */}
                        </div>

                        <div className="flex flex-col gap-y-4 mt-7 text-gray-500">
                            <p>
                                Drag and Drop your file here or click to select
                                one
                            </p>
                            <p className="lg:max-w-xl">
                                Fusce volutpat lectus et nisl consectetur
                                finibus. In vitae scelerisque augue, in varius
                                eros. Nunc sapien diam, euismod et pretium id,
                                volutpat et tortor. In vulputate lorem quis dui
                                vestibulum, vitae imperdiet diam bibendum.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
