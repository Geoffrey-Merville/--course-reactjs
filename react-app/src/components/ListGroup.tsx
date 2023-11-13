//import { Fragment } from "react";
import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] -> variable (selectedIndex)
  // arr[1] -> updater function

  //const message = items.length === 0 ? <p>No Item Found</p> : null;
  // Produces the same render as above
  const message = items.length === 0 && <p>No Item Found</p>;

  return (
    //<Fragment>
    <>
      <h1>List</h1>
      {message /* Possible to use a function instead if needing arguments */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </> // Alternative way to <Fragment>
    //</Fragment>
  );
}

export default ListGroup;
