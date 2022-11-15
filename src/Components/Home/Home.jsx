import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from '../Trip_From/Form';
import NotFound from '../NotFound/NotFound';
import Details from '../Details/Details';
import { useState } from 'react';

const Home = () => {
const [stops,setStops] = useState([])
const [origin,setOrigin] = useState([])
const [destination,setDestination] = useState()
const [time,setTime] = useState()
const [date,setDate] = useState()

return (
<Router>
<div className="App">
<header className="App-header">
{/* <Navbar /> */}
<div className="content">
<Routes>
<Route path="/" element={<Form 
stops ={stops}
setStops ={setStops}
setOrigin ={setOrigin}
setDestination ={setDestination}
setTime ={setTime}
setDate ={setDate}
/>} 
/>
<Route path="/Details" element={<Details 
origin ={origin}
destination ={destination}
time ={time}
date ={date}/>} />
<Route path ="*" element = {<NotFound/>}/>
</Routes>
</div>
</header>
</div>
</Router>
)
}
export default Home;