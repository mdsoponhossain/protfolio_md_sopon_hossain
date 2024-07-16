import Button from "../../../sharedComponent/button/Button";

const AboutMe = () => {
    return (
        <div className="h-fit md:h-[800px] bg-black grid justify-center items-center">
            <div className="p-2 md:flex  gap-5 max-w-[1280px] mx-auto border-4 border-white text-white justify-between items-center">
                <img className="img mt-5 md:mt-0   h-[200px] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full" src="./portfolio_img-removebg-preview.png" alt="Md Sopon Hossain" />
                <div className="w-full md:w-[60%] ">
                    <p className="text-justify mt-5 md:mt-0">I'm Md Sopon Hossain an enthusiastic MERN Stack developer. I've honed my skills in React.js, Express.js, MongoDB, and the MERN (MongoDB, Express.js, React.js, Node.js) stack, alongside mastering the essentials of JavaScript, HTML, and CSS. I've also dabbled in crafting responsive designs with Tailwind CSS and explored authentication using Firebase. As a junior developer, I approach coding with enthusiasm and a thirst for knowledge. I understand the importance of writing maintainable and scalable code and stay updated on the latest trends in web development. Beyond coding, you'll find me exploring emerging technologies, actively participating in the developer community, and soaking up knowledge like a sponge.</p>
                    <div className="flex gap-2 mt-10">
                        <Button></Button>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;