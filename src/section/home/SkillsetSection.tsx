import type { ReactNode } from "react";
import { IconAnsible, IconAstro, IconDigitalOcean, IconDocker, IconExpressJS, IconFigma, IconGit, IconGithub, IconGraphQL, IconJavaScript, IconJenkins, IconMongoDB, IconNginx, IconNodeJS, IconReact, IconReactNative, IconShopify, IconSocket, IconTypeScript, IconVSCode, IconVue } from "../../components/experience-section/TechStackIcons.tsx";

interface ISkillsBadge {
    badgeIcon: ReactNode;
    badgeLabel: string;
}
const SkillsBadge: React.FC<ISkillsBadge> = (props: ISkillsBadge) => {
    return (
        <div className="flex flex-col items-center w-20">
            <div className="icon size-14 sm:size-16 bg-slate-100 p-3 sm:p-4 rounded-full">
                {props.badgeIcon}
            </div>
            <span className="mt-2 text-sm text-center">{props.badgeLabel}</span>
        </div>
    )
}

interface ISkillsBadgeSection {
    sectionLabel: string;
    elementSignature: {
        badgeIcon: ReactNode,
        badgeLabel: string
    }[]
}

const SkillsBadgeSection: React.FC<ISkillsBadgeSection> = (props: ISkillsBadgeSection) => {
    return (
        <div className="relative skills-grid-wrapper">
            <span className="absolute -top-2 left-4 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
                { props.sectionLabel }
            </span>
            {/* <div className="skills-grid-elem gap-6 sm:gap-12"> */}
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(72px,_1fr))] gap-6 sm:gap-12 px-4 pt-12 pb-8 border border-black/10 rounded-lg">
                    { props.elementSignature.map((el, index) => (
                        <SkillsBadge 
                            key={index}
                            badgeIcon={el.badgeIcon} 
                            badgeLabel={el.badgeLabel} 
                        />
                    ))}
            </div>
        </div>
    )
}

const SkillsetSection: React.FC = () => {
    return (
		<section className="relative overflow-x-clip bg-white py-24" id='skillset'>
            <div className="container skills-section-wrapper max-w-5xl mx-auto">
                <h2 className="font-bold text-4xl mb-6">Skills 🎨</h2>
                <h3 className="mb-4">Here are the techstack that I work with : </h3>


                <div className="grid grid-cols-1 gap-10 mt-8 mb-8">

                    <SkillsBadgeSection 
                        sectionLabel="Frontend"
                        elementSignature={[
                            {
                                badgeIcon: <IconReact />,
                                badgeLabel: 'React',
                            },
                            {
                                badgeIcon: <IconVue />,
                                badgeLabel: 'Vue'
                            },
                            {
                                badgeIcon: <IconTypeScript />,
                                badgeLabel: 'TypeScript'
                            },
                            {
                                badgeIcon: <IconJavaScript />,
                                badgeLabel: 'JavaScript'
                            },
                            {
                                badgeIcon: <IconReactNative />,
                                badgeLabel: 'React Native'
                            },
                            {
                                badgeIcon: <IconAstro />,
                                badgeLabel: 'Astro'
                            }
                        ]}
                    />

                    <SkillsBadgeSection 
                        sectionLabel="Backend"
                        elementSignature={[
                            {
                                badgeIcon: <IconNodeJS />,
                                badgeLabel: 'Node.js'
                            },
                            {
                                badgeIcon: <IconExpressJS />,
                                badgeLabel: 'Express'
                            },
                            {
                                badgeIcon: <IconGraphQL />,
                                badgeLabel: 'GraphQL'
                            },
                            {
                                badgeIcon: <IconMongoDB />,
                                badgeLabel: 'MongoDB'
                            },
                            {
                                badgeIcon: <IconSocket />,
                                badgeLabel: 'Socket.io'
                            },
                            {
                                badgeIcon: <IconShopify />,
                                badgeLabel: 'Shopify'
                            }
                        ]}
                    />

                    <SkillsBadgeSection 
                        sectionLabel="DevOps"
                        elementSignature={[
                            {
                                badgeIcon: <IconDocker />,
                                badgeLabel: 'Docker'
                            },
                            {
                                badgeIcon: <IconAnsible />,
                                badgeLabel: 'Ansible'
                            },
                            {
                                badgeIcon: <IconNginx />,
                                badgeLabel: 'Nginx'
                            },
                            {
                                badgeIcon: <IconDigitalOcean />,
                                badgeLabel: 'Digital Ocean'
                            },
                            {
                                badgeIcon: <IconJenkins />,
                                badgeLabel: 'Jenkins'
                            }
                        ]}
                    />

                    <SkillsBadgeSection 
                        sectionLabel="Tools"
                        elementSignature={[
                            {
                                badgeIcon: <IconGit />,
                                badgeLabel: 'Git'
                            },
                            {
                                badgeIcon: <IconGithub />,
                                badgeLabel: 'GitHub'
                            },
                            {
                                badgeIcon: <IconFigma />,
                                badgeLabel: 'Figma'
                            },
                            {
                                badgeIcon: <IconVSCode />,
                                badgeLabel: 'VS Code'
                            }
                        ]}
                    />

                </div>

                <span className="italic text-gray-500 text-sm">I believe in constant learning! Currently I am doing courses on Kubernetes and DevOps</span>
            </div>
        </section>
    )
}

export default SkillsetSection;