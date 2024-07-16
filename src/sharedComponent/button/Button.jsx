import './button.css'
import { RiDownloadFill } from "react-icons/ri";
const Button = ({ btnText}) => {
    return (
        <button href="">
            <span className='flex items-center gap-2'>{btnText}<RiDownloadFill/> </span>
            <i></i>
            <i className="two"></i>
            <i id="three"></i>
        </button>
    );
};

export default Button;