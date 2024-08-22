import { LandMarkInterface } from "./landMark.interface";

export default interface TimeLineInterface {
  uuid: string;
  title: string;
  summary: string;
  landMarks: LandMarkInterface[];
  isVisible: boolean;
}