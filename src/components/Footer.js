import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="flex flex-col items-center bg-[#003D29] text-center lg:text-left mx-auto">
            <div className="container p-7 text-white max-w-[1240px]">
                <div className="grid place-items-start sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {/* First links section */}
                    <div className="grid mb-6 text-left sm:place-self-start">
                        <h5 className="mb-4 text-2xl font-bold uppercase text-white font-size-2xl">COMPANY</h5>

                        <ul className="m-0 list-non text-xl">
                            <li className="mb-2">
                                <a href="#!" className="text-white">
                                    About
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white">
                                    Careers
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white">
                                    Brand Center
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Second links section */}
                    <div className="mb-6 text-left sm:place-self-start">
                        <h5 className="mb-4 text-2xl font-bold uppercase text-white">LEGAL</h5>

                        <ul className="mb-0 list-none text-xl">
                            <li className="mb-2">
                                <a href="#!" className="text-white">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white">
                                    Licensing
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Third links section */}
                    <div className="mb-6 text-left sm:place-self-start">
                        <h5 className="mb-4 text-2xl font-bold uppercase text-white text">GET IN TOUCH </h5>

                        <ul className="mb-0 list-none text-xl">
                            <li className="mb-2">
                                <span className="text-white">
                                    <p>
                                        Email:{" "}
                                        <a href="mailto:youremail@example.com" className="text-white">
                                            youremail@example.com
                                        </a>
                                    </p>
                                </span>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white">
                                    <p>Phone: +123-456-7890</p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white">
                                    <p>Address: Skanderbeg Square, Tirana, Albania</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Fourth links section */}
                    <div className="mb-6 text-left sm:place-self-start">
                        <h5 className="mb-4 text-2xl font-bold uppercase text-white">FOLLOW US</h5>

                        <ul className="mb-0 list-none text-xl ">
                            <li className="gap-2 mb-2 space-x-5">
                                <a href="#!" className="text-white ">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="#!" className="text-white ">
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <span className="sr-only  ">Twitter page</span>
                                </a>
                                <a href="#!" className="text-white ">
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <span className="sr-only">Instagram page</span>
                                </a>
                            </li>

                            <li className="border rounded-md p-2 w-full md:w-auto">
                                <form className="max-w-full md:w-auto newsletter-form flex">
                                    <input type="email" placeholder="Enter your email" className="rounded-md border-none px-2 py-1 mr-2 focus:outline-none" />
                                    <button type="submit" className="bg-[#FFD700] text-[#003D29] px-4 py-2 rounded-md">
                                        Subscribe
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className="w-full bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700">
                © 2023 Copyright:
                <a href="https://www.linkedin.com/in/lukacenga/" className="text-neutral-800 ml-3 dark:text-neutral-400">
                    trendz
                </a>
            </div>
        </footer>
    );
}

export default Footer;
