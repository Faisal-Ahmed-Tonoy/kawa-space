import React from 'react'
import Card from '../Card/Card'
import CardDetails from '../CardDetails/CardDetails'
import Header from '../Header/Header'


export default function Home() { 
    return (
        <div>
            <Header></Header>
           
            <Card></Card>
            <CardDetails></CardDetails>
            This is home
        </div>
        
    )
}
