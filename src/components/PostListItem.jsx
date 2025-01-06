 import Image from './Image'
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const PostListItem = ({ post }) => {

    return (
        <div className="flex flex-col xl:flex-row gap-8 mb-12 border-b-2 xl:border-b-0 border-gray-500 pb-8">
            {/* image */}
            {post?.img && (
                <div className="xl:block xl:w-1/3">
                    
                    <Image src={post?.img} className="rounded-2xl object-cover w-[10rem] sm:w-[15rem] md:w-[20rem]"  />
                </div>
            )}
            {/* details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to={`/${post?.slug}`} className="text-2xl md:text-4xl font-semibold">
                    {post?.title}
                </Link>
                <div className="flex flex-col sm:flex-row  sm:items-center gap-2 text-gray-400 text-sm">
                    <span className=''>Written by</span>
                    <Link className="text-blue-800" to={`/posts?author=${post?.user?.username}`}>{post?.user?.username}</Link>
                    <span>on</span>
                    <Link className="text-blue-800">{post?.category}</Link>
                    <span>{format(post?.createdAt)}</span>
                </div>
                <p>{post?.desc}</p>
                <Link to={`/${post?.slug}`} className="underline text-blue-800 text-sm">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostListItem;