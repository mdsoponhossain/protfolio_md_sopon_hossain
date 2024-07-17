import AboutMe from "../../component/homepageComponents/aboutMe/AboutMe";
import Banner from "../../component/homepageComponents/banner/Banner";
import MyProjects from "../../component/homepageComponents/banner/MyProjects";
import ContactMe from "../../component/homepageComponents/contactMe/ContactMe";
import MySkills from "../../component/homepageComponents/mySkills/MySkills";
import Navbar from "../../sharedComponent/navbar/Navbar";

const Home = () => {
    return (
        <div className="relative bg-no-repeat bg-cover bg-fixed" id="home" style={{
            backgroundImage: "url(./portfolio_banner_img_1.webp)",
        }} >
            <div  className='absolute top-0 z-30 w-full text-white' >
                <Navbar/>
            </div>
            <Banner />
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
            <MySkills></MySkills>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;