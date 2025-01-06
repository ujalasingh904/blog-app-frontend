import PostList from '../components/PostList'
import SideMenu from '../components/SideMenu'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PostListPage = () => {
  const [open, setOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  let type = searchParams.toString().split("=")[1].split("&")[0];
  type = type.charAt(0).toUpperCase() + type.slice(1)

  return (
    <div className="">
      <h1 className="mb-8 text-2xl">{`${type} Blog`}</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;