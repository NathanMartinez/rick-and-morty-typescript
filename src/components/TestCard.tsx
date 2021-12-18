import "../styles/test-card.scss";

type TestCardData = {
  data: {
    name: string;
    description: string;
  };
};

function TestCard({ data }: TestCardData) {
  const { name, description } = data;

  return (
    <div className="test-card">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TestCard;
