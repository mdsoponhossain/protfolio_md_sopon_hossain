import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-black bg-opacity-85 h-fit py-5 md:py-0 md:h-[300px]">
            <div className="max-w-[1280px] mx-auto text-white grid justify-center items-center h-full ">
                <div>
                    <ul className="flex gap-3 px-2 md:px-0 text-sm md:text-xl">
                        <li className="border-r-2 border-white pr-3">Home</li>
                        <li className="border-r-2 border-white pr-3">Contact Me</li>
                        <li className="border-r-2 border-white pr-3">Projects</li>
                        <li>About Me</li>
                    </ul>
                    <div className="text-3xl font-bold flex justify-center items-center gap-3 mt-3">
                        <FaGithub></FaGithub>
                        <FaLinkedin></FaLinkedin>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;