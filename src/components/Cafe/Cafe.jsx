import React, { useEffect, useState } from "react";
import './Cafe.css';
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark";
import { toast } from 'react-toastify';

const Cafe = () => {
  const [blogs, setBlogs] = useState([])
  const [bookmark, setBookmark] = useState(0)
  const [bookmarkTitle, setBookmarkTitle] = useState([])

  useEffect(() => {
    fetch('coding.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  const handleBookmark = (blog) => {
    const newBookmark = bookmark + Number(blog);
    setBookmark(newBookmark);

  }

  const getTitle = (title) => {
    setBookmarkTitle([...bookmarkTitle, title])

    if (title) {
      toast("Bookmark added !")
      return;
    }
  }

  return (
    <div className="cafe-container">
      <div className="blogs-container">
        {
          blogs.map(blog => <Blog
            key={blog.id}
            blog={blog}
            handleBookmark={handleBookmark}
            getTitle={getTitle}
          />)
        }
      </div>
      <div className="bookmark-container">
        <Bookmark bookmark={bookmark}
          bookmarkTitle={bookmarkTitle}
        />
      </div>
    </div>
  );
};


export default Cafe;