import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, discover_weekly }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hashParam = getTokenFromResponse();
    window.location.hash = "";
    const _token = hashParam.access_token;
    console.log(_token);

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify
        .getMe()
        .then((user) => {
          // This line pops the user in the dataLayer
          dispatch({
            type: "SET_USER",
            user: user,
          });
        })
        .catch((err) => console.log(err));

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("258tYAop7CUkrdfopR3qac").then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          discover_weekly: playlist,
        });
      });
    }
  }, [dispatch, token]);

  console.log("person", user);
  console.log("Token", token);
  console.log("Discover Weekly", discover_weekly);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
