import React, { useEffect, useState } from "react";
import BlogsItem from "../component/blogs/BlogsItem";
import axios from "axios";
import Loading from "./Loading";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((res) => {
      setBlogData(res.data);
      setLoading(false)
    });
  }, []);
if(loading){
 return <Loading />
}
  return (
    <section className="">
      <div className="container">
        <h1 className="text-6xl font-medium">Blog</h1>
        <p className="mt-2">Thoughts and Upcomings are shared here.</p>
        {blogData.map((item) => (
          <BlogsItem data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
