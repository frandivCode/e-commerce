import '../stylesheets/ItemListContainer.css';

function ItemListContainer(greeting) {
  return (
    <div className="container-greeting">
      <h1>{greeting.saludo}!</h1>
    </div>
  );
}

export default ItemListContainer;