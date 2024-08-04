import { FaCss3, FaHtml5, FaReact } from "react-icons/fa6";
import { SiNestjs } from "react-icons/si";
import InfiniteSlider from "../../shared/components/InfiniteSlider.component";

export default function Technologies() {
  return (
    <div id = "technologies" className = "landing-section">
      <h3 className = "text-xl pb-4 font-semibold">Tecnolog&iacute;as que he usado</h3>
      <InfiniteSlider direction = "left" speed = { 30 }>
        {/* { elements } */}
        <FaHtml5 size={ "8rem" } />
        <FaReact size={ "8rem" } />
        <SiNestjs size={ "8rem" } />
        <FaCss3 size={ "8rem" }/>
      </InfiniteSlider>
    </div>
  );
}
