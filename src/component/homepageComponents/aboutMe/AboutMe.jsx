import Button from "../../../sharedComponent/button/Button";
import HeadingComponent from "../../../sharedComponent/headingComponent/HeadingComponent";

const AboutMe = () => {
    return (
        <div id="about-me" className="h-fit md:py-20 bg-black bg-opacity-70 grid justify-center items-center">
           <HeadingComponent text={'About Me'}></HeadingComponent>
            <div className="px-2  md:mt-10 md:flex  gap-5 max-w-[1280px] mx-auto text-white justify-between items-center">
                <img 
                className="img mt-5 md:mt-0 hidden md:block   w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full image-animation" 
                src="./portfolio_img-removebg-preview.png" alt="Md Sopon Hossain" />
                <div className="w-full md:w-[60%] ">
                    <p className="text-justify mt-5 md:mt-0">I'm Md Sopon Hossain an enthusiastic MERN Stack developer. I've honed my skills in React.js, Express.js, MongoDB, and the MERN (MongoDB, Express.js, React.js, Node.js) stack, alongside mastering the essentials of JavaScript, HTML, and CSS. I've also dabbled in crafting responsive designs with Tailwind CSS and explored authentication using Firebase. As a junior developer, I approach coding with enthusiasm and a thirst for knowledge. I understand the importance of writing maintainable and scalable code and stay updated on the latest trends in web development. Beyond coding, you'll find me exploring emerging technologies, actively participating in the developer community, and soaking up knowledge like a sponge.</p>
                    <div className="flex gap-2 justify-between md:justify-start items-center lg:gap-10 mt-10 px-3 md:px-0">
                        <Button btnText={'Github'}></Button>
                        <Button btnText={'Linkedin'}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;