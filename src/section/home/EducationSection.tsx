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

            <div className="ec-metadata mt-4 text-sm">
                <span className="italic text-gray-700 font-medium">{props.certificateIssueDate}</span>
            </div>

            {props.certificateLinks && (
                <div className="ec-metalinks mt-4 text-sm">
                    <a className="font-medium text-primary" href={props.certificateLinks}>
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
        text-primary
        text-sm
        font-base
        bg-primary/20
        rounded-lg
    `;
    const inactiveClass = 'hover:text-primary';

    return (
        <section className="container py-20 max-w-5xl mx-auto" id='education-section'>
            <h2 className="font-bold text-4xl mb-12">Education & Certifications 🎓</h2>

            <div className="md:flex transition-all">
                <ul className="flex flex-row justify-start md:flex-col min-w-52 md:space-y md:space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-8 mb-4 md:mb-0">
                    <li className="cursor-pointer relative" onClick={() => setActiveTab('certificate')}>
                        <span className={`inline-flex flex-wrap justify-center sm:justify-start items-center px-5 py-3 w-full ${activeTab === 'certificate' ? activeClass : inactiveClass}`}>
                            <span className="mr-1">🏅</span> Certification
                        </span>
                    </li>
                    <li className="cursor-pointer relative" onClick={() => setActiveTab('courses')}>
                        <span className={`inline-flex flex-wrap justify-center sm:justify-start items-center px-5 py-3 w-full ${activeTab === 'courses' ? activeClass : inactiveClass}`}>
                            <span className="mr-1">⏳</span> Courses
                        </span>
                    </li>
                    <li className="cursor-pointer relative" onClick={() => setActiveTab('education')}>
                        <span className={`inline-flex flex-wrap justify-center sm:justify-start items-center px-5 py-3 w-full ${activeTab === 'education' ? activeClass : inactiveClass}`}>
                            <span className="mr-1">🏫</span>Education
                        </span>
                    </li>
                </ul>
                
                <div className={`mt-8 md:mt-0 flex flex-wrap gap-4 ec-certificate-result ${activeTab === 'certificate' ? 'static' : 'hidden'}`}>
                    <CertificationCard 
                        certificationTitle="Dive Into Ansible - Beginner to Expert in Ansible - DevOps" 
                        certificateIssueDate="Issued : Sep 2025" 
                        certificateLinks="https://www.udemy.com/certificate/UC-c47c8ec4-2cb6-448a-8f84-5e0fa3d841d7/"
                    />
                    <CertificationCard 
                        certificationTitle="Kubernetes for Beginners - Hands-on" 
                        certificateIssueDate="Issued : July 2025" 
                        certificateLinks="https://www.udemy.com/certificate/UC-a9f69da5-8f33-4a5d-9925-65251a498e49"
                    />
                </div>

                <div className={`mt-8 md:mt-0 flex flex-wrap gap-4 ec-courses-result ${activeTab === 'courses' ? 'static' : 'hidden'}`}>
                    <CertificationCard 
                        certificationTitle="Kubernetes Certified Application Developer (CKAD)" 
                        certificateIssueDate="Ongoing" 
                    />
                    <CertificationCard 
                        certificationTitle="Networking and Database Design" 
                        certificateIssueDate="Ongoing" 
                    />
                </div>

                <div className={`mt-8 md:mt-0 flex flex-wrap gap-4 ec-courses-result ${activeTab === 'education' ? 'static' : 'hidden'}`}>
                    <CertificationCard 
                        certificationTitle="MSc Software Engineering" 
                        certificationSubTitle="University of West London, United Kingdom" 
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