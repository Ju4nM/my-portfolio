import { TimeLineItemInterface } from "./timeLineItem.interface";

export default interface TimeLineInterface {
  title: string;
  description: string;
  items: TimeLineItemInterface[];
}