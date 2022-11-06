import React, {useState} from 'react'

import User from './User';


const UserDisplay = props => {



    const renderUsers = (items) => {

        console.log('in UserDisplay');

       return items.map(el => //{
          //  return <User name={el['name']} age={el.age} />
          <User name={el['name']} age={el.age} />
       );

       // }); 
    }



    return (

        <div>

            {renderUsers(props.users)}


        </div>

    )



}

export default UserDisplay;