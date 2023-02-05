//The form used to input data

import React, {useState, useRef} from 'react'

//import Input from './UI/Input';
import Button from './UI/Button';
import Card from './UI/Card';
import ErrorModal from './UI/ErrorModal';

import styles from './UserInput.module.css';


const UserInput = props => {

    const [error,setError] = useState();
    const refUserName = useRef();
    const refUserAge = useRef();

    const checkValidity = e => {

      //Prevent the default behavior for a form submit as we need to check input data
      e.preventDefault(); 
      console.log(refUserName);

      //Grab the name of name and age objects using the ref
      let userName = refUserName.current;
      let userAge = refUserAge.current;

      if (userName.value.length === 0) {

        setError({ title: "Error", message: "The name cannot be empty" })

      }

      else if (userAge.value.length === 0) {
        setError({ title: "Error", message: "The age cannot be empty" });
      }
      else {

        props.addUser(userName.value, userAge.value);

        userName.value = userAge.value = "";

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
              <label for="username">Enter user name</label>
              <input type="text" id="username" ref={refUserName}></input>
              <label for="age">Enter Age</label>
              <input type="number" id="age" min="18" max="99" step="1" ref={refUserAge}></input>
              <div>
                <Button type="submit">Add user to list</Button>
              </div>
          
          </form>
      </Card>
    </div>
    )


}

export default UserInput;