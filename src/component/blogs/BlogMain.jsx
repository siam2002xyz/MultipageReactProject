import React from "react";

const BlogMain = () => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="container">
      {posts.map((item) => (
        <BlogItems key={item.id} />
      ))}
    </div>
  );
};

export default BlogMain;
