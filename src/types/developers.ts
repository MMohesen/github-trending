import { DeveloperBuildBy } from "../interfaces/developers";

export type DeveloperType = {
  avatar: string;
  name: string;
  popularRepository: Array<DeveloperBuildBy>;
  rank: number;
  since: string;
  url: string;
};
