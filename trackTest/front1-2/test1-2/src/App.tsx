import { useContext } from "react";
import { AddButton } from "./Button/AddButton";
import { CountContext } from "./context/CountContext";
import { SubButton } from "./Button/SubButton";
import { MulButton } from "./Button/MulButton";
import "./App.css";

const App = () => {
  const { count } = useContext(CountContext);
  return (
    <div className="body">
      <div className="buttons">
        <AddButton />
        <SubButton />
        <MulButton />
      </div>
      <div className="display">{count}</div>
    </div>
  );
};

export default App;
