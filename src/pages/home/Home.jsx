import AboutMe from "../../component/homepageComponents/aboutMe/AboutMe";
import Banner from "../../component/homepageComponents/banner/Banner";
import Navbar from "../../sharedComponent/navbar/Navbar";

const Home = () => {
    return (
        <div className="relative" id="home">
            <div  className='absolute top-0 z-30 w-full border-4 border-blue-500 text-white' >
                <Navbar/>
            </div>
            <Banner />
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;