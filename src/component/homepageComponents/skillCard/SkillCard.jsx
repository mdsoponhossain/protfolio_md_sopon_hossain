import './skillCard.css'
const SkillCard = ({skill}) => {
    return (
        <div className='overflow-hidden'>
            <div className="card skill-card bg-white  shadow-xl rounded-md">
                <div className="card-body">
                    <div className="grid justify-center items-center">
                        <img className="w-[80px] h-[80px]" src={skill?.img} alt="loading..." />
                    </div>
                    <h4 className='text-black' >{skill.name}</h4>
                    <div className="border-2 border-black h-3 rounded-md">
                        <div className={skill?.skill}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;