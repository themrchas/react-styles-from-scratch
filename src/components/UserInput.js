//The form used to input data

import React, {useState} from 'react'

import Input from './UI/Input';
import Button from './UI/Button';
import Card from './UI/Card';
import ErrorModal from './UI/ErrorModal';

import styles from './UserInput.module.css';


const UserInput = props => {

    const [error,setError] = useState();


    const checkValidity = e => {

      //Prevent the default behavior for a form submit as we need to check input data
      e.preventDefault(); 

      //if (e.target.username.value.length === 0  || e.target.age.value.length === 0) {

        if (e.target.username.value.length === 0) {
          //alert("Invalid input - Username cannot be empty and age must be greater than 18")
          setError({title: "Error", message:"The name cannot be empty"})
          
         }
         else if (e.target.age.value.length === 0) {
          setError({title: "Error", message:"The age cannot be empty"});
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

    //Handler used to clear error modal via state
    const clearInputError = _ => {
      setError(null)
    } //clearError
    

    return (
     <div>

     {error && <ErrorModal title={error.title} message={error.message} clearError={clearInputError}></ErrorModal>}

     <Card className={styles.input}>
        <form onSubmit={checkValidity}>
        
            {/*  <Input type="text" inputId="username" className={styles.label}>Username</Input> */}
            <Input type="text" inputId="username">Username</Input>
              <Input type="number" inputId="age" min="18" max="99" step="1">Age (Years)</Input>
              <Button type="submit">Add user to list</Button>
          
          </form>
      </Card>
    </div>
    )


}

export default UserInput;