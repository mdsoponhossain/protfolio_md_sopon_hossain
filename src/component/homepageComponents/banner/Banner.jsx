import { RiDownloadFill } from 'react-icons/ri';
import './banner.css'

const Banner = () => {
    return (
        <div
            className="hero h-[700px] relative  grid justify-start"
           >
            <div className="hero-overlay bg-opacity-70 absolute grid items-center w-full h-full bg-black">
                <div className=" h-fit md:h-[70%] xl:w-[1280px] mx-auto text-white grid items-center">
                    <div className=" h-fit flex-col md:flex-row md:flex justify-between items-center p-2 gap-3">
                        <div className="">
                            <h1>Hello, I am <br /><span className="text-5xl banner_name font-bold">Md Sopon Hossain</span></h1>
                            <p className="my-5">I am a MERN Stack developer.I approach coding with enthusiasm</p>
                            {/* custom button */}
                            <button>
                                <span className='flex items-center gap-2'>Resume <RiDownloadFill /> </span>
                                <i></i>
                                <i className="two"></i>
                                <i id="three"></i>
                            </button>
                        </div>


                        <img className=" img mt-20 md:mt-0  w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full" src="./portfolio_img-removebg-preview.png" alt="Md Sopon Hossain" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;