import React from 'react'
import { UserView } from './userComponents/UserView'
import { HeadingUsers } from './/userComponents/HeadingUsers'
import { HeadingBooks } from './bookComponets/HeadingBooks'


export const Home = () => {
  return (
    <div>
        <div>
        <HeadingUsers/>
        <UserView/>
        
        </div>
       <br />
        <div>
      <HeadingBooks/>
    
        </div>
      
    </div>

   
  )
}
