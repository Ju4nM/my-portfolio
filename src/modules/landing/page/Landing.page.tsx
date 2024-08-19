import Experience from "../components/Experience.component"
import Hero from "../components/Hero.component"
import Navbar from "../components/Navbar.component"
import Repositories from "../components/Repositories.component"
import Technologies from "../components/Technologies.component"

export default function LandingPage() {
  return (
    <div className = "h-screen w-screen overflow-y-auto box-border overflow-x-hidden relative scroll-smooth">
      <div className = "fixed top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-35%,rgba(70,5,175,.40),rgba(16,14,24,.40))]"></div>
      <div className = "fixed bottom-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_145%,rgba(70,5,175,.40),rgba(16,14,24,.40))] sm:bg-[radial-gradient(ellipse_80%_80%_at_50%_160%,rgba(70,5,175,.40),rgba(10,10,10,.40))]"></div>
      <Navbar startPosition = "fixed" />
      <Hero className = "xl:w-3/4 xl:mx-auto xl:box-border" />
      <div className = "xl:w-3/4 m-4 sm:m-10 xl:mx-auto box-border mb-10 xl:mb-32">
        <Experience />
        <Technologies />
        <Repositories />
      </div>
    </div>
  )
}