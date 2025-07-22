import '../styles/floatingHeader.css'
import nameLogo from '../assets/Anil Rai.svg'

const FloatingHeader: React.FC = () => {
    return (
        <header className="custom-floating-header bg-bgCol flex flex-row items-center py-4 px-8">
            <div className="my-logo mr-8">
                <img
                    src={nameLogo.src}
                    className={'relative z-10 w-28'}
                    alt={'Hero content subject image'}
                />
            </div>

            <ul className='flex custom-menu-ul'>
                <li className='mx-3'>
                    <a>Hi</a>
                </li>
                <li className='mx-3'>
                    <a>Experience</a>
                </li>
                <li className='mx-3'>
                    <a>Skills</a>
                </li>
                <li className='mx-3'>
                    <a>Education</a>
                </li>
                <li className='mx-3'>
                    <a>Blogs</a>
                </li>
            </ul>
        </header>
    )
}

export default FloatingHeader;