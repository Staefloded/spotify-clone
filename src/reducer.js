export const initialState = {
  user: null,
  playlists: [],
  item: null,
  //   Remove after finished developing
  token:
    "BQDRGDtCsnG3qnbMbiUXzj97OwV20NEA_zN1lG7VGNVklSVtT5vvtjx54Bhj-TfUKY48Dce1msga038fY7DGIQIUAaIv1f5OUykWLyOx36MN-tknMbZJGp-rk0FybKjA8waslgsLSsU_aog1fZMh2greqS6Mu3rpAjMMWmHNCVxb8i9wuQ",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
