import { RiDownloadFill } from 'react-icons/ri';
import Typewriter from 'typewriter-effect';
import './banner.css'

const Banner = () => {
     const resume_url = "https://portfolio-md-sopon-hossain.web.app/resume_md_sopon_hossain.pdf"
    const download_resume = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a');
        aTag.href = resume_url ;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    
    }
    return (
        <div
            className="hero h-[700px] relative  grid justify-start"
        >
            <div className="hero-overlay bg-opacity-70 absolute grid items-center w-full h-full bg-black">
                <div className=" h-fit md:h-[70%] xl:w-[1280px] mx-auto text-white grid items-center pl-2 md:pl-0">
                    <div className=" h-fit flex-col md:flex-row md:flex justify-between items-center p-2 gap-3">
                        <div>
                            <h1>Hello, I am <br /><span className="text-5xl banner_name font-bold">Md Sopon Hossain</span></h1>
                            <span className="my-5 flex gap-3 text-lg"> I am a
                                <Typewriter
                                    options={{
                                        strings: ['Mern Stack developer ', 'react developer', 'javascript developer', 'backend developer', 'web developer'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                    }}
                                />
                            </span>
                            {/* custom button */}
                            <div className='button w-fit' onClick={()=>download_resume(resume_url)}>
                                <span className='flex items-center gap-2'>Resume <RiDownloadFill /> </span>
                                <i></i>
                                <i className="two"></i>
                                <i id="three"></i>
                            </div>
                        </div>


                        <img
                            className=" image-animation img mt-20 md:mt-0  w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full pl-6 md:pl-0"
                            src="./portfolio_img-removebg-preview.png" alt="Md Sopon Hossain" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;