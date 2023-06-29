import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "./action/Action";
import User from "./User";
import ErrorBoundry from "./ErrorBoundry";
export default function App() {
  let count = useSelector((state) => state.changeTheNumber);
  let dispatch = useDispatch();

  return (
    <div className="App">
      <ErrorBoundry>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
        <input type="text" value={count} />
        <button onClick={() => dispatch(increase())}>Increase</button>
        <User />
      </ErrorBoundry>
    </div>
  );
}
