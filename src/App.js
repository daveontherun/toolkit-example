
import {useSelector, useDispatch} from "react-redux";
import {custom, decrement, increment} from "./reducers/numberReducer";

function App() {

  const number = useSelector(state=>state.number.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{number}</h1>
        <button onClick={()=>dispatch(increment())}>Up by 1</button>
        <button onClick={()=>dispatch(decrement())}>Down by 1</button>
        <button onClick={()=>dispatch(custom(3))}>Up by 3</button>
    </div>
  );
}

export default App;
