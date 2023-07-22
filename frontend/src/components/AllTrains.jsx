import React, { useState, useEffect } from 'react'
// import getAllTrains from '../../api/getAllTrains';
import axios from 'axios';
import TrainCard from './TrainCard';


const AllTrains = () => {
  const [trains, setTrains] = useState([]);
  const url = "http://localhost:3000/api/trains";

  useEffect(() => {
      axios.get(url).then(res => {
        console.log(res.data.response);
        setTrains(res.data.response);
      }).catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      {
        trains.map(train => {
          return <TrainCard train={train} />
        })
      }
    </div>
  )
}

export default AllTrains
