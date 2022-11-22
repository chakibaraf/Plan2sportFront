
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Myimg from './404.jpg';
import './Card.css'


const  Cardo = (props) => {
    const header = (
        <>
            <img className='logo' alt="Card" src={props.value.emblem} onError={(e) => e.target.src= Myimg}  />
            
        
        </>
    );
    const footer = (
        <span>
            <Button  label="Voir les matchs"  />
           
        </span>
    );
  return (
   
        <Card  className='carte' title={props.value.name}  style={{ width: '12em' }} footer={footer} header={header}>
                
            </Card>
    
  )
}

export default Cardo
