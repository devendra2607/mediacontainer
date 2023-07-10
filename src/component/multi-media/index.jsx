import React, { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./index.css";

const MultiMedia = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="container">
      <div className="multimedia-container">
        {/* Replace the following "media" element with your desired image, GIF, or video */}
        <div className="media">
          <IconButton
            className={`favorite-icon ${isFavorite ? "active" : ""}`}
            onClick={handleFavoriteClick}
          >
            <FavoriteIcon />
          </IconButton>
          {/* ------------vidio------------ */}
          {/* <iframe width={"100%"} height={"90%"} src="https://www.youtube.com/embed/25sAlvx5SGs" title="#youtubeshorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          {/* ------------images/gif------------ */}
          <img
            src="/butterfly.png"
            width={"100%"}
            height={"90%"}
            alt=""
          />
        </div>
      </div>

      <div className="dummy-title">Dummy Title</div>
    </div>
  );
};

export default MultiMedia;
