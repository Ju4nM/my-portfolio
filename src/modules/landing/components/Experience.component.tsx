import { useEffect, useState } from "react";
import MultiTimeLine from "../../app/modules/timeLine/components/MultiTimeLine.component";
import TimeLineInterface from "../../app/modules/timeLine/interfaces/timeLine.interface";
import { useLanding } from "../hooks/useLanding.hook";

export default function Experience() {
	const { landingData } = useLanding();
	const currentTimeLines: TimeLineInterface[] = landingData?.timeLines ?? [];
	const [ timeLines, setTimeLines] = useState<TimeLineInterface[]>([]);

	const loadTimeLines = () => {
		setTimeLines(currentTimeLines);
	}

	useEffect(() => {
		loadTimeLines();
	}, [ landingData ]);

  return (
    <div id = "xp" className = "landing-section">
			<h3 className = "text-xl text-white pb-4 font-semibold">Mi experiencia</h3>
      <MultiTimeLine data = { timeLines } />
    </div>
  )
}
