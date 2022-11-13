//The form used to input data

import React from 'react'

import Input from './UI/Input'
import Button from './UI/Button'


const UserInput = props => {


    const checkValidity = e => {

      //Prevent the default behavior for a form submit as we need to check input data
      e.preventDefault(); 

      if (e.target.username.value.length === 0  || e.target.age.value.length === 0) {

          alert("Invalid input - Username cannot be empty and age must be greater than 18")
          
         }
      else {

        //Grab input values
        let userName = e.target.username.value;
        let age = e.target.age.value;

        //Clear input values since we know that we have good values
        e.target.username.value = "";
        e.target.age.value = "";

        props.addUser(userName,age);

      }
    
    } //checkValidity
    

    return (
        
      
      <form onSubmit={checkValidity}>
       
            <Input type="text" inputId="username">Username</Input>
            <Input type="number" inputId="age" min="18" max="99" step="1">Age (Years)</Input>
            <Button type="submit">Add user to list</Button>
        
        </form>

    )


}

export default UserInput;