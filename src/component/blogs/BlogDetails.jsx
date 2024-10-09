import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState({});
  const param = useParams();

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${param.id}`)
      .then((res) => {
        setBlogData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [param.id]);

  return (
    <div className="container">
      <div className="flex">
        <div>
          <img src={blogData?.images?.[0]} alt={blogData?.title} width="300" />
          <h1 className="text-4xl font-bold py-5">{blogData?.title}</h1>
          <div className="flex gap-5">
            <p className="text-gray-600 mb-1">Author Name</p>
            <p className="text-gray-500 mb-4">
              {new Date(blogData.creationAt).toDateString()}
            </p>
          </div>
          <p>{blogData?.description}</p>
          <hr />
          <h1 className="text-6xl font-semibold my-7">comment</h1>
          <hr />

          <div className="flex my-8 ml-4">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="ml-6 ">
              <h1 className="font-semibold text-2xl">Rohim</h1>
              <p>
                Lorem ipsum dolor sit, amet sunt qui doloremque ipsam
                voluptates. Quidem reprehenderit eum asperiores ipsum.
              </p>
            </div>
          </div>
          <br />
          <div className="flex mt-2 ml-4 my-8">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="ml-6 ">
              <h1 className="font-semibold text-2xl">Akash</h1>
              <p>
                Lorem ipsum dolor sit, amet sunt qui ipsam voluptates.
                doloremque ipsam voluptates doloremque eum asperiores ipsum.
              </p>
            </div>
          </div>

          <br />
          <hr />
          <h1 className="text-6xl font-semibold my-6">Leave a reply</h1>
          <hr />
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <textarea
            name="comment"
            id=""
            className="border-slate-600 border-[1px]  rounded h-[200px] w-full"
          ></textarea>
          <div className="my-6">
            <input
              type="text"
              placeholder="Name*"
              className="input input-bordered w-auto max-w-xs"
            />
            <input
              type="text"
              placeholder="Email*"
              className="input mx-4 input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Website"
              className="input input-bordered w-auto max-w-xs"
            />
            <br />
            <button class="btn bg-black rounded-none text-neutral-50 my-5">
              Post Comment
            </button>
          </div>
        </div>
        <div className="border-l-2 ml-5 px-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <h1 className="text-3xl font-semibold my-6">Recent Posts</h1>
          <hr />
          <p className="py-3">Balance is important in design</p>
          <hr />
          <p className="py-3">Tips for organizing things</p>
          <hr />
          <p className="py-3">The shades of grey</p>
          <hr />
          <p className="py-3">Inspiration from nature</p>
          <hr />
          <h1 className="text-3xl font-semibold my-6">Categories</h1>
          <hr />
          <p className="py-3">Artificial</p>
          <hr />
          <p className="py-3">Inspirational</p>
          <hr />
          <p className="py-3">Intelligence</p>
          <hr />
          <p className="py-3">Motivational</p>
          <hr />
          <h1 className="text-3xl font-semibold my-6">Tags</h1>
          <button class="btn m-2 btn-sm">Agency</button>
          <button class="btn m-2 btn-sm">Creative</button>
          <button class="btn m-2 btn-sm">Digital</button>
          <button class="btn m-2 btn-sm">Exceptional</button>
          <button class="btn m-2 btn-sm">Media</button>
          <button class="btn m-2 btn-sm">Minimal</button>
          <button class="btn m-2 btn-sm">Photography</button>
          <button class="btn m-2 btn-sm">SEO</button>
          <button class="btn m-2 btn-sm">Tips</button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
