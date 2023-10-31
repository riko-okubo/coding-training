import { useContext } from "react";
import { CountContext } from "../context/CountContext";

const SubButton = () => {
  const { count, setCount } = useContext(CountContext);
  const handleClick = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button className="button" id="Sub" onClick={() => handleClick()}>
        -1
      </button>
    </div>
  );
};

export { SubButton };
