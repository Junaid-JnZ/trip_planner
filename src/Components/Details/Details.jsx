import './Details.css'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
const Details = (props) => {

const getJourneys = async () =>{
let result = await fetch (`https://v5.db.transport.rest/journeys?from=${props.origin.id}&to=${props.destination.id}&language='en'&departure=${props.date}':'${props.time}&results=${1}&bus=${true}&ferry=${true}&subway=${true}&taxi=${true}&tram=${true}`)
result = await result.json()
setJourneys(result.journeys)
}
useEffect(() => {
getJourneys();
}, []);

const [journeys,setJourneys] = useState([])

return (
<>
<div className="wrapper">
<form className='form'>
<br/>
<div>
<h2>Details</h2>
{/* <span>{props.origin}</span> */}
</div>
<br/>

<div>
<h3>Journey: <label><b>{props.origin.name}</b> to <b>{props.destination.name}</b></label></h3>

</div>
<br/>
{journeys.map((item)=>{
  return(
  <table className="container">
  <thead>
  <tr>
    <th><h1>Origin</h1></th>
    <th><h1>Destination</h1></th>
    <th><h1>Departure</h1></th>
    <th><h1>Arrival</h1></th>
  </tr>
  </thead>
  <tbody>
  {item.legs.map((item) => {
    return(
      <tr>
        <td>{item.origin.name}</td>
        <td>{item.destination.name}</td>
        <td>{item.departure}</td>
        <td>{item.arrival}</td>
      </tr>
    )})}
  </tbody>
  </table>
  )})}
  <Link to="/" className="formbold-btn">Home</Link>
</form>
</div>
</>
);
}
export default Details;




// {/* // <tr>
//   //   <td>Twitter</td>
//   //   <td>7326</td>
//   //   <td>10437</td>
//   //   <td>00:51:22</td>
//   // </tr>
//   // <tr>
//   //   <td>Amazon</td>
//   //   <td>4162</td>
//   //   <td>5327</td>
//   //   <td>00:24:34</td>
//   // </tr>
//   // <tr>
//   //   <td>LinkedIn</td>
//   //   <td>3654</td>
//   //   <td>2961</td>
//   //   <td>00:12:10</td>
//   // </tr>
//   // <tr>
//   //   <td>CodePen</td>
//   //   <td>2002</td>
//   //   <td>4135</td>
//   //   <td>00:46:19</td>
//   // </tr>
//   // <tr>
//   //   <td>GitHub</td>
//   //   <td>4623</td>
//   //   <td>3486</td>
//   //   <td>00:31:52</td>
//   // </tr> */}