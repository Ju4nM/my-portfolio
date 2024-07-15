import { FaChevronDown, FaEnvelope } from "react-icons/fa6"
import Navbar from "./Navbar.component"

export default function Hero({ className }: { className?: string }) {
  return (
    
    <div className = { `h-full w-full flex flex-col ${ className }` }>
      <div className = "xl:flex xl:h-full xl:flex-col">
        <Navbar className = { "invisible" } />
        <div className = "flex flex-col gap-10 sm:gap-14 p-5 sm:p-10 xl:p-5 pb-0 flex-shrink-0 xl:flex-grow xl:flex-row-reverse xl:justify-between xl:justify-self-center xl:box-border xl:pt-0 xl:gap-32 2xl:gap-5">
          <div className = "flex justify-center items-center 2xl:box-border 2xl:mx-20">
            <img src="https://avatars.githubusercontent.com/u/97267337?v=4" className = "min-h-36 min-w-36 max-h-36 max-w-36 sm:max-h-72 sm:max-w-72 rounded-full transition-all"/>
          </div>
          <div className = "flex flex-col gap-4 sm:gap-8 xl:gap-6 justify-center 2xl:box-border 2xl:mx-20">
            <div className = "w-full flex justify-center xl:justify-normal">
              <h1 className = "text-4xl font-semibold w-fit text-center xl:text-left text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(119,79,255,1)_0%,rgba(179,104,238,1)_50%,rgba(91,214,221,1)_100%)]">
                Juan Enrique Martínez Flores
              </h1>
            </div>
            <p className = "text-center sm:text-lg text-pretty xl:text-left xl:mt-2">Soy un estudiante de desarrollo de software siempre dispuesto a aprender cosas nuevas y a colaborar en equipo.</p>
            <div className = "flex items-start justify-center xl:justify-normal mt-3 xl:mt-0">
              {/* <a href="mailto:jenriquemflores@gmail.com" className = "dark-button">Contactame <FaEnvelope /></a> */}
              <button type = "button" className = "dark-button">Contactame <FaEnvelope /></button>
            </div>
          </div>
        </div>
      </div>
      <div className = "p-5 w-fit mx-auto flex justify-center items-center flex-col flex-end flex-grow xl:flex-grow-0">
        <FaChevronDown className = "animate-bounce" size = "25"/>
        <FaChevronDown className = "animate-bounce" size = "25"/>
      </div>
    </div>
  )
}
