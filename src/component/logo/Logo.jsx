import './logo.css'
const Logo = ({logoContainerStyle}) => {
    return (
        <div id='logoFont' className={logoContainerStyle}>
            <h3 className="text-3xl lobster-regular">Md</h3>
            <div className="text-xs line-s leading-[12px]">
                <p className='lobster-regular'>Sopon</p>
                <p className='lobster-regular'>Hossain</p>
            </div>
        </div>
    );
};

export default Logo;