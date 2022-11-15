import './Form.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Select from 'react-select';
// import axios from 'axios';
const Form = (props) => {
// let temp = []
const getStops = async () => {
let result = await fetch(`https://v5.db.transport.rest/locations?query=pakistan&results=100&stops=true&locations=false`);
result = await result.json()
props.setStops(result.filter(item =>{
  if(item.type === "stop"){
    return item
  }
}))
}
useEffect(() => {
getStops();
}, []);
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

return (
<div className="formbold-main-wrapper">
<div className="formbold-form-wrapper ">
  <form action="https://formbold.com/s/FORM_ID" method="POST">
    <div className="formbold-mb-5">
      <label htmlFor="name" className="formbold-form-label"> Origin </label>
      {/* <input list="browsers" name="browser" className="formbold-form-input" placeholder="Starting point" onChange={(e)=>props.setOrigin(e.target.value)}/>
        <datalist id="browsers">
        {props.stops.map(item => item.type==='stop'&&<option key = {item.name} value = {item.id}>{item.name}</option>)}
        </datalist> */}
        <Select
        className="formbold-form-input-2 "
        // isOptionDisabled={(option) => option.type }
        options={props.stops}
        value={props.origin}
        onChange={(e)=>props.setOrigin(e)}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id} // It should be unique value in the options. E.g. ID
      />
    </div>
    <div className="formbold-mb-5 ">
      <label htmlFor="email" className="formbold-form-label"> Destination </label>
      {/* <input list="browsers" name="browser" className="formbold-form-input" placeholder="Destination point" onChange={(e)=>props.setDestination(e.target.value)}/>
        <datalist id="browsers">
        {props.stops.map(item => item.type==='stop'&&<option key = {item.name} value = {item.id}>{item.name}</option>)}
        </datalist> */}
        {/* styles={customStyles} */}
       <Select 
        className="formbold-form-input-2"
        options={props.stops}
        value={props.destination}
        onChange={(e)=>props.setDestination(e)}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id} // It should be unique value in the options. E.g. ID
      />
    </div>
    <div className="formbold-mb-5 ">
      <label htmlFor="subject" className="formbold-form-label"> Date </label>
      <input
        type="date"
        name="subject"
        id="subject"
        placeholder="Enter your subject"
        className="formbold-form-input"
        onChange={(e)=>props.setDate(e.target.value)}
      />
    </div>
    <div className="formbold-mb-5">
      <label htmlFor="message" className="formbold-form-label"> Time </label>
      <input
        type="time"
        name="subject"
        id="subject"
        placeholder="Enter your subject"
        className="formbold-form-input"
        onChange={(e)=>props.setTime(e.target.value)}
      />
    </div>
    <div>
      <Link to="/Details" className="formbold-btn">Details</Link>
    </div>
  </form>
</div>
</div>);
}
export default Form;