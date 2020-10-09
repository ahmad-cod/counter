import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter + 1 });
  }
  decrement =  () => { this.state.counter > 0 ?
   this.setState({counter: this.state.counter - 1}) : this.setState({counter: 0})
  }
  reset = () => { 
    this.setState({counter: 0})
  }
  render(){
    return <div>
      <h1> Counter: <b>{this.state.counter}</b>.</h1>
      <button onClick={this.increment}>Increment (+)</button>
      <button onClick={this.decrement}>Decrement (--)</button>
      <button onClick={this.reset}>Reset</button>
    </div>
  }
}
let  seconds = 0;
function time() {
  seconds++;
  const timer = <h4>You've been here for <b>{seconds}</b>seconds.</h4>;
  ReactDOM.render(
    timer,
    document.getElementById("time")
  )
}
time();
setInterval(time, 1000);

function Converter() {
  const [km, setKm] = useState(0);

  function handleChange(e) {
    setKm(e.target.value)
  }
  function convert(km) {
    return (km/1.609).toFixed(2);
  }
  return <div className="converter">
    <input type="number" value={km}
    onChange={handleChange} />
    <h3>{km}km is {convert(km)} miles</h3>
  </div>
}

const el = <Counter />;

ReactDOM.render(
  el,
  document.getElementById('root')
);
ReactDOM.render(
  <Converter />,
  document.getElementById("converter")
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
