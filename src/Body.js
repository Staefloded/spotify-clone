import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongList from "./SongList";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          className="body__image"
          src={discover_weekly?.images[0].url}
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <MoreHorizIcon fontSize="large" className="body__more" />
        </div>
        {/* List of Songs */}

        <div className="body__songListHeader">
          <h6 className="body__num">#</h6>
          <h6 className="body__tit">TITLE</h6>
          <h6 className="body__alb">ALBUM</h6>
          <h6 className="body__dat">DATE ADDED</h6>
        </div>
        <hr className="body__line" />
        <div className="body__songList">
          {discover_weekly?.items.map((item) => (
            <SongList key={item.id} track={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
