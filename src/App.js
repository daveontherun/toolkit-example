import {useSelector} from "react-redux";

function App() {

  const number = useSelector(state=>state.number.value);

  return (
    <div className="App">
      <h1>{number}</h1>
    </div>
  );
}

export default App;
