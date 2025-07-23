import TimeLineItem from '../components/experience-section/TimeLineItem';
import '../styles/experienceStyle.css'
import PrithakIcon from "../assets/prithak-logo.png";
import SmaiticIcon from "../assets/smaitic-logo.jpg";
import InspiraIcon from "../assets/inspira-logo.jpg";

const ExperienceSection: React.FC = () => {
    return (
        <div className="container py-10 max-w-4xl mx-auto">
            <h2 className="font-semibold text-5xl mb-8">Experience ✨</h2>

            {/* <!-- Timeline --> */}
            <div className="py-8">
                {/* Major Event */}
                <TimeLineItem 
                    majorEvent={true}
                    date='Nov, 2023'
                    title="New journey at Inspira Digital"
                    desc="Nov 2023 - Present (Remote, UK)"
                    icon={InspiraIcon.src}
                />

                <TimeLineItem
                    majorEvent={false}
                    title="Inspira Digital – FullStack Software Developer"
                    desc="Nov 2023 – Present"
                />

                {/* Major Event */}
                <TimeLineItem
                    majorEvent={true}
                    date='Nov, 2021'
                    title=" New journey at SMAITIC Labs"
                    desc="Nov 2021 – Aug 2022"
                    icon={SmaiticIcon.src}
                />

                <TimeLineItem
                    majorEvent={false}
                    title="SMAITIC Labs – Software Engineer"
                    desc="Nov 2021 – Aug 2022"
                />



                {/* The Beginning */}
                {/* Start Item */}
                <TimeLineItem
                    majorEvent={true}
                    date='Jan, 2020'
                    title='Started the Journey in Web Development'
                    desc={
                        <>
                            <span>I joined Prithak Creation as a <span className='font-semibold'>Frontend Developer Intern</span></span>
                            <span className='block'>Jan 2020 – Mar 2020</span>
                        </>
                    }
                    icon={PrithakIcon.src}
                />
                {/* End Item */}

                <TimeLineItem
                    majorEvent={false}
                    title="Prithak Creation – Frontend Developer Intern"
                    desc="Apr 2020 – Dec 2020"
                />

                <TimeLineItem
                    majorEvent={false}
                    title="Prithak Creation – Frontend Engineer"
                    desc="Apr 2020 – Dec 2020"
                />

                <TimeLineItem
                    majorEvent={false}
                    title="Prithak Creation – Mobile Application Developer"
                    desc="Dec 2020 – Nov 2021"
                />

            </div>
            {/* <!-- End Timeline --> */}
        </div>
    )
}

export default ExperienceSection;