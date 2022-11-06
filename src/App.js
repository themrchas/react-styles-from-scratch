
import React, { useState} from 'react';

import './App.css';

import UserInput from './components/UserInput';
import UserDisplay from './components/UserDisplay';

function App() {

  const [nameAndAge, setNameAndAge] = useState([]);

  const addUser = (event) => {

    //Prevnt the page from being re-rendered
    event.preventDefault();

    let itemToAdd = { name:event.target.username.value, age:event.target.age.value }

    setNameAndAge( (prevState) => {

        return [...prevState,itemToAdd];

    })


    
  }

  return (
    <div>

      <UserInput addUser={addUser}/>
      <UserDisplay users={nameAndAge}/>
      
    </div>
  );
}

export default App;
