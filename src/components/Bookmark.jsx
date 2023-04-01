import React from "react";

const Bookmark = ({ bookmark, bookmarkTitle }) => {
  return (
    <div className="sticky top-36">
      <h4 className="text-xl font-bold mb-2">Spent time on read : <span className="text-green-500">{bookmark} min</span></h4>
      <h3 className="text-xl font-bold mb-2">Bookmarked Blogs : <span className="text-green-500">{bookmarkTitle.length}</span></h3>
      {bookmarkTitle.map((title, index) => <ul className="list-disc list-inside mb-2" key={index}><li>{title}</li></ul>)}
    </div>
  );
};


export default Bookmark;