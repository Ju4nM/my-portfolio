import { FaChevronDown, FaGithub } from 'react-icons/fa6'
import { useEffect, useRef, useState } from 'react'

export default function RepositoryCard() {
  
  const [ isExpanded, setExpand ] = useState<boolean>(false);
  const [ textExpanded, setTextExpanded ] = useState<boolean>(false);
  const [ textHeight, setTextHeight ] = useState<string>("auto");
  // const contentElement = useRef<HTMLDivElement>(null);
  const textElement = useRef<HTMLDivElement>(null);

  const expand = () => {
    setExpand((prevStatus) => !prevStatus);
    setTextExpanded(true);
  };

  useEffect (() => {
    if (textElement == null) return;

    if (isExpanded) {
      setTextHeight(textElement.current?.scrollHeight + "px");
    } else {
      setTextHeight("24px");
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry.contentRect.height == 24) setTextExpanded(false);
    });

    setTimeout(() => {
      const element = textElement.current as Element;
      if (!(element instanceof Element)) return;
      resizeObserver.observe(element);
    }, 500);

    return () => resizeObserver.disconnect();
  }, [isExpanded]);

  return (
    <div className = "bg-[#1f1f1f] w-full min-w-[255px] max-w-[500px] overflow-hidden p-5 rounded-md space-y-4 transition-all">
      <div className = "flex justify-between items-center">
        <h4 className = "text-xl font-semibold flex-1 overflow-x-hidden text-nowrap text-ellipsis pr-10">Repositorio</h4>
        <button onClick = { expand } type="button" className = { `rounded-full hover:bg-customGrayLight outline-none active:bg-[#444] transition-all p-2 ${ isExpanded ? 'rotate-180' : '' }` }>
          <FaChevronDown width={30} height={30}/>
        </button>
      </div>
      <div className = "flex items-center gap-4">
        <FaGithub size = {30} className = "hidden sm:block" />
        <span className = "overflow-hidden text-nowrap text-ellipsis">https://github.com/usuario/repo</span>
      </div>
      <div className = "overflow-hidden transition-all" style = {{ height: textHeight }} ref = { textElement }>
        <p className = { `text-ellipsis overflow-hidden transition-all ${ textExpanded ? '' : 'text-nowrap' }` } >
          Descripcion Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laudantium impedit non ipsam modi labore eveniet in voluptatibus praesentium itaque natus repellat, aliquam accusantium harum quasi enim dignissimos, quam unde.
          Quaerat quae vitae iste enim praesentium, dolores inventore id. Explicabo quo rerum ab molestias maiores, pariatur quam. Perferendis, a nesciunt voluptate provident eaque corporis magnam, adipisci in error corrupti maiores.
        </p>
      </div>
      <div className = "overflow-x-auto overflow-y-hidden p-2 space-x-2">
        <span className = "bg-gray-700 rounded-full p-1 px-2">NestJs</span>
        <span className = "bg-gray-700 rounded-full p-1 px-2">NestJs</span>
        <span className = "bg-gray-700 rounded-full p-1 px-2">NestJs</span>
      </div>
    </div>
  )
}