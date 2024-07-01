
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