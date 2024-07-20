
export async function hideToLeftAnimation (element: HTMLElement | null): Promise<boolean> {
  if (!element) return false;

  element.classList.add("-translate-x-[100vw]");

  await new Promise(resolve => {
    setTimeout(() => {
      element.classList.remove("-translate-x-[100vw]")
      element.classList.add("hidden");
      resolve(true);
    }, 400);
  })

  return true;
}

export async function fadeOutAnimation (element: HTMLElement | null): Promise<boolean> {
  if (!element) return false;

  element.classList.add("opacity-0");

  await new Promise(resolve => {
    setTimeout(() => {
      element.classList.remove("opacity-0")
      element.classList.add("hidden");
      resolve(true);
    }, 400);
  })
  return true;
}

export const createAnimation = (name: string, frames: string, suffix: string): string => { // Funcion traida de la libreria react-spinners de davidhu2000
  const animationName = `_ANIMATION_-${name}-${suffix}`;
  if (typeof window == "undefined" || !window.document) return animationName;

  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  const styleSheet = styleEl.sheet;

  const keyFrames = `@keyframes ${animationName} {${frames}}`;
  if (styleSheet) styleSheet.insertRule(keyFrames, 0);

  return animationName;
};