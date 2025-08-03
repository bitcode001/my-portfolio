interface IBlogBadge {
    badgeName: string
}
export const ContentBadge: React.FC<IBlogBadge> = (props: IBlogBadge) => {
    return (
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
            {props.badgeName}
        </span>
    )
}

interface IBlogInstance {
    title: string;
    tags: string[];
    exerpt: string;
    slug: string;
}
export const ContentInstance: React.FC<IBlogInstance> = (props: IBlogInstance) => {
    return (
        // <div className="relative flex flex-col min-w-64 rounded-lg bg-white border border-primary/20 blog-instance">
        <a className="
            relative flex flex-col min-w-64 rounded-lg bg-white border border-primary/20
            after:absolute after:top-1 after:w-full after:h-full after:bg-primary after:rounded-bl-lg after:rounded-br-lg after:-z-10
        " href={`/blog/${props.slug}`}>
            {/* <div className="blog-image">
                <img src={blog1Img.src} className="rounded-lg" />
            </div> */}

            <div className="flex flex-col h-full blog-info-cart px-4 py-6">
                <div className="blog-badge flex flex-wrap gap-2">
                    {props.tags.map((el, idx) => (
                        <ContentBadge key={idx} badgeName={el} />
                    ))}
                </div>

                <h4 className="font-semibold text-base my-2">{props.title}</h4>

                <span className="line-clamp-2 text-sm">
                    {props.exerpt}
                </span>

                <div className="blog-card-btns flex justify-between pr-2 pt-8 mt-auto">
                    <button className="text-sm text-primary">Read more</button>

                    <div className="right-icon size-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill={'#5769F8'}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill={"#5769F8"}/>
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    )
}