import React from "react";
import BlogMain from "./BlogMain";
import { Link } from "react-router-dom";

const BlogsItem = ({ data }) => {
  console.log(data);
  return (
    <div className=" flex border border-gray-300  overflow-hidden shadow-md my-10">
      <div className="w-[20%]">
        <img src={data.images[0]} alt="Blog" className="w-full" />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
          <div className="flex gap-5">
            <p className="text-gray-600 mb-1">Author Name</p>
            <p className="text-gray-500 mb-4">
              {new Date(data.creationAt).toDateString()}
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            {data.description.substring(0, 150)}...
          </p>
        </div>
        <Link
          to={`/blogDetails/${data.id}`}
          className="border text-center font-medium border-[#151515] text-[#151515] w-[150px] bg-transparent py-2 px-4 mx-9 rounded "
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogsItem;
