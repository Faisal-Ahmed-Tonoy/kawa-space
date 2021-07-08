import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import CardDetails from '../CardDetails/CardDetails'
import User from '../User/User'

export default function Card() { 
    const [card, setCard] = useState([]);
    const [user,setUser] =useState([]);
    const handleOnClick= (cards) =>{
        const newUser=[...user,card];
    setUser(newUser);
        console.log(cards)
    }
    useEffect( () =>{
        const url ="https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
        fetch(url)
        .then(res => res.json())
        .then(data => {setCard(data.results);
            console.log(data);})
        .catch(error => console.log(error))

    },[])
    return (
        <div className="row" style={{backgroundColor:'#E5E5E5'}}>
              <User> User:{user}</User>
      
     {
       
        card.map(cards=> 
            <CardDetails   handleOnClick={handleOnClick}
            cards={cards}
            title={cards.name.title} first={cards.name.first} last={cards.name.last}
            email={cards.email} 
            gender={cards.gender}
             image={cards.picture.thumbnail}  >  </CardDetails>)
     }
  
      
         
        </div>
    )
}