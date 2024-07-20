import { ReactNode } from "react";
import { createAnimation } from "../../core/animations/animations";

export default function InfiniteSlider({ children, direction = "left", speed = 10 }: { children: ReactNode[], direction?: "left" | "right", speed?: number }) {
  const animation: string = createAnimation(
    "Slider",
    `from { transform: translateX(${ direction == "left" ? "0" : "calc(-100% - 1rem)" }); } to { transform: translateX(${ direction == "left" ? "calc(-100% - 1rem)" : "0" }); }`,
    `${direction}Movement`
  );

  const elementsWrapper = (
    <div className = "flex gap-4 w-fit" style = {{ animation: `${ animation } ${ speed }s linear infinite` }}>
      { children }
    </div>
  );

  return (
    <div className = "overflow-hidden my-3 flex gap-4" style = {{ maskImage: "linear-gradient(to right, transparent, #0a0a0a 30%, #0a0a0a 70%, transparent)" }}>
      { elementsWrapper }
      { elementsWrapper }
      { elementsWrapper }
      { elementsWrapper }
    </div>
  );
}
