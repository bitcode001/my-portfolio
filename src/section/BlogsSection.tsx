import blog1Img from "../assets/js-blog-1.png";
import "../styles/blogsSection.css";

interface IBlogBadge {
    badgeName: string
}
const BlogBadge: React.FC<IBlogBadge> = (props: IBlogBadge) => {
    return (
        <span className="inline-flex mr-2 items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
            {props.badgeName}
        </span>
    )
}

interface IBlogInstance {
    title: string;
    tags: string[];
    exerpt: string;
}
const BlogInstance: React.FC<IBlogInstance> = (props: IBlogInstance) => {
    return (
        <div className="flex flex-col flex-1 min-w-64 rounded-lg blog-instance bg-white">
            {/* <div className="blog-image">
                <img src={blog1Img.src} className="rounded-lg" />
            </div> */}

            <div className="flex flex-col h-full blog-info-cart px-4 py-6">
                <div className="blog-badge">
                {props.tags.map((el, idx) => (
                    <BlogBadge key={idx} badgeName={el} />
                ))}
                </div>

                <h5 className="font-semibold text-base my-2">{props.title}</h5>

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
        </div>
    )
}

const BlogsSection: React.FC = () => {
    return (
        <section className="py-24 bg-white" id='blogs-section'>
            <div className="container max-w-5xl mx-auto">
                <h2 className="font-bold text-4xl mb-8">Blogs 📖</h2>
                <h3 className="mb-6">I do write sometimes ! </h3>

                <div className="blog-row-wrapper flex flex-row gap-4 flex-wrap">
                    <BlogInstance 
                        title="JavaScript : Everything in JS is an Object"
                        tags={['JavaScript', 'TypeScript']}
                        exerpt="In JavaScript, almost everything you work with behaves like an object — from arrays and functions to even primitives under the hood. Let’s unpack this powerful concept and see why it matters."
                    />
                    <BlogInstance
                        title="CI/CD in Action : Setting up a deployment pipeline."
                        tags={['Jenkins', 'DigitalOcean']}
                        exerpt="We will create a working CI/CD pipeline using latest technology"
                    />
                    <BlogInstance
                        title="Building Scalable WooCommerce Stores with Nginx and Docker"
                        tags={['Docker', 'Nginx']}
                        exerpt="Using a simple bash script to spin up cluster of Wordpress Container with WooCommerce pre configured"
                    />
                </div>

                <span className="italic text-gray-500 text-xs flex pt-8">🛠️ I am still working on the blog section and internal pages. Your patience is highly appreciated. 🙏</span>
            </div>
        </section>
    )
}

export default BlogsSection;