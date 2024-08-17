import Button from "../../../sharedComponent/button/Button";
import HeadingComponent from "../../../sharedComponent/headingComponent/HeadingComponent";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contactMe.css"
const ContactMe = () => {
    const notify = (text) => toast(text);
    //  sending email function
    const handle_email = async (e) => {
        e.preventDefault();
        const field = e.target;
        const name = field.name.value;
        const email = field.email.value;
        const message = field.message.value;
        const data = { name, email, message };
        console.log(data)
        // fetch('http://localhost:5000/message', {
        // fetch('https://my-portfolio-server-liard.vercel.app/message', {
        fetch('https://portfolio-server-production-3379.up.railway.app/message', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.message === 'successful') {
                    notify("Message is sent to Md Sopon Hossain");
                    // clearing the form data:
                    field.name.value = '';
                    field.email.value = '';
                    field.message.value = '';
                } else {
                    notify("Something wrong! Try again later...");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                notify("Failed to send message. Please try again later.");
            });
    }


    return (
        <div id="contact" className="h-fit bg-black py-10 text-white md:py-20 bg-opacity-70">
            <ToastContainer />
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
                <form onSubmit={handle_email} className="space-y-6 contact-me ">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" name="name" type="text" placeholder="Type your name here" className="w-full text-black p-3 rounded " required />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" name="email" placeholder="Type your email here" type="email" className="w-full text-black p-3 rounded " required />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" name="message" placeholder="Write your message here" rows="3" className="w-full text-black p-3 rounded " required ></textarea>
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