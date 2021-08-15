import { DEVELOPERS } from "../enums/developers";

const initState = {
  list: [],
};

const Developers = (state = initState, action) => {
  switch (action.type) {
    case DEVELOPERS.SET_DEV_LIST:
      return { ...state, list: action.list };

    default:
      return state;
  }
};

export default Developers;
