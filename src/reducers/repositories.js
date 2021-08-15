import { REPOSITORIES } from "../enums/repositories";

const initState = {
  list: [],
};

const Repositories = (state = initState, action) => {
  switch (action.type) {
    case REPOSITORIES.SET_REPO_LIST:
      return { ...state, list: action.list };

    default:
      return state;
  }
};

export default Repositories;
