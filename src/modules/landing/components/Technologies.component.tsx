import { FaAngular, FaBootstrap, FaCss3, FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiDotnet, SiJsonwebtokens, SiMicrosoftsqlserver, SiMongodb, SiMysql, SiNeovim, SiNestjs, SiPostgresql, SiPug, SiRedux, SiTailwindcss, SiWindowsterminal } from "react-icons/si";
import InfiniteSlider from "../../shared/components/InfiniteSlider.component";
import { VscVscode } from "react-icons/vsc";

export default function Technologies() {
  return (
    <div id = "technologies" className = "landing-section">
      <h3 className = "text-xl pb-4 font-semibold">Tecnolog&iacute;as que he usado</h3>
      <InfiniteSlider direction = "left" speed = { 40 }>
        {/* { elements } */}
        <SiPug size={ "8rem" } />
        <FaReact size={ "8rem" } />
        <SiNestjs size={ "8rem" } />
        <FaCss3 size={ "8rem" }/>
        <FaNodeJs size={ "8rem" }/>
        <SiDotnet size={ "8rem" }/>
        <SiTailwindcss size={ "8rem" }/>
        <FaAngular size={ "8rem" }/>
        <SiJsonwebtokens size={ "8rem" }/>
        <SiPostgresql size={ "8rem" }/>
        <SiMicrosoftsqlserver size={ "8rem" }/>
        <SiMysql size={ "8rem" }/>
        <SiMongodb size={ "8rem" }/>
        <SiRedux size={ "8rem" }/>
        <FaGithub size={ "8rem" }/>
        <FaGitAlt size={ "8rem" }/>
        <SiWindowsterminal size={ "8rem" }/>
        <FaBootstrap size={ "8rem" }/>
        <VscVscode size={ "8rem" }/>
        <SiNeovim size={ "8rem" }/>
      </InfiniteSlider>
    </div>
  );
}
