const Logo = ({logoContainerStyle}) => {
    return (
        <div className={logoContainerStyle}>
            <h3 className="text-3xl">Md</h3>
            <div className="text-xs line-s leading-[12px]">
                <p>Sopon</p>
                <p>Hossain</p>
            </div>
        </div>
    );
};

export default Logo;