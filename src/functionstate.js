import React,{useState} from 'react'

function State(props){

  const [message, changestate] =  useState('Welcome to our page, please subscribe')
   return(
   <div>
    <h1>{message}</h1>
    <button onClick = {() => changestate('Thanks for subscribing')}>Subscribe</button>
    </div>
   )
    }
export default State