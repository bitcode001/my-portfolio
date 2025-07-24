import type { ReactNode } from "react";

// Case 1: majorEvent = true, date is required
interface IMajorEventItem {
  majorEvent: true;
  date: string;  // required
}

// Case 2: majorEvent = false, date is optional
interface INormalEventItem {
  majorEvent: false;
  date?: string; // optional
}

interface ICommonEventItem {
  title: ReactNode;
  desc?: ReactNode;
  icon?: string;
  additionalSiblingFooterNodes?: ReactNode;
  removeTail?: boolean;
}

// Combine them into a union type
export type ITimeLineItem = ICommonEventItem & (IMajorEventItem | INormalEventItem);


type IConditionalHeader = Pick<ITimeLineItem, 'majorEvent' | 'date'>;
const ConditionalHeader: React.FC<IConditionalHeader> = (prop: IConditionalHeader) => {
    if(prop.majorEvent) {
        return (
            <div className="my-2 first:mt-0">
                <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                    { prop.date }
                </h3>
            </div>
        )
    }
}

type IBadgeIcon = Pick<ITimeLineItem, 'icon' | 'removeTail'>;
const BadgeIcon: React.FC<IBadgeIcon> = (prop: IBadgeIcon) => {
    const tailClass = prop.removeTail ? 'after:hidden' : 'last:after:hidden';
    if(prop.icon) {
        return (
            <div className={`cursor-pointer relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-3.5 after:w-px after:translate-x-[1.5px] after:bg-gray-200 dark:after:bg-neutral-700`}>
                <div className={`relative z-10 size-8 flex justify-center items-center`}>
                    <img className={`shrink-0 size-8 object-cover rounded-full`} src={prop.icon} alt="Avatar" />
                </div>
            </div>
        )
    } else {
        return (
            <div className={`cursor-pointer relative ${tailClass} after:absolute after:top-8 after:bottom-0 after:start-3.5 after:w-px after:translate-x-[1.5px] after:bg-gray-200 dark:after:bg-neutral-700`}>
                <div className={`relative z-10 size-8 flex justify-center items-center`}>
                    <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                </div>
            </div>
        )
    }
}

const TimeLineItem: React.FC<ITimeLineItem> = (prop: ITimeLineItem) => {

    return (
       <>
        <ConditionalHeader majorEvent={prop.majorEvent} date={prop.date} />

            {/* <!-- Item --> */}
            <div className="flex gap-x-3">
                {/* <!-- Icon --> */}
                <BadgeIcon icon={prop.icon} removeTail={prop.removeTail} />
                {/* <!-- End Icon --> */}

                {/* <!-- Right Content --> */}
                <div className="timeline-item-right-content grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                    {prop.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                    {prop.desc}
                </p>

                {prop.additionalSiblingFooterNodes}

                </div>
                {/* <!-- End Right Content --> */}
            </div>
            {/* <!-- End Item --> */}
       </> 
    )
}

export default TimeLineItem;