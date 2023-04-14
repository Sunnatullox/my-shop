import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

const BlogCard = ({item, id}) => {
// 
  return (
    <div key={id} className="blog-card">
      <div className="card-image ">
        <img src={item?.images[0].url ||"images/blog-1.jpg" } className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">{moment(item?.createdAt).format('YYYY, MM, DD, hh:mm')}</p>
        <h5 className="title">{item?.title}</h5>
        <p className="desc" dangerouslySetInnerHTML={{__html:item?.description.substr(0,50) +"..."}}>
        </p>
        <Link to={`/blog/${id}`} className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
