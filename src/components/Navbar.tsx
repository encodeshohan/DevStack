import { useState } from "react";
import Logo from "../assets/logo-text.png";
import Hicon from "../assets/hamburger.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="container mx-auto px-4 py-4 primary-font">

            {/* Desktop Version */}
            <div className="hidden md:flex items-center justify-between">
                <div>
                    <img src={Logo} alt="Logo Image" />
                </div>

                <div className="flex items-center gap-8">
                    <a href="#" className="pink-color text-sm font-medium">Home</a>
                    <a href="#" className="slate-color text-sm font-medium">Technologies</a>
                    <a href="#" className="slate-color text-sm font-medium">Projects</a>
                    <a href="#" className="slate-color text-sm font-medium">About</a>
                    <a href="#" className="slate-color text-sm font-medium">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="bg-white text-[#334155] text-sm font-medium py-3 px-6 rounded-full">Sign In</button>
                    <button className="bg-[#D91B7E] text-white text-sm font-medium py-3 px-6 rounded-full">Sign Up</button>
                </div>
            </div>


            {/* Mobile Version */}
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 md:hidden">
                <button onClick={toggleMenu} className="flex items-center justify-center">
                    {isMenuOpen ? (
                        <span className="pink-color font-medium text-3xl"> × </span>) : (<img src={Hicon} alt="Menu" className="w-4 h-4"/>)}
                </button>
                <div className="flex justify-center">
                    <img src={Logo} alt="Logo Image" />
                </div>
                <div className="flex items-center gap-2">
                    <button className="bg-white text-[#334155] text-xs font-medium py-2 px-3 rounded-full">
                        Sign In
                    </button>
                    <button className="bg-[#D91B7E] text-white text-xs font-medium py-2 px-3 rounded-full">
                        Sign Up
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden mt-4 p-5">
                    <div className="flex flex-col gap-4">
                        <a href="#" className="pink-color text-sm font-medium">Home</a>
                        <a href="#" className="slate-color text-sm font-medium">Technologies</a>
                        <a href="#" className="slate-color text-sm font-medium">Projects</a>
                        <a href="#" className="slate-color text-sm font-medium">About</a>
                        <a href="#" className="slate-color text-sm font-medium">Contact</a>
                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
