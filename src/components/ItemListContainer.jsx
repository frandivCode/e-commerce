import '../stylesheets/ItemListContainer.css';

export default function ItemListContainer({ greeting }) {

  return (
    <div className="container-greeting">
      <h1>{greeting}</h1>
    </div>
  );
}