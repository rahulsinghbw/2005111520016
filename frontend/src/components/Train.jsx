import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TrainCard from './TrainCard';

const Train = () => {

    const [train, setTrain] = useState({});

    const { id } = useParams();

    useEffect(() => {
     
      const url = `http://localhost:3000/api/train/${id}`; 
      axios.get(url).then(res => {
        setTrain({...res.data.response});
      }).catch(err => {
        console.log(err);
      })
    }, []);

  return (
    <div>
      <TrainCard train={train}/>
    </div>
  )
}

export default Train
