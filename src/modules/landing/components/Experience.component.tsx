import MultiTimeLine from "../../shared/components/MultiTimeLine.component";
import TimeLineInterface from "../../shared/interfaces/timeLine.interface";
import { TimeLineItemInterface } from "../../shared/interfaces/timeLineItem.interface";

export default function Experience() {
	let timeLineItems: TimeLineItemInterface[] = [
		{
			title: "Titulo",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolorem hic! Voluptatum ex reprehenderit possimus quaerat, cum debitis provident inventore et quis placeat aspernatur perferendis veniam esse vitae dolorem ab. Harum quod nostrum voluptatem dignissimos voluptates, porro expedita neque aut numquam ratione! Aut accusantium quisquam minus eligendi quidem dolorem blanditiis perspiciatis similique reiciendis doloremque! Ipsum doloremque quasi rerum labore facere?",
			date: new Date()
		},
		{
			title: "Titulo",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolorem hic! Voluptatum ex reprehenderit possimus quaerat, cum debitis provident inventore et quis placeat aspernatur perferendis veniam esse vitae dolorem ab. Harum quod nostrum voluptatem dignissimos voluptates, porro expedita neque aut numquam ratione! Aut accusantium quisquam minus eligendi quidem dolorem blanditiis perspiciatis similique reiciendis doloremque! Ipsum doloremque quasi rerum labore facere?",
			date: new Date()
		},
		{
			title: "Titulo",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolorem hic! Voluptatum ex reprehenderit possimus quaerat, cum debitis provident inventore et quis placeat aspernatur perferendis veniam esse vitae dolorem ab. Harum quod nostrum voluptatem dignissimos voluptates, porro expedita neque aut numquam ratione! Aut accusantium quisquam minus eligendi quidem dolorem blanditiis perspiciatis similique reiciendis doloremque! Ipsum doloremque quasi rerum labore facere?",
			date: new Date()
		},
		{
			title: "Titulo",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, dolorem hic! Voluptatum ex reprehenderit possimus quaerat, cum debitis provident inventore et quis placeat aspernatur perferendis veniam esse vitae dolorem ab. Harum quod nostrum voluptatem dignissimos voluptates, porro expedita neque aut numquam ratione! Aut accusantium quisquam minus eligendi quidem dolorem blanditiis perspiciatis similique reiciendis doloremque! Ipsum doloremque quasi rerum labore facere?",
			date: new Date()
		},
	];

	let timeLineData: TimeLineInterface[] = [
		{
			title: "Experiencia academica",
			description: "Esta es la experiencia que he tenido a lo largo de mi estancia en la Universidad Tecnologica del sur de Sonora",
			items: timeLineItems
		},
		{
			title: "Experiencia en Sonora Digital",
			description: "Linea del tiempo de los proyectos en los que participe mientras formaba parte del equipo de Sonora Digital de la UTS",
			items: timeLineItems
		},
	]
  return (
    <div id = "xp" className = "landing-section">
			<h3 className = "text-xl pb-4 font-semibold">Mi experiencia</h3>
      <MultiTimeLine data = { timeLineData } />
    </div>
  )
}
