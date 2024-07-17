import './skillCard.css'
const SkillCard = ({skill}) => {
    console.log(skill?.skill)
    return (
        <div>
            <div className="card skill-card bg-white  shadow-xl rounded-md">
                <div className="card-body">
                    <div className="grid justify-center items-center">
                        <img className="w-[80px] h-[80px]" src={skill?.img} alt="" />
                    </div>
                    <div className="border-2 border-black h-2">
                        <div className={`h-full w-[${skill?.skill}%] bg-red-800`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;