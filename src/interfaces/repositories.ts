export interface RepositoryInterface {
  builtBy: Array<RepositoryBuildBy>;
  getTitle(): string;
}
export interface RepositoryBuildBy {
  avatar: string;
  url: string;
  username: string;
}
