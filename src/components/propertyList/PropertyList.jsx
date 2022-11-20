import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/api/hotels/countByType");

  const images = [
    "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?cs=srgb&dl=pexels-pixabay-280222.jpg&fm=jpg",
    "https://cdn.globalpropertyguide.com/assets/USVI-3/us-virgin-islands-2022.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPzdzL-fVKxLQz6DJxcNNaxnch76YBzap5R09g8CQc1btx7AkIIpFOwp20v7sJPnRWcA&usqp=CAU",
    "https://live.staticflickr.com/3451/3367233018_a933f5e7ee_b.jpg",
    "https://loveincorporated.blob.core.windows.net/contentimages/gallery/19ae7e68-5a9d-4bd0-91f3-fc0843409d1a-montana-mansion-exterior.jpg",
  ];

  const [data1, setData1] = useState(null);

  useEffect(() => {
    setData1(data);
  }, [data]);

  return (
    <div className="pList">
      {loading ? (
        "loading please wait..."
      ) : (
        <>
          {data1 &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h3>{data1[i] && data1[i].type}</h3>
                  <h4>
                    {data1[i] && data1[i].count} {data1[i] && data1[i].type}
                  </h4>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
