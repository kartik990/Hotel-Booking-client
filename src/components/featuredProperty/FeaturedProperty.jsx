import React from "react";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./featuredProperty.css";

const FeaturedProperty = () => {
  const { data, loading, error } = useFetch(
    "https://hotel-booking-server-chh7.onrender.com/api/hotels/?featured=true&limit=4"
  );

  const img = [
    "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGVjbyUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3883/x_0,y_0,w_5000,h_2812,c_crop,q_90,fl_progressive/w_600,h_337,f_auto,c_fit/the-orchid-hotel-mumbai-vile-parle/lobby_-_orchid_mumbai",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZyIZM4HWe-GkpeTUcuAZmVuHuuIWQJJUQg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDRr5CiSdh6My6uO_YjOMMI1by2k85QpvLQ&usqp=CAU",
    "https://www.itchotels.com/content/dam/itchotels/in/umbrella/storii/hotels/storiishantimorada-goa/image/headmast/desktop/pool-day-shot.jpg",
  ];

  useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    <div className="fp">
      <div className="fpContainer">
        {loading ? (
          "loading..."
        ) : (
          <>
            {data &&
              data.map((item, i) => {
                return (
                  <div className="fpItem" key={item._id}>
                    <img src={img[i]} alt="" className="fpImg" />
                    <div className="fpItemData">
                      <span className="fpName">{item.name}</span>
                      <span className="fpCity">{item.city}</span>
                      <span className="fpPrice">
                        Starting Price...${item.cheapestPrice}
                      </span>
                      <div className="rating">
                        <button>{item.rating || 8.5}</button>
                        <span>excellent</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedProperty;
