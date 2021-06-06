import './App.css';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import React, { useState } from "react";


const App = () => {
  const url = 'https://frosty-wood-6558.getsandbox.com:443/dishes'
  const [condition, setCondition] = useState('')
  const [value, setValue] = useState({
    name: '', preparation_time: '00:00:00', type: '', no_of_slices: '', diameter: '', spiciness_scale: '', slices_of_bread: ''
  });
  let dishes = ['pizza', 'soup', 'sandwich'];

  
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
            onChange={(e) => handle(e)} id='name' value={value.name}
          />
        </div>
        <div>
          <input type="text" required onChange={(e) => handle(e)} id='preparation_time' value={value.preparation_time}/>
        </div>
        <div>
          <p>Select dish type:</p>
          <select name="dishes" required onChange={(event) => {setCondition(event.target.value); handle(event)}} 
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
          <button type="submit">Submit</button>
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
