import { FaChevronDown, FaEnvelope } from "react-icons/fa6"
import Navbar from "./Navbar"

export default function Hero() {
  return (
    
    <div className = "h-full w-full flex flex-col">
      <div>
        <Navbar />
        <div className = "flex flex-col gap-10 sm:gap-14 p-5 pt-8 pb-0 flex-shrink-0">
          <div className = "flex justify-center items-center">
            <img src="https://avatars.githubusercontent.com/u/97267337?v=4" className = "min-h-36 min-w-36 max-h-36 max-w-36 sm:max-h-72 sm:max-w-72 rounded-full transition-all"/>
          </div>
          <div className = "flex flex-col gap-4 sm:gap-8">
            <h1 className = "text-4xl text-center">Juan Enrique Martínez Flores</h1>
            <p className = "text-center">Soy un estudiante de desarrollo de software siempre dispuesto a aprender cosas nuevas y a colaborar en equipo.</p>
            <div className = "flex items-start justify-center mt-3">
              {/* <a href="mailto:jenriquemflores@gmail.com" className = "dark-button">Contactame <FaEnvelope /></a> */}
              <button type = "button" className = "dark-button">Contactame <FaEnvelope /></button>
            </div>
          </div>
        </div>
      </div>
      <div className = "p-5 w-full flex justify-center items-center flex-col flex-end flex-grow">
        <FaChevronDown className = "animate-bounce" size = "25"/>
        <FaChevronDown className = "animate-bounce" size = "25"/>
      </div>
    </div>
  )
}
