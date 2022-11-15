import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Select from 'react-select';

const Form = (props) => {
  const getStops = async () => {
    let result = await fetch(`https://v5.db.transport.rest/locations?query=pakistan&results=100&stops=true&locations=false`);
    result = await result.json()
    props.setStops(result.filter(item => {
      if (item.type === "stop") {
        return item
      }
    }))
  }
  useEffect(() => {
    getStops();
  }, []);

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper ">
        <form>
          <div className="formbold-mb-5">
            <label htmlFor="name" className="formbold-form-label"> Origin </label>
            <Select
              className="formbold-form-input-2 "
              options={props.stops}
              value={props.origin}
              onChange={(e) => props.setOrigin(e)}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id} // It should be unique value in the options. E.g. ID
            />
          </div>
          <div className="formbold-mb-5 ">
            <label htmlFor="email" className="formbold-form-label"> Destination </label>
            <Select
              className="formbold-form-input-2"
              options={props.stops}
              value={props.destination}
              onChange={(e) => props.setDestination(e)}
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
              onChange={(e) => props.setDate(e.target.value)}
            />
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="message" className="formbold-form-label"> Time </label>
            <input
              type="time"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="formbold-form-input "
              onChange={(e) => props.setTime(e.target.value)}
              onfocus="this.showPicker()"
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