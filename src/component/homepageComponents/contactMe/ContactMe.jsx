import Button from "../../../sharedComponent/button/Button";
import HeadingComponent from "../../../sharedComponent/headingComponent/HeadingComponent";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const ContactMe = () => {
    return (
        <div id="contact" className="h-fit bg-black py-10 text-white md:py-20 bg-opacity-70">
            <HeadingComponent text={'Contact Me'}></HeadingComponent>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-2 mt-5 md:mt-10 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2 w-full ">
                        <h2 className="text-xl font-bold leading-tight lg:text-5xl mb-2 md:mb-8">Get in touch!</h2>
                        <div >
                            {/* contact info */}
                            <div className="flex gap-2 md:gap-4 my-3 lg:gap-6 items-center">
                                <IoMdCall className="text-sm md:text-2xl font-bold"></IoMdCall>
                                <p>+8801995701288</p>
                            </div>
                            <div className="flex gap-2 md:gap-4 my-3 lg:gap-6 items-center">
                                <MdOutlineEmail className="text-sm md:text-2xl font-bold"></MdOutlineEmail>
                                <p>mdsoponhossain2388@gmail.com</p>
                            </div>
                            <div className="flex gap-2 md:gap-4 my-3 lg:gap-6 items-center">
                                <IoLocationOutline className="text-sm md:text-2xl font-bold"></IoLocationOutline>
                                <p>Dohar,Dhaka-1330, Bangladesh</p>
                            </div>
                           
                            
                        </div>
                    </div>
                </div>
                <form noValidate="" className="space-y-6 ">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full text-black p-3 rounded " />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full text-black p-3 rounded " />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full text-black p-3 rounded "></textarea>
                    </div>

                    <div className="w-full grid justify-center">
                        <Button btnText={'Send Message'}></Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;