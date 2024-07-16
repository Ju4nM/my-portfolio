import TimeLineInterface from "../interfaces/timeLine.interface";
import { TimeLineItemInterface } from "../interfaces/timeLineItem.interface";
import TimeLineItem from "./TimeLineItem.component";

export default function TimeLine ({ data, extraClasses = "", maxWidthClasses = "max-w-lg" }: { data: TimeLineInterface, extraClasses?: string, maxWidthClasses?: string }) {
	let { items, description }  = data;
	return (
		<div>
			<div className = "mb-5">
				<p>{ description }</p>
			</div>
			<div className = { `border-l-2 relative border-customPurple ${ extraClasses } ${ maxWidthClasses }` }>
				{ items.map((item: TimeLineItemInterface, index) => <TimeLineItem key = { index } data = {item} />) }
			</div>
		</div>
	);
}
