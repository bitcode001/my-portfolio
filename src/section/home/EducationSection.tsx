import { useState, type ReactNode } from "react";
import TimeLineItem from "../../components/experience-section/TimeLineItem.tsx";

interface ICertificationCard {
    certificationTitle: string;
    certificationStatus: 'ongoing' | 'completed';
    certificationBadge?: ReactNode;
    certificateIssueDate?: string;
    certificateLinks?: string;
}

const CertificationCard: React.FC<ICertificationCard> = (props: ICertificationCard) => {
    return (
        <div className="flex flex-col flex-1 min-w-64 rounded-lg bg-white p-6 border border-primary/30 ec-card">
            <div className="cert-header flex flex-row justify-between items-center mb-4">
                <div className="cert-badge">
                    {props.certificationBadge ?? (
                        <div className="cert-default-badge p-2 rounded-md bg-indigo-500/10 flex text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-award">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
                                <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
                                <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
                            </svg>                           
                        </div>
                    )}
                </div>
                <div className="cert-stats self-start">
                    {
                        props.certificationStatus === 'ongoing' && (
                            <span className="inline-flex items-center rounded-full bg-amber-500/20 px-2 py-1 text-xs font-medium text-amber-600 inset-ring inset-ring-amber-500/20">
                                <div className="cert-clock">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-4 size-4 mr-1">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                        <path d="M12 12l3 2" />
                                        <path d="M12 7v5" />
                                    </svg>
                                </div>
                                <span className="cert-stats-label">Ongoing</span>
                            </span>
                        ) || (
                            <span className="inline-flex items-center rounded-full bg-teal-500/20 px-2 py-1 text-xs font-medium text-teal-600 inset-ring inset-ring-teal-500/20">
                                <div className="cert-tick">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check size-4 mr-1">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                                <span className="cert-stats-label">Issued</span>
                            </span>
                        )
                    }
                </div>
            </div>

            <div className="ec-card-head">
                {/* <div className="ec-institute-logo">

                </div> */}

                <span className="ec-achievement-title inline-block font-semibold">
                    {props.certificationTitle}
                </span>
            </div>

            {
                props.certificateIssueDate && (
                    <div className="ec-metadata my-4 text-sm">
                        <span className="text-gray-700/70 font-medium text-md">{props.certificateIssueDate}</span>
                    </div>
                )
            }

            {props.certificateLinks && (
                <div className="ec-metalinks text-sm border-indigo-600 border px-2 py-1 rounded-lg self-start mt-auto">
                    <a className="font-medium text-primary flex flex-row items-center gap-2" href={props.certificateLinks} target="_blank">
                        <span className="creds-link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-external-link size-4">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                <path d="M11 13l9 -9" />
                                <path d="M15 4h5v5" />
                            </svg>
                        </span> 
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
        text-indigo-600
        text-sm
        font-base
        bg-indigo-400/10
        rounded-lg
    `;
    const inactiveClass = 'hover:text-indigo-800';

    return (
        <section className="container py-20 max-w-5xl mx-auto" id='education-section'>
            <h2 className="font-bold text-4xl mb-12">Education & Certifications 🎓</h2>

            <div className="md:flex flex-col transition-all">
                <ul className="flex flex-row justify-start md:flex-row min-w-52 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-8 mb-4">
                    <li className="cursor-pointer relative" onClick={() => setActiveTab('certificate')}>
                        <span className={`inline-flex flex-wrap justify-center sm:justify-start items-center px-5 py-3 w-full ${activeTab === 'certificate' ? activeClass : inactiveClass}`}>
                            <span className="mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-certificate">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                                    <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                                    <path d="M6 9l12 0" />
                                    <path d="M6 12l3 0" />
                                    <path d="M6 15l2 0" />
                                </svg>
                            </span> Certification
                        </span>
                    </li>
                    <li className="cursor-pointer relative" onClick={() => setActiveTab('courses')}>
                        <span className={`inline-flex flex-wrap justify-center sm:justify-start items-center px-5 py-3 w-full ${activeTab === 'courses' ? activeClass : inactiveClass}`}>
                            <span className="mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-4">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                    <path d="M12 12l3 2" />
                                    <path d="M12 7v5" />
                                </svg>
                            </span> Courses
                        </span>
                    </li>
                    <li className="cursor-pointer relative" onClick={() => setActiveTab('education')}>
                        <span className={`inline-flex flex-wrap justify-center sm:justify-start items-center px-5 py-3 w-full ${activeTab === 'education' ? activeClass : inactiveClass}`}>
                            <span className="mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-building-community">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                </svg>
                            </span> Education
                        </span>
                    </li>
                </ul>
                
                <div className={`mt-8 md:mt-0 flex flex-wrap gap-4 ec-certificate-result ${activeTab === 'certificate' ? 'static' : 'hidden'}`}>
                    <CertificationCard 
                        certificationTitle="Dive Into Ansible - Beginner to Expert in Ansible - DevOps" 
                        certificateIssueDate="Sep 2025" 
                        certificateLinks="https://www.udemy.com/certificate/UC-c47c8ec4-2cb6-448a-8f84-5e0fa3d841d7/"
                        certificationStatus="completed"
                    />
                    <CertificationCard 
                        certificationTitle="Kubernetes for Beginners - Hands-on" 
                        certificateIssueDate="July 2025" 
                        certificateLinks="https://www.udemy.com/certificate/UC-a9f69da5-8f33-4a5d-9925-65251a498e49"
                        certificationStatus="completed"
                    />
                </div>

                <div className={`mt-8 md:mt-0 flex flex-wrap gap-4 ec-courses-result ${activeTab === 'courses' ? 'static' : 'hidden'}`}>
                    <CertificationCard 
                        certificationTitle="Kubernetes Certified Application Developer (CKAD)" 
                        certificationStatus="ongoing"
                    />
                    <CertificationCard 
                        certificationTitle="Networking and Database Design" 
                        certificationStatus="ongoing"
                    />
                </div>

                <div className={`mt-8 md:mt-0 flex flex-wrap gap-4 ec-courses-result ${activeTab === 'education' ? 'static' : 'hidden'}`}>
                    {/* <CertificationCard 
                        certificationTitle="MSc Software Engineering" 
                        certificationSubTitle="University of West London, United Kingdom" 
                        certificateIssueDate="Graduated : July 2025" 
                        certificationStatus="completed"
                    />
                    <CertificationCard 
                        certificationTitle="BSc (Hons) in Information Technology" 
                        certificationSubTitle="Kathmandu, Nepal" 
                        certificateIssueDate="Graduated : March 2020" 
                        certificationStatus="completed"
                    /> */}
                    <div className="pt-4 pb-6">
                        <TimeLineItem
                            majorEvent={false}
                            title="MSc Software Engineering"
                            desc={
                                <div className="flex flex-col">
                                    <span>University of West London, United Kingdom</span>
                                    <span className="inline-flex self-start mt-4 items-center rounded-md bg-gray-400/10 px-3 py-2 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-400/20">
                                        <div className="grad-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-calendar size-4 mr-1">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
                                                <path d="M16 3v4" />
                                                <path d="M8 3v4" />
                                                <path d="M4 11h16" />
                                                <path d="M11 15h1" />
                                                <path d="M12 15v3" />
                                            </svg>
                                        </div>
                                        Graduated July 2025
                                    </span>
                                </div>
                            }
                        />
                        <TimeLineItem
                            majorEvent={false}
                            title="BSc (Hons) in Information Technology"
                            desc={
                                <div className="flex flex-col">
                                    <span>Kathmandu, Nepal</span>
                                    <span className="inline-flex self-start mt-4 items-center rounded-md bg-gray-400/10 px-3 py-2 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-400/20">
                                        <div className="grad-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-calendar size-4 mr-1">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
                                                <path d="M16 3v4" />
                                                <path d="M8 3v4" />
                                                <path d="M4 11h16" />
                                                <path d="M11 15h1" />
                                                <path d="M12 15v3" />
                                            </svg>
                                        </div>
                                        Graduated March 2020
                                    </span>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
       </section>
    )
}

export default EducationSection;