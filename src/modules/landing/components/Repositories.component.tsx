import ResponsiveGrid from "../../utils/ResponsiveGrid.component";
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
    <div className = "pb-10">
      <h4 className = "text-large">Algunos de mis repositorios ⬇</h4>
      <ResponsiveGrid elements = { elements } max = { 500 } gap = {10} />
    </div>
  )
}
