import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';

const Blog = (props) => {
  const { name, date, profile, title, time, img } = props.blog;

  const getTitle = props.getTitle;

  const handleBookmark = props.handleBookmark;

  return (
    <div className="px-40">
      <div className="blog">
        <img src={img} alt="" />
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <img src={profile} alt="" className="second-img" />
            <div className="profile-name">
              <h4>{name}</h4>
              <p className="date">{date}</p>
            </div>
          </div>
          <div className="time">
            <p>{time} min read  <FontAwesomeIcon icon={faBookmark}
              onClick={() => getTitle(props.blog.title)} /> </p>
          </div>
        </div>
        <div className="down-site">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="my-3">#beginners #programming</p>
          <p onClick={() => handleBookmark(props.blog.time)} className="mark underline">Mark as read</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;



