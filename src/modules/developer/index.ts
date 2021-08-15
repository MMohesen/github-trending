import { DeveloperBuildBy, DeveloperInterface } from "../../interfaces/developers";
import { DeveloperType } from "../../types/developers";

export default class Developer implements DeveloperInterface {
  avatar: string = "";
  name: string = "";
  popularRepository: Array<DeveloperBuildBy> = [];
  rank: number = 0;
  since: string = "";
  url: string = "";
  constructor(data?: DeveloperType) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
