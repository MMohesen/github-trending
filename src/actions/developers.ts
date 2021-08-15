import { ENDPOINTS } from "../libraries/endpoints";
import request from "../libraries/request";
import Developer from "../modules/developer";
import { DEVELOPERS } from "../enums/developers";
import { DeveloperInterface } from "../interfaces/developers";
import { DeveloperType } from "../types/developers";

export const setList = (list: Array<DeveloperInterface> = []) => ({
  type: DEVELOPERS.SET_DEV_LIST,
  list,
});

export const getDevList = () => async (dispatch) => {
  return await request
    .get(ENDPOINTS.DEVELOPERS)
    .then(async ({ data }: { data: Array<DeveloperType> }) =>
      data.map((developer) => new Developer(developer))
    )
    .then(async (data: Array<DeveloperInterface>) => {
      await dispatch(setList(data));
    })
    .catch(async (error) => {
      await dispatch(setList([]));
    });
};
