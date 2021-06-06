import './App.css';
import ReactDOM from 'react-dom';
import DurationInput from 'react-duration';
import Axios from 'axios';

// function App() {
//   return (
//   <form>
//     <input id="duration-input" type="text" required pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}:[0-9]{2}" value="00:00:00:00" title="Write a duration in the format hh:mm:ss:ms"></input>
//   </form>
//   );
// }


// class MyApp extends React.Component{

//   constructor(props){

//      this.state = {
//          duration: 125.4 // Duration values are given in seconds.
//      }
//   }

//   render(){

//       return (    
//           <DurationInput
//               value={ this.state.duration }
//               onChange={ new_duration=> this.setState({duration: new_duration}) }
//           />
//       );
//   }
// }

import { TimeDurationInput } from 'react-time-duration-input'
import React, { useState } from "react";

// function MyApp () {
//   const [ value, setValue ] = useState(2443332000)

//   return (<TimeDurationInput value={value} onChange={setValue} />)
// }

// import TimeField from 'react-simple-timefield';

// class App extends React.Component {
//   constructor(...args) {
//     super(...args);

//     this.state = {
//       time: '00:00:00'
//     };

//     this.onTimeChange = this.onTimeChange.bind(this);
//   }

//   onTimeChange(event, time) {
//     this.setState({time});
//   }

//   render() {
//     const {time} = this.state;

//     return (
//       <TimeField value={time} onChange={this.onTimeChange} />
//     );
//   }
// }


const App = () => {
  const url = 'https://frosty-wood-6558.getsandbox.com:443/dishes'
  const [condition, setCondition] = useState('')
  // const [value, setValue] = React.useState("00:00:00");
  const [value, setValue] = useState({
    name: '', preparation_time: '00:00:00', type: '', no_of_slices: '', diameter: '', spiciness_scale: '', slices_of_bread: ''
  });
  let dishes = ['pizza', 'soup', 'sandwich'];

  // const set = name => {
  //   return ({ target: { value } }) => {
  //     setValues(oldValues => ({ ...oldValues, [name]: value }));
  //   }
  // };

  // const onChange = (event) => {
  //   setValue(event.target.value);
  // };

  // const onBlur = (event) => {
  //   const value = event.target.value;
  //   const seconds = Math.max(0, getSecondsFromHHMMSS(value));

  //   const time = toHHMMSS(seconds);
  //   setValue(time);
  // };

  // const getSecondsFromHHMMSS = (value) => {
  //   const [str1, str2, str3] = value.split(":");

  //   const val1 = Number(str1);
  //   const val2 = Number(str2);
  //   const val3 = Number(str3);

  //   if (!isNaN(val1) && isNaN(val2) && isNaN(val3)) {
  //     return val1;
  //   }

  //   if (!isNaN(val1) && !isNaN(val2) && isNaN(val3)) {
  //     return val1 * 60 + val2;
  //   }

  //   if (!isNaN(val1) && !isNaN(val2) && !isNaN(val3)) {
  //     return val1 * 60 * 60 + val2 * 60 + val3;
  //   }

  //   return 0;
  // };

  // const toHHMMSS = (secs) => {
  //   const secNum = parseInt(secs.toString(), 10);
  //   const hours = Math.floor(secNum / 3600);
  //   const minutes = Math.floor(secNum / 60) % 60;
  //   const seconds = secNum % 60;

  //   return [hours, minutes, seconds]
  //     .map((val) => (val < 10 ? `0${val}` : val))
  // .filter((val, index) => val !== "00" || index > 0)
  // .join(":")
  // .replace(/^0/, "");
  // };

  //   const Condition = (value) => {
  //     if (currentUser) {
  //       return <Home />;
  //     }
  //     return <Landing />;
  // };
  function handle(e) {
    const newvalue = { ...value }
    newvalue[e.target.id] = e.target.value
    setValue(newvalue)
    console.log(newvalue)
  }

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: value.name,
      preparation_time: value.preparation_time,
      type: value.type,
      no_of_slices: parseInt(value.no_of_slices),
      diameter: parseInt(value.diameter),
      spiciness_scale: parseInt(value.spiciness_scale),
      slices_of_bread: parseInt(value.slices_of_bread)
    })
      .then(res => {
        console.log(res.value)
      })
      .catch(err => {
        console.log(err);
      })
  }



  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <div>
          <input type="text" name="name" required
            // onChange={set('name')} 
            onChange={(e) => handle(e)} id='name' value={value.name}
          />
        </div>
        <div>
          <input type="text" required onChange={(e) => handle(e)} id='preparation_time' value={value.preparation_time}
          // onChange={set('time')}
          //  onChange={onChange}
          //  onBlur={onBlur}
          // value={value} 
          />
        </div>
        <div>
          <p>Select dish type:</p>
          {/* <input type="radio" name="dish-type" value="pizza" />pizza<br />
        <input type="radio" name="dish-type" value="soup" />soup<br />
        <input type="radio" name="dish-type" value="sandwich" />sandwich<br /> */}
          {/* {dishes.map(result => (
            <div key={result}>
              <input onChange={(event) => setCondition(event.target.value)} type="radio" value={result} />
              <b>{result}</b>
            </div>
          ))} */}
          {/* {dishes.map(result => (
              <option onChange={(event) => setCondition(event.target.value)} value={result} >
              <b>{result}</b>
              </option>
            
          ))} */}
          {/* <select name="dishes" id="dishes" required>
            {dishes.map(result => (
              <option key={result} onChange={(event) => setCondition(event.target.value)} value={result} >
              <b>{result}</b>
              </option>
            
          ))}
          </select> */}
          <select name="dishes" required onChange={(event) => {setCondition(event.target.value); handle(event)}} 
          // onChange={(e) => handle(e)} 
          id='type' value={value.type} >
            <option value="">None</option>
            <option value="pizza">pizza</option>
            <option value="soup">soup</option>
            <option value="sandwich">sandwich</option>
          </select>
          {condition === dishes[0] &&
            <div>
              <label htmlFor="quantity">no_of_slices:</label>
              <input type="number" name="quantity" required onChange={(e) => handle(e)} id='no_of_slices' value={value.no_of_slices}/>
              <label htmlFor="quantity">diameter:</label>
              <input type="number" step="0.01" required onChange={(e) => handle(e)} id='diameter' value={value.diameter}/>
            </div>}

          {condition === dishes[1] &&
            <div>
              <label htmlFor="quantity">spiciness_scale:</label>
              <input type="number" name="quantity" min="1" max="10" required onChange={(e) => handle(e)} id='spiciness_scale' value={value.spiciness_scale}/>
            </div>}

          {condition === dishes[2] &&
            <div>
              <label htmlFor="quantity">slices_of_bread:</label>
              <input type="number" name="quantity" required onChange={(e) => handle(e)} id='slices_of_bread' value={value.slices_of_bread}/>
            </div>}
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);


export default App;
