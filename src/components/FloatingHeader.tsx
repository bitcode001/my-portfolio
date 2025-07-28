import '../styles/floatingHeader.css'
import nameLogo from '../assets/Anil Rai.svg'

const FloatingHeader: React.FC = () => {
    return (
        <header className="custom-floating-header bg-bgCol flex flex-row items-center py-4 px-8">
            <div className="hidden md:block">
                <img
                    src={nameLogo.src}
                    className={'relative z-10 w-24 max-w-24'}
                    alt={'Hero content subject image'}
                />
            </div>

            <ul className='flex custom-menu-ul md:ml-6 '>
                <li className='mx-3'>
                    <a href='#hi'>Hi</a>
                </li>
                <li className='mx-3'>
                    <a href='#experience'>Experience</a>
                </li>
                <li className='mx-3'>
                    <a href='#skillset'>Skills</a>
                </li>
                <li className='mx-3'>
                    <a href='#education-section'>Education</a>
                </li>
                <li className='mx-3'>
                    <a href='#blogs-section'>Blogs</a>
                </li>
            </ul>
        </header>
    )
}

export default FloatingHeader;