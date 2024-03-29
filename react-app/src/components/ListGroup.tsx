//import { Fragment } from "react";
import { useState } from "react";
import Props from "../interfaces/Props";

function ListGroup({ items, heading, onSelectItem }: Props) {
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
      <h1>{heading}</h1>
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
              onSelectItem(item);
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
