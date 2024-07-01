import { FaBarsStaggered } from "react-icons/fa6";
import { navItems } from "../const/navItems.const";
import { ReactElement, useRef } from "react";
import { fadeOutAnimation, hideToLeftAnimation } from "../../core/animations/animations";

export default function Navbar() {

  const overlayRef = useRef<HTMLDivElement>(null);
  const sideBarRef = useRef<HTMLDivElement>(null);
  const navItemClasses = "transition-all hover:text-customPurple";

  const navLinks: ReactElement[] = navItems.map(item => <a className = { navItemClasses } key = { item.id } href = { `#${ item.id }` }>{ item.text }</a> );

  const onShowSidebarHandler = () => {
    overlayRef.current?.classList.replace("hidden", "flex");
    sideBarRef.current?.classList.replace("hidden", "flex");
  };

  const onHiddenSidebarHandler = () => {
    hideToLeftAnimation(sideBarRef.current);
    fadeOutAnimation(overlayRef.current);
  };

  return (
    <>
      <div className = "flex p-3 sm:bg-[#00000066] bg-transparent sticky top-0">
        <button type = "button" className = "md:hidden" onClick = { onShowSidebarHandler }>
          <FaBarsStaggered size = "30" />
        </button>
        <div className="hidden md:flex w-full justify-evenly items-center">
          { navLinks }
        </div>
      </div>
      <div onClick = { onHiddenSidebarHandler } ref = { overlayRef } className = "z-10 fixed top-0 bottom-0 right-0 left-0 hidden fade-in bg-[#00000066]">
        <div ref = { sideBarRef } className = "h-full bg-ground flex-col p-3 gap-3 hidden from-left-to-right">
          { navLinks }
        </div>
      </div>
    </>
  )

}
