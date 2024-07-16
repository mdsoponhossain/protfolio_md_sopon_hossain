import ProjectsCard from "../../../sharedComponent/projectsCard/ProjectsCard";

const MyProjects = () => {
    return (
        <div id="projects" className="h-fit py-5 lg:py-0 lg:h-[800px] bg-slate-900 pt-10 grid justify-center items-center">
            <div className="max-w-[1280px] mx-auto">
                <div className="mx-2 md:mx-4 lg:mx-0 md:m-0 grid gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-6">
                    <ProjectsCard></ProjectsCard>
                    <ProjectsCard></ProjectsCard>
                    <ProjectsCard></ProjectsCard>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;