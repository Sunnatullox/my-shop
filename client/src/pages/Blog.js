import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import {useDispatch, useSelector} from 'react-redux'
import { getAllBlogs } from "../features/blogs/blogSlice";

const Blog = () => {
const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllBlogs())
}, [])

const blogs = useSelector(state => state.blogs?.All)
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3">
                {blogs.map((item) => (
                     <div className="col-6 mb-3" key={item?._id}>
                     <BlogCard item={item} id={item?._id} />);
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
