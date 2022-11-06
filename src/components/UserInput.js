import React from 'react'

import Input from './UI/Input'
import Button from './UI/Button'

const UserInput = props => {


    return (
        
        <form onSubmit={props.addUser}>

            <Input type="text" inputId="username">Username</Input>
            <Input type="number" inputId="age" min="18" max="99" step="1">Age (Years)</Input>
            <Button type="submit">Add user to list</Button>

        
        </form>

    )


}

export default UserInput;