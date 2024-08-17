import { useEffect, useState } from "react";
import Home from "../pages/home/Home";
import Logo from "../component/logo/Logo";
import  './layout.css'

const Layout = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2100);
    }, []);

    if (isLoading) {
        return (
            <div className="h-[100vh] bg-black flex justify-center items-center">
                <Logo logoContainerStyle={"flex items-center loading-animation"}></Logo>
            </div>
        )
    }

    return (
        <div>
            <Home />
        </div>
    );
};

export default Layout;