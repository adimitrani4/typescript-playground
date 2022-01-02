import React from "react";
import ReactDOM from "react-dom";

function App()
{
  const [counter, setCounter] = useState(0);
  const incrementCounter = (increment) => setCounter(counter+increment);
  return (<div>
    <Button onClickFunction={incrementCounter} increment={1}/>
    <Button onClickFunction={incrementCounter} increment={5}/>
    <Button onClickFunction={incrementCounter} increment={10}/>
    <Display message={counter}/>
  </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);