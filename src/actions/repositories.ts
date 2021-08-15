import { ENDPOINTS } from "../libraries/endpoints";
import request from "../libraries/request";
import { REPOSITORIES } from "../enums/repositories";
import Repository from "../modules/repository";
import { RepositoryInterface } from "../interfaces/repositories";
import { RepositoryType } from "../types/repositories";

export const setList = (list: Array<RepositoryInterface> = []) => ({
  type: REPOSITORIES.SET_REPO_LIST,
  list,
});

export const getList = () => async (dispatch) => {
  return await request
    .get(ENDPOINTS.REPOSITORIES)
    .then(async ({ data }: { data: Array<RepositoryType> }) =>
      data.map((repository) => new Repository(repository))
    )
    .then(async (data: Array<RepositoryInterface>) => {
      await dispatch(setList(data));
    })
    .catch(async (error) => {
      await dispatch(setList([]));
    });
};
