import React, {} from 'react'

import User from './User';


const UserDisplay = props => {

    const renderUsers = (items) => {

        console.log('in UserDisplay');

       return items.map(el => //{
          <User key={el['id']} name={el['name']} age={el.age} deleteItem={props.deleteUser} id={el['id']}/>
       );

    } //renderUsers



    return (

        <div>

            {renderUsers(props.users)}


        </div>

    )



}

export default UserDisplay;