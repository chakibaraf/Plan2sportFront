import React from 'react'
import { getCompetionsService } from './../services/competionsService';
import { useEffect, useState } from 'react';
import Cardo from './Card';




function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllCompetions();
  }, []);

  const getAllCompetions = () => {
    getCompetionsService().then((res) => setData(res.competitions));
  }

  return (
    <div className='contener_carte'>
      

        {data.map((value, index) => {
          return <Cardo key = {index} value={value}/>

        
        }

        )}
    </div>
  )
}

export default Home