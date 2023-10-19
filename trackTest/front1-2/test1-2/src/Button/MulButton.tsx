import { useContext } from "react";
import { CountContext } from "../context/CountContext";

const MulButton = () => {
  const { count, setCount } = useContext(CountContext);
  const handleClick = () => {
    setCount(count * 2);
  };
  return (
    <div>
      <button className="button" id="Mul" onClick={() => handleClick()}>
        *2
      </button>
    </div>
  );
};

export { MulButton };
