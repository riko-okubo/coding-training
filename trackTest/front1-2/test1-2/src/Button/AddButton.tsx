import { useContext } from "react";
import { CountContext } from "../context/CountContext";

const AddButton = () => {
  const { count, setCount } = useContext(CountContext);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button className="button" id="add" onClick={() => handleClick()}>
        +1
      </button>
    </div>
  );
};

export { AddButton };
