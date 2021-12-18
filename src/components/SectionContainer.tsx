import TestCard from "./TestCard";
import "../styles/section-container.scss";

type Title = {
  title: string;
};

function SectionContainer({ title }: Title) {
  const cards = [
    {
      id: 1,
      name: "test",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique aut amet facilis veniam, iure expedita commodi rem placeat dolore sit molestiae dolorum obcaecati fugit suscipit nam ad velit consequatur. Dolorum?`,
    },
    {
      id: 2,
      name: "test",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique aut amet facilis veniam, iure expedita commodi rem placeat dolore sit molestiae dolorum obcaecati fugit suscipit nam ad velit consequatur. Dolorum?`,
    },
    {
      id: 3,
      name: "test",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique aut amet facilis veniam, iure expedita commodi rem placeat dolore sit molestiae dolorum obcaecati fugit suscipit nam ad velit consequatur. Dolorum?`,
    },
  ].map((card) => <TestCard key={card.id} data={card} />);

  return (
    <div className="section-container">
      <h1>{title}</h1>
      <section>{cards}</section>
    </div>
  );
}

export default SectionContainer;
