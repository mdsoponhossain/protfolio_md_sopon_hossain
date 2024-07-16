import './projectsCard.css'
const ProjectsCard = () => {
	return (
		<div className="card bg-base-100 p-3 shadow-md rounded-md card-container">
			<div className="imgContainer py-3">
				<img
					src="./www.shopify.com_blog_best-ecommerce-sites.png"
					alt="img" />
			</div>
			<div>
				<div className="px-2 border-4 py-5 bg-yellow-300 grid grid-cols-3 justify-between ">
					<div className='custom-btn'>Preview</div>
					<div className='custom-btn'>Client</div>
					<div className='custom-btn'>Server</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsCard;