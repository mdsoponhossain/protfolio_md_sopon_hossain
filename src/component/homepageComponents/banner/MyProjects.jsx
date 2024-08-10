import HeadingComponent from "../../../sharedComponent/headingComponent/HeadingComponent";
import ProjectsCard from "../../../sharedComponent/projectsCard/ProjectsCard";

const MyProjects = () => {
const projects = [
    {
        name: "homifyestate",
        image: "https://i.ibb.co/wwM8vzj/homifyestate-8556d-web-app.jpg",
        preview: "https://homifyestate-8556d.web.app/",
        client: "https://github.com/mdsoponhossain/team-project-homifyState-client",
        server: "https://github.com/mdsoponhossain/team-project-homifyState-server",
        translate: "hover:translate-y-[-670px] md:hover:translate-y-[-1500px] ease-in-out duration-[10000ms] transition"
    },
    {
        name: "stayNest",
        image: "https://i.ibb.co/fYPp429/stay-nest-app-web-app.jpg",
        preview: "https://stay-nest-app.web.app",
        client: "https://github.com/mdsoponhossain/stay-nest-app",
        server: "https://github.com/mdsoponhossain/stay-nest-app-server",
        translate: "hover:translate-y-[-450px] md:hover:translate-y-[-900px] ease-in-out duration-[6000ms] transition"
    },
    {
        name: "collegeCorner",
        image: "https://i.ibb.co/fHYLRJy/college-corner-web-app.jpg",
        preview: "https://college-corner.web.app",
        client: "https://github.com/mdsoponhossain/college-corner",
        server: "https://github.com/mdsoponhossain/college-corner-server",
        translate: "hover:translate-y-[-210px] md:hover:translate-y-[-530px] ease-in-out duration-[6000ms] transition"
    }
]
    return (
        <div id="projects" className="h-fit md:py-20 lg:h-fit bg-black bg-opacity-70 pt-10 grid justify-center items-center">
            <HeadingComponent text={'My Projects'}></HeadingComponent>
            <div className="max-w-[1280px] mx-auto  md:mt-10">
                <div className="px-2 mt-7 md:mt-0 md:mx-4 lg:mx-0 md:m-0 grid gap-5 md:grid-cols-2 md:gap-7 lg:grid-cols-2 lg:gap-10">
                    {
                        projects?.map((project, index)=><ProjectsCard project={project} key={index}></ProjectsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProjects;