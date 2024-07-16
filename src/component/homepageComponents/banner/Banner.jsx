import Button from '../../../sharedComponent/button/Button';
import './banner.css'

const Banner = () => {
    return (
        <div
            className="hero h-[100vh] relative bg-no-repeat bg-cover bg-fixed grid justify-start"
            style={{
                backgroundImage: "url(./portfolio_banner_img_1.webp)",
            }}>
            <div className="hero-overlay bg-opacity-70 absolute w-full h-full bg-black">
                <div className="border-4 border-white relative top-[20%] h-fit md:h-[70%] max-w-[1280px] mx-auto text-white grid items-center">
                    <div className="border-4 border-green-700 h-fit flex-col md:flex-row md:flex justify-between items-center p-2">
                        <div className="">
                            <h1>Hello, I am <br /><span className="text-5xl banner_name font-bold">Md Sopon Hossain</span></h1>
                            <p className="my-5">I am a MERN Stack developer.I approach coding with enthusiasm</p>
                            {/* custom button */}
                            <Button btnText={'Resume'}></Button>
                        </div>

                    
                            <img className=" img mt-5 md:mt-0  w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full" src="./portfolio_img-removebg-preview.png" alt="Md Sopon Hossain" />
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;