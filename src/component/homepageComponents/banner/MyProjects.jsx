import { useEffect, useState } from "react";
import HeadingComponent from "../../../sharedComponent/headingComponent/HeadingComponent";
import ProjectsCard from "../../../sharedComponent/projectsCard/ProjectsCard";

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('./projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
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