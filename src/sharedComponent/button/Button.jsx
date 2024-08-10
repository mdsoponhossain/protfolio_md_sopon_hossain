import './button.css'
const Button = ({ btnText}) => {
    return (
        <button className='button'>
            <span className='flex items-center gap-2 text-sm md:text-2xl'>{btnText}</span>
            <i></i>
            <i className="two"></i>
            <i id="three"></i>
        </button>
    );
};

export default Button;