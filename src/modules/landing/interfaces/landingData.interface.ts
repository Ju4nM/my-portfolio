import { RepositoryInterface } from "../../app/modules/repository/interfaces/repository.interface";
import TimeLineInterface from "../../app/modules/timeLine/interfaces/timeLine.interface";

export interface LandingDataInterface {
  timeLines: TimeLineInterface[];
  repos: RepositoryInterface[];
}