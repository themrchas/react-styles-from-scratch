import React, {} from 'react'

import User from './User';
import Card from '../components/UI/Card';

import styles from './UserDisplay.module.css';

const UserDisplay = props => {

    const renderUsers = (items) => {

        console.log('in UserDisplay');

       return items.map(el => //{
          <User key={el['id']} name={el['name']} age={el.age} deleteItem={props.deleteUser} id={el['id']} />
       );

    } //renderUsers



    return (

        <Card>
        <div id = {styles.userDisplayContainer}>

            {renderUsers(props.users)}

        </div>
        </Card>

    )



}

export default UserDisplay;