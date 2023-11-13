//import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  //const message = items.length === 0 ? <p>No Item Found</p> : null;
  // Produces the same render as above
  const message = items.length === 0 && <p>No Item Found</p>;

  return (
    //<Fragment>
    <>
      <h1>List</h1>
      {message /* Possible to use a function instead if needing arguments */}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </> // Alternative way to <Fragment>
    //</Fragment>
  );
}

export default ListGroup;
