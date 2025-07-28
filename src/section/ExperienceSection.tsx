import TimeLineItem from '../components/experience-section/TimeLineItem';
import '../styles/experienceStyle.css'
import PrithakIcon from "../assets/prithak-logo.png";
import SmaiticIcon from "../assets/smaitic-logo.jpg";
import InspiraIcon from "../assets/inspira-logo.jpg";
import BadgeAvatar from '../components/experience-section/BadgeAvatar';

const ExperienceSection: React.FC = () => {
    return (
        <section className="container py-24 max-w-5xl mx-auto" id='experience'>
            <h2 className="font-bold text-4xl mb-8">Experience ✨</h2>

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
                    desc={
                        <>
                            <span className='block'>Nov 2023 – Present</span>
                            <ul className='flex flex-col mt-4 ml-8 list-disc text-sm leading-loose text-gray-700 font-normal from-neutral-500'>
                                <li>Configured Nginx and containerized setups to spin up and manage WooCommerce stores in the cloud.</li>
                                <li>Built data‑migration tools to map and transfer user subscriptions from legacy systems.</li>
                                <li>Created a solution to recover and process missed customer orders after a system outage, ensuring all orders were captured and available again in the system.</li>
                                <li>Developed middleware adapters for seamless microservice and third‑party integrations.</li>
                                <li>Delivered full‑stack applications with React, Node.js, and Express for high performance.</li>
                                <li>Implemented CI/CD pipelines with Bitbucket and Docker for faster deployments.</li>
                                <li>Migrated Shopify apps to the modern Functions architecture for better scalability.</li>
                                <li>Designed and built Shopify themes for improved user experience and brand alignment.</li>
                            </ul>
                        </>
                    }
                    additionalSiblingFooterNodes={
                        <div className='flex flex-wrap mt-4 gap-2'>
                            <BadgeAvatar
                                badgeLabel='DigitalOcean'
                            />
                            <BadgeAvatar
                                badgeLabel='Nginx'
                            />

                            <BadgeAvatar
                                badgeLabel='Ansible'
                            />

                            <BadgeAvatar
                                badgeLabel='Docker'
                            />

                            <BadgeAvatar
                                badgeLabel='React'
                            />

                            <BadgeAvatar 
                                badgeLabel='Node' 
                            />

                            <BadgeAvatar
                                badgeLabel='Shopify'
                            />

                        </div>
                    }
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
                    desc={
                        <>
                            <span className='block'>Nov 2021 – Aug 2022</span>
                            <ul className='flex flex-col mt-4 ml-8 list-disc text-sm leading-loose text-gray-700 font-normal from-neutral-500'>
                                <li>Standardized local setups and workflows in a containerized microservices environment.</li>
                                <li>Designed Jenkins pipelines with Cypress testing and Mocha/Allure reports for faster, reliable deployments.</li>
                                <li>Built TypeScript APIs and integrated them with React/Redux dashboards using real‑time Prometheus metrics.</li>
                                <li>Actively participated in architectural discussions for containerized microservices and gained hands‑on exposure to Kubernetes, contributing to deployment strategies that scale with growing workloads while maintaining system reliability.</li>
                            </ul>
                        </>
                    }

                    additionalSiblingFooterNodes={
                        <div className='flex flex-wrap mt-4 gap-2'>
                            <BadgeAvatar
                                badgeLabel='AWS'
                                badgeIconSize={6}
                            />

                            <BadgeAvatar
                                badgeLabel='Docker'
                            />

                            <BadgeAvatar
                                badgeLabel='React'
                            />

                            <BadgeAvatar 
                                badgeLabel='Node' 
                            />

                            <BadgeAvatar
                                badgeLabel='Socket.io'
                            />
                        </div>
                    }
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
                            <span className='block mt-2'>Jan 2020 – Mar 2020</span>
                        </>
                    }
                    icon={PrithakIcon.src}
                />
                {/* End Item */}

                <TimeLineItem
                    majorEvent={false}
                    title="Prithak Creation – Frontend Developer Intern"
                    desc={
                        <>
                            <span>Apr 2020 – Dec 2020</span>
                            <ul className='flex flex-col mt-4 ml-8 list-disc text-sm leading-loose text-gray-700 font-normal from-neutral-500'>
                                <li>Contributed to real‑world projects using HTML5, CSS3, and JavaScript, delivering responsive interfaces and improving usability.</li>
                                <li>Assisted in creating modular and reusable components, reducing duplication and speeding up development.</li>
                                <li>Collaborated with senior developers, participated in code reviews, and gained exposure to Agile workflows and version control.</li>
                            </ul>

                        </>
                    }

                    additionalSiblingFooterNodes={
                        <div className='flex flex-wrap mt-4 gap-2'>
                            <BadgeAvatar
                                badgeLabel='HTML'
                                badgeIconSize={5}
                            />

                            <BadgeAvatar
                                badgeLabel='CSS'
                                badgeIconSize={5}
                            />

                            <BadgeAvatar 
                                badgeLabel='JavaScript' 
                                // badgeIconSize={5}
                            />

                            <BadgeAvatar
                                badgeLabel='SCSS'
                            />
                        </div>
                    }
                />

                <TimeLineItem
                    majorEvent={false}
                    title="Prithak Creation – Frontend Engineer"
                    desc={
                        <>
                            <span>Apr 2020 – Dec 2020</span>
                            <ul className='flex flex-col mt-4 ml-8 list-disc text-sm leading-loose text-gray-700 font-normal from-neutral-500'>
                                <li>Worked with React and Vue to build interactive UIs and gain hands‑on experience with component‑based architecture.</li>
                                <li>Configured and optimized build setups using Webpack and Gulp for efficient asset management and faster workflows.</li>
                                <li>Created reusable components integrated with Vuex and Redux, improving consistency and reducing development time.</li>
                                <li>Built responsive, production‑ready interfaces and collaborated with designers to deliver functional applications.</li>
                            </ul>
                        </>
                    }
                    additionalSiblingFooterNodes={
                        <div className='flex flex-wrap mt-4 gap-2'>
                            <BadgeAvatar
                                badgeLabel='React'
                            />
                            <BadgeAvatar 
                                badgeLabel='TypeScript' 
                            />
                            <BadgeAvatar 
                                badgeLabel='Vue'
                                badgeIconSize={5}
                            />
                            <BadgeAvatar 
                                badgeLabel='Gulp' 
                            />
                            <BadgeAvatar
                                badgeLabel='WebPack'
                            />
                        </div>
                    }
                />

                <TimeLineItem
                    majorEvent={false}
                    title="Prithak Creation – Mobile Application Developer"
                    desc={
                        <>
                            <span>Dec 2020 – Nov 2021</span>
                            <ul className='flex flex-col mt-4 ml-8 list-disc text-sm leading-loose text-gray-700 font-normal from-neutral-500'>
                                <li>Developed and released multiple cross‑platform apps with React Native, Redux, and Context API to both Play Store and App Store.</li>
                                <li>Implemented light platform‑specific features in Java (Android) and Swift (iOS) to extend native capabilities.</li>
                                <li>Integrated payment gateways to enable in‑app purchases and smooth transactions.</li>
                                <li>Contributed to an open‑source library, improving components and documentation.</li>
                                <li>Integrated APIs, added offline sync, and optimized performance for a seamless user experience.</li>
                            </ul>
                        </>
                    }
                    // removeTail={true}
                    additionalSiblingFooterNodes={
                        <div className='flex flex-wrap mt-4 gap-2'>
                            <BadgeAvatar 
                                badgeLabel='React Native' 
                            />
                            <BadgeAvatar 
                                badgeLabel='TypeScript' 
                            />
                            <BadgeAvatar 
                                badgeLabel='Flutter' 
                            />
                        </div>
                    }
                />

            </div>
            {/* <!-- End Timeline --> */}
        </section>
    )
}

export default ExperienceSection;