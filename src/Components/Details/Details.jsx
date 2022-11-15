import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Details = (props) => {

  const [isLoading, setisLoading] = useState(true);

  const getJourneys = async () => {
    let result = await fetch(`https://v5.db.transport.rest/journeys?from=${props.origin.id}&to=${props.destination.id}&language='en'&departure=${props.date}':'${props.time}&results=${1}&bus=${true}&ferry=${true}&subway=${true}&taxi=${true}&tram=${true}`)
    result = await result.json()
    setJourneys(result.journeys)
    setisLoading(false)
  }
  useEffect(() => {
    getJourneys();
  }, []);

  const [journeys, setJourneys] = useState([])

  return (
    <>
      {isLoading ? <div className='loader'></div> :
        <div className="wrapper">
          <form className='form'>
            <div className='margin'>
              <h2>Details</h2>
            </div>
            <div>
              <h3 className='margin'>Journey: {props.origin.name} to {props.destination.name}</h3>
            </div>
            <br />
            {journeys.map((item) => {
              return (
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
                      return (
                        <tr>
                          <td>{item.origin.name}</td>
                          <td>{item.destination.name}</td>
                          <td>{item.departure}</td>
                          <td>{item.arrival}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )
            })}
            <Link to="/" className="formbold-btn">Home</Link>
            <button className="Details-btn">Home</button>

          </form>
        </div>}
    </>
  );
}
export default Details;



