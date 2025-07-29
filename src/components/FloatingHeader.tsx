const FloatingHeader: React.FC = () => {
    return (
        <header className="fixed top-5 left-1/2 -translate-x-1/2 z-20 max-w-full">
            <div className="border border-black/10 rounded-full bg-white flex flex-row items-center py-4 px-8 mx-2">
                <ul className='custom-menu-ul flex flex-1 md:ml-6 text-xs sm:text-sm'>
                    <li className='mx-3 cursor-pointer'>
                        <a href='#hi'>Hi</a>
                    </li>
                    <li className='mx-3 cursor-pointer'>
                        <a href='#experience'>Experience</a>
                    </li>
                    <li className='mx-3 cursor-pointer'>
                        <a href='#skillset'>Skills</a>
                    </li>
                    <li className='mx-3 cursor-pointer'>
                        <a href='#education-section'>Certifications</a>
                    </li>
                    <li className='mx-3 cursor-pointer'>
                        <a href='#blogs-section'>Blogs</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default FloatingHeader;