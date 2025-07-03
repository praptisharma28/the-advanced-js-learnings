function ListGroup() {
  const items = ["India", "USA", "Canada", "Australia", "Germany", "France"];

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item" 
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
