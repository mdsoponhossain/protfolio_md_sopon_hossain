
const Modal = ({project}) => {
    return (
        <>
            <dialog id={project?.id} className="modal text-black text-start">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{project?.name}</h3>
                    <p className="py-4">{project?.details}</p>
                    <ul className="list-disc pl-4">
                        {
                            project?.bullet_points?.map((point,index)=><li key={index}>{point}</li>)
                        }
                    </ul>
                    <div className="mt-3  overflow-auto">
                        {
                            project?.tags?.map((tag,index)=><span className="px-1" key={index}>#{tag}</span>)
                        }
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Modal;