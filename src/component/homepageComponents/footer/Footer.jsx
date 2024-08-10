import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-black bg-opacity-85 h-fit py-5 md:py-0 md:h-[300px]">
            <div className="max-w-[1280px] mx-auto text-white grid justify-center items-center h-full ">
                <div>
                    <ul className="flex gap-3 px-2 md:px-0 text-sm md:text-xl">
                        <li className="border-r-2 border-white pr-3"><a href="#home">Home</a></li>
                        <li className="border-r-2 border-white pr-3"><a href="#about-me">About Me</a></li>
                        <li className="border-r-2 border-white pr-3"><a href="#contact">Contact</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                    <div className="text-3xl font-bold flex justify-center items-center gap-3 mt-3">
                        <a target="_blank" href="https://github.com/mdsoponhossain">
                            <FaGithub className="lg:block hidden mr-1">
                            </FaGithub>
                        </a>

                        <a target="_blank" href="https://www.linkedin.com/in/md-sopon-hossain-840a26252">
                            <FaLinkedinIn className="lg:block hidden ml-1"></FaLinkedinIn>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;