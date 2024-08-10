import Modal from '../modal/Modal';
import './projectsCard.css'
const ProjectsCard = ({ project }) => {
	return (
		<div className="card bg-slate-800 p-2 md:p-5 lg:p-10 shadow-md rounded-md card-container">
			<div className="imgContainer">
				<img className={project?.translate}
					src={project?.image}
					alt="img" />
			</div>
			<div>
				<div className="px-2 border border-black bg-slate-800 text-center py-5 text-white grid grid-cols-2 gap-2 md:gap-0 md:grid-cols-4 justify-between ">
					<a target='_blank' href={project?.preview} className='custom-btn'>Preview</a>
					<div className='custom-btn' onClick={() => document.getElementById(`${project?.id}`).showModal()}>Details</div>
					<Modal project={project}></Modal>
					<a target='_blank' href={project?.client} className='custom-btn'>Client</a>
					<a target='_blank' href={project?.server} className='custom-btn'>Server</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectsCard;