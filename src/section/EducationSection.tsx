import { useState } from "react";

interface ICertificationCard {
    certificationTitle: string;
    certificationSubTitle?: string;
    certificateIssueDate: string;
    certificateLinks?: string;
}

const CertificationCard: React.FC<ICertificationCard> = (props: ICertificationCard) => {
    return (
        <div className="flex flex-col flex-1 min-w-64 rounded-lg bg-white p-8 border border-primary/30 ec-card">
            <div className="ec-card-head">
                {/* <div className="ec-institute-logo">

                </div> */}

                <span className="ec-achievement-title inline-block font-semibold">
                    {props.certificationTitle}
                </span>

                {props.certificationSubTitle && (
                    <span className="ec-achievement-sub-title inline-block mt-2 text-sm text-gray-500 font-medium">
                        {props.certificationSubTitle}
                    </span>
                )}
            </div>

            <div className="ec-metadata mt-4 text-xs">
                <span className="italic text-gray-500">{props.certificateIssueDate}</span>
            </div>

            {props.certificateLinks && (
                <div className="ec-metalinks mt-4">
                    <a className="text-xs text-primary" href={props.certificateLinks}>
                        Show credentials
                    </a>
                </div>
            )}
        </div>
    )
}

type IActiveTab = 'certificate' | 'courses' | 'education';

const EducationSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<IActiveTab>('certificate');
    const activeClass = `
        before:absolute 
        before:w-full 
        before:h-1 
        before:-left-0 
        before:bg-primary 
        before:bottom-0
        md:before:w-2 
        md:before:h-full 
        md:before:bottom-0 
        text-primary 
        bg-primary/10
    `;
    const inactiveClass = 'hover:text-primary';

    return (
        <section className="container py-20 max-w-5xl mx-auto" id='education-section'>
            <h2 className="font-bold text-4xl mb-12">Education & Certifications 🎓</h2>

            <div className="md:flex transition-all">
                <ul className="flex flex-row justify-start md:flex-col min-w-56 md:space-y md:space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-8 mb-4 md:mb-0">
                    <li className="cursor-pointer relative" onClick={() => setActiveTab('certificate')}>
                        <a className={`inline-flex flex-wrap justify-center sm:justify-start items-center px-5 py-3 rounded-tr-lg rounded-tl-lg md:rounded-tl-none md:rounded-br-lg w-full ${activeTab === 'certificate' ? activeClass : inactiveClass}`}>
                            <span className="mr-1">🏅</span> Certification
                        </a>
                    </li>
                    <li className="cursor-pointer relative" onClick={() => setActiveTab('courses')}>
                        <a className={`inline-flex flex-wrap justify-center sm:justify-start items-center px-5 py-3 rounded-tr-lg rounded-tl-lg md:rounded-tl-none md:rounded-br-lg w-full ${activeTab === 'courses' ? activeClass : inactiveClass}`}>
                            <span className="mr-1">⏳</span> Courses
                        </a>
                    </li>
                    <li className="cursor-pointer relative" onClick={() => setActiveTab('education')}>
                        <a className={`inline-flex flex-wrap justify-center sm:justify-start items-center px-5 py-3 rounded-tr-lg rounded-tl-lg md:rounded-tl-none md:rounded-br-lg w-full ${activeTab === 'education' ? activeClass : inactiveClass}`}>
                            <span className="mr-1">🏫</span>Education
                        </a>
                    </li>
                </ul>
                
                <div className={`mt-8 md:mt-0 flex flex-wrap gap-4 ec-certificate-result ${activeTab === 'certificate' ? 'static' : 'hidden'}`}>
                    <CertificationCard 
                        certificationTitle="Kubernetes for Beginners - Hands-on" 
                        certificateIssueDate="Isued : July 2025" 
                        certificateLinks="https://www.udemy.com/certificate/UC-a9f69da5-8f33-4a5d-9925-65251a498e49"
                    />
                    <CertificationCard 
                        certificationTitle="JavaScript Algorithm and DataStructures" 
                        certificateIssueDate="Issued : March 2020" 
                        certificateLinks="https://www.freecodecamp.org/certification/anilrai01/javascript-algorithms-and-data-structures"
                    />
                </div>

                <div className={`mt-8 md:mt-0 flex flex-wrap gap-4 ec-courses-result ${activeTab === 'courses' ? 'static' : 'hidden'}`}>
                    <CertificationCard 
                        certificationTitle="Kubernetes Certified Application Developer (CKAD)" 
                        certificateIssueDate="Ongoing" 
                    />
                    <CertificationCard 
                        certificationTitle="Ansible Automation" 
                        certificateIssueDate="Ongoing" 
                    />
                </div>

                <div className={`mt-8 md:mt-0 flex flex-wrap gap-4 ec-courses-result ${activeTab === 'education' ? 'static' : 'hidden'}`}>
                    <CertificationCard 
                        certificationTitle="University of West London, United Kingdom" 
                        certificationSubTitle="London, United Kingdom" 
                        certificateIssueDate="Graduated : July 2025" 
                    />
                    <CertificationCard 
                        certificationTitle="BSc (Hons) in Information Technology" 
                        certificationSubTitle="Kathmandu, Nepal" 
                        certificateIssueDate="Graduated : March 2020" 
                    />
                </div>
            </div>
       </section>
    )
}

export default EducationSection;