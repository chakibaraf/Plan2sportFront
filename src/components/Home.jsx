import React from 'react'
import { getCompetionsService } from './../services/competionsService';
import { useEffect, useState } from 'react';


function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    getAllCompetions();
  }, []);

  const getAllCompetions = () => {
    getCompetionsService().then((res) => setData(res));
  }

  return (
    <div>
      <ul>
        <li>{data.count}</li>

        {data.competitions.map((value, index) => {
          return <li key={index}>{value.name}</li>
        }

        )}
      </ul>
    </div>
  )
}

export default Home