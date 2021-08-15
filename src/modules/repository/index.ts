import Numbers, { NumberInterface } from "../numbers";
import { RepositoryBuildBy, RepositoryInterface } from "../../interfaces/repositories";
import { RepositoryType } from "../../types/repositories";

export default class Repository implements RepositoryInterface {
  builtBy: Array<RepositoryBuildBy> = [];
  username: string = "";
  description: string = "";
  forks?: NumberInterface;
  language: string = "";
  repositoryName: string = "";
  starsSince?: NumberInterface;
  totalStars?: NumberInterface;
  url: string = "";

  constructor(data?: RepositoryType) {
    if (data) {
      Object.assign(this, data);

      this.starsSince = new Numbers(data.starsSince);
      this.totalStars = new Numbers(data.totalStars);
      this.forks = new Numbers(data.forks);
    }
  }

  public getTitle(): string {
    return `${this.username} / ${this.repositoryName}`;
  }
}
