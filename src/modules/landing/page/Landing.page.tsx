import Experience from "../components/Experience"
import Hero from "../components/Hero"
import Repositories from "../components/Repositories"
import Technologies from "../components/Technologies"

export default function LandingPage() {
  return (
    <div className = "h-screen w-screen overflow-y-auto box-border overflow-x-hidden relative">
      <div className = "fixed top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-35%,rgba(70,5,175,.40),rgba(10,10,10,.40))]"></div>
      <div className = "fixed bottom-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_145%,rgba(70,5,175,.40),rgba(10,10,10,.40))] sm:bg-[radial-gradient(ellipse_80%_80%_at_50%_160%,rgba(70,5,175,.40),rgba(10,10,10,.40))]"></div>
      <Hero className = "xl:w-3/4 xl:mx-auto xl:box-border" />
      <div className = "xl:w-3/4 h-full p-10 xl:mx-auto box-border mb-10 xl:mb-32">
        <Experience />
        <Technologies />
        <Repositories />
      </div>
    </div>
  )
}