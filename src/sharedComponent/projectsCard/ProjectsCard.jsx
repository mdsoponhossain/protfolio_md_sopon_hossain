import './projectsCard.css'
const ProjectsCard = () => {
	return (
		<div className="card bg-slate-800 p-2 md:p-5 lg:p-10 shadow-md rounded-md card-container">
			<div className="imgContainer">
				<img
					src="./www.shopify.com_blog_best-ecommerce-sites.png"
					alt="img" />
			</div>
			<div>
				<div className="px-2 border border-black bg-slate-800 text-center py-5 text-white grid grid-cols-2 gap-2 md:gap-0 md:grid-cols-4 justify-between ">
					<div className='custom-btn'>Preview</div>
					<div className='custom-btn'>Details</div>
					<div className='custom-btn'>Client</div>
					<div className='custom-btn'>Server</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsCard;