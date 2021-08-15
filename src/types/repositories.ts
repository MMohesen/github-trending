import { RepositoryBuildBy } from "../interfaces/repositories";

export type RepositoryType = {
  builtBy: Array<RepositoryBuildBy>;
  username: string;
  description: string;
  forks: number;
  language: string;
  languageColor: string;
  rank: number;
  repositoryName: string;
  since: string;
  starsSince: number;
  totalStars: number;
  url: string;
};
