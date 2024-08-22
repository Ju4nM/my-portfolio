import ResponsiveGrid from "../../shared/components/ResponsiveGrid.component";
import RepositoryCard from "../../app/modules/repository/components/RepositoryCard.component";
import { useLanding } from "../hooks/useLanding.hook";
import { RepositoryInterface } from "../../app/modules/repository/interfaces/repository.interface";
import { ReactElement, useEffect, useState } from "react";

export default function Repositories() {
  
  const { landingData } = useLanding();
  const currentRepos: RepositoryInterface[] = landingData?.repos ?? [];
  const [ elements, setElements ] = useState<ReactElement[]>([]);
  
  const loadRepos = () => {
    const repoElements: ReactElement[] = [];
    currentRepos.forEach((repo) => repoElements.push(<RepositoryCard data = { repo } />))
    setElements(repoElements);
  }
  
  useEffect (() => loadRepos(), [ landingData ]);

  return (
    <div className = "pb-10 landing-section" id = "repos">
      <h3 className = "text-xl pb-4 font-semibold">Algunos de mis repositorios de <a className = "underline text-customPurple transition-all hover:text-purple-400" href="https://github.com/Ju4nM">GitHub</a></h3>
      <ResponsiveGrid elements = { elements } max = { 500 } gap = {10} />
    </div>
  )
}
