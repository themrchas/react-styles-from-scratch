import React from 'react'



const User = props => {

    console.log('in User with props', props);

    const formatData = (name,age) =>  name+" (" + age + "years old )" 

      
    return (
        <div onClick={props.deleteItem} data-id={props.id}>
            {formatData(props.name, props.age)}
        </div>
    )


}

export default User;