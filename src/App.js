
import React, { useState} from 'react';

import './App.css';

import UserInput from './components/UserInput';
import UserDisplay from './components/UserDisplay';

function App() {

  const [nameAndAge, setNameAndAge] = useState([]);
  

  const addUser = (userName,age) => {
       
    let itemToAdd = { name:userName, age:age, id :Math.random().toString().substring(0,6) }
    
      setNameAndAge( (prevState) => {
         
          return [...prevState,itemToAdd];
      })
  } //addUser


  const deleteUser = event => {

    console.log("item to be deleted is ", event.currentTarget.getAttribute('data-id'));

    let elementIdToDelete =  event.currentTarget.getAttribute('data-id')

      //Remove item in list that has id property matching that of item that was clicked
      setNameAndAge(
          nameAndAge.filter(el => el.id !== elementIdToDelete )
      )
     
  } //deleteUser


  return (
    <div>

      <UserInput addUser={addUser} />
      <UserDisplay users={nameAndAge} deleteUser={deleteUser}/>
      
    </div>
  );
}

export default App;
