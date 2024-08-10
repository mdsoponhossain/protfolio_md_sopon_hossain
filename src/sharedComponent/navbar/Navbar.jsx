import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Logo from "../../component/logo/Logo";
const Navbar = () => {
    const navItems = <>
        <li><a href="#home">Home</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#projects">Projects</a></li>
    </>
    return (
        <div className=" text-3xl max-w-[1280px] mx-auto">
            <div className="navbar bg-transparent">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden text-white font-bold">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=" menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-white bg-opacity-90 text-black font-bold ">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                    <Logo logoContainerStyle={"lg:flex hidden items-center theme"}></Logo>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Logo logoContainerStyle={"flex lg:hidden items-center theme theme"}></Logo>

                    <a target="_blank" href="https://github.com/mdsoponhossain">
                        <FaGithub className="lg:block hidden mr-2">
                        </FaGithub>
                    </a>

                    <a target="_blank" href="https://www.linkedin.com/in/md-sopon-hossain-840a26252">
                        <FaLinkedinIn className="lg:block hidden ml-2"></FaLinkedinIn>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;