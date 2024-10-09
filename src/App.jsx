import About from "./pages/About";
import Home from "./pages/Home";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Error from "./pages/Error";
import Blog from "./pages/Blog";
import BlogDetails from "./component/blogs/BlogDetails";
import SinglePage from "./pages/SinglePage";
import GridePagess from "./pages/GridePagess";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/singlePage" element={<SinglePage />}></Route>
        <Route path="/gridePagess" element={<GridePagess />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blogDetails/:id" element={<BlogDetails />}></Route>
      </Route>
    )
  );
  // errorElement={<Error />}
  return <RouterProvider router={router} />;
}

export default App;
