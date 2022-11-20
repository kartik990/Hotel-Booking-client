import React from "react";
import "./featured.css";

import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://hotel-booking-server-chh7.onrender.com/api/hotels/countByCity?cities=london,madrid,berlin"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[0]} property</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} property</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[2]} property</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
