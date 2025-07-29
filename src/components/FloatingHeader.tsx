import { useState } from "react";
import nameLogo from "../assets/Anil Rai.svg";

const FloatingHeader: React.FC = () => {
    const [mobileMenuOpen, updateMobileMenuOpen] = useState(false);
    
    const toggleMobileMenu = () => updateMobileMenuOpen(!mobileMenuOpen);

    return (
        <header className="z-20 flex justify-center items-center">
            <div className="fixed top-5 right-1/2 translate-x-1/2 max-w-full hidden sm:flex py-4 px-8 mx-2 border border-black/10 rounded-full bg-white">
                <nav className="text-xs sm:text-sm">
                    <ul className="flex flex-1 flex-row items-center">
                        <li className='mx-3 cursor-pointer'>
                            <a href="#hi">Hi</a>
                        </li>
                        <li className="mx-3 cursor-pointer">
                            <a href="#experience">Experience</a>
                        </li>
                        <li className="mx-3 cursor-pointer">
                            <a href="#skillset">Skills</a>
                        </li>
                        <li className="mx-3 cursor-pointer">
                            <a href="#education-section">Certifications</a>
                        </li>
                        <li className="mx-3 cursor-pointer">
                            <a href="#blogs-section">Blogs</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={`mobile-overlay fixed top-0 flex-1 w-screen min-h-[100dvh] transition-all${mobileMenuOpen ? ' backdrop-blur-md' : ''}`}></div>
            {/* Mobile Nav */}
            <div className="fixed top-3 right-1/2 translate-x-1/2 w-10/12 sm:hidden flex flex-row items-center justify-between py-4 px-8 mx-2 border border-black/10 rounded-full bg-white" id="mobile-nav">
                <a href="/" className="mr-4">
                    <img src={nameLogo.src} className="w-24" />
                </a>

                <button onClick={toggleMobileMenu} data-collapse-toggle="mobile-navbar" type="button" className="w-7 h-7" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path d="M4 6H20M4 12H14M4 18H9" stroke="#696969" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {/* <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg> */}
                </button>

                <nav className={`${!mobileMenuOpen ? 'hidden ' : ''}absolute top-20 rounded-3xl p-8 left-0 bg-white border border-black/10 w-full`} id="mobile-navbar">
                    <ul className="">
                        <li className='mb-2 cursor-pointer' onClick={toggleMobileMenu}>
                            <a href="#hi">Hi</a>
                        </li>
                        <li className="mb-2 cursor-pointer" onClick={toggleMobileMenu}>
                            <a href="#experience">Experience</a>
                        </li>
                        <li className="mb-2 cursor-pointer" onClick={toggleMobileMenu}>
                            <a href="#skillset">Skills</a>
                        </li>
                        <li className="mb-2 cursor-pointer" onClick={toggleMobileMenu}>
                            <a href="#education-section">Certifications</a>
                        </li>
                        <li className="mb-2 cursor-pointer" onClick={toggleMobileMenu}>
                            <a href="#blogs-section">Blogs</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default FloatingHeader;