import type { ReactNode } from "react";

interface IBadgeAvatar {
    badgeIcon?: ReactNode;
    badgeIconSize?: number;
    badgeIconWidth?: number;
    badgeIconHeight?: number;
    badgeLabel: string;
}
const BadgeAvatar: React.FC<IBadgeAvatar> = (prop: IBadgeAvatar) => {
    const badgeClass = prop.badgeIcon ? `p-1.5 ${prop.badgeLabel ? 'pe-3' : ''}` : 'py-1 px-4';
    return (
        <div className="inline-flex flex-wrap gap-2">
            <div className={`inline-flex flex-nowrap items-center bg-white border border-gray-200 rounded-full ${badgeClass} dark:bg-neutral-900 dark:border-neutral-700`}>
                <BadgeIcon 
                    badgeLabel={prop.badgeLabel}
                    badgeIcon={prop.badgeIcon} 
                    badgeIconSize={prop.badgeIconSize} 
                    badgeIconWidth={prop.badgeIconWidth}
                    badgeIconHeight={prop.badgeIconHeight}
                />

                <div className="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                    {prop.badgeLabel}
                </div>

                {/* <div className="ms-2.5 inline-flex justify-center items-center size-5 rounded-full text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-hidden focus:ring-2 focus:ring-gray-400 dark:bg-neutral-700/50 dark:hover:bg-neutral-700 dark:text-neutral-400 cursor-pointer">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </div> */}
            </div>
        </div>
    )
}

type IBadgeIcon = IBadgeAvatar;
const BadgeIcon: React.FC<IBadgeIcon> = (prop: IBadgeIcon) => {
    const iconSize = prop.badgeIconSize ? `size-${prop.badgeIconSize}` : 'size-6';
    const iconWidth = prop.badgeIconWidth ? `w-${prop.badgeIconWidth}` : '';
    const iconHeight = prop.badgeIconHeight ? `h-${prop.badgeIconHeight}` : '';
    let iconDim;
    if(iconWidth && iconHeight) {
        iconDim = `${iconWidth} ${iconHeight}`
    } else {
        iconDim = iconSize;
    }

    let marginInlineEnd = prop.badgeLabel ? 'me-1.5' : '';

    if(prop.badgeIcon) {
        return (
            <div className={`${marginInlineEnd} inline-block ${iconDim} rounded-full`}>
                {prop.badgeIcon}
            </div>
        )
    }
}

export default BadgeAvatar;