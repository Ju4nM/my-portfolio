import ResponsiveGrid from "../../shared/components/ResponsiveGrid.component";
import RepositoryCard from "../../dashboard/modules/repositories/components/RepositoryCard.component";

export default function Repositories() {
  
  const elements = [
    <RepositoryCard />,
    <RepositoryCard />,
    <RepositoryCard />,
    <RepositoryCard />,
    <RepositoryCard />,
    <RepositoryCard />,
    <RepositoryCard />,
    <RepositoryCard />,
    <RepositoryCard />,
    <RepositoryCard />,
    <RepositoryCard />,
    <RepositoryCard />,
    <RepositoryCard />,
  ];

  return (
    <div className = "pb-10 landing-section" id = "repos">
      <h3 className = "text-xl pb-4 font-semibold">Algunos de mis repositorios de <a className = "underline text-customPurple transition-all hover:text-purple-400" href="https://github.com/Ju4nM">GitHub</a></h3>
      <ResponsiveGrid elements = { elements } max = { 500 } gap = {10} />
    </div>
  )
}
