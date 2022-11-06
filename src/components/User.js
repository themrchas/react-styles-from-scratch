import React from 'react'



const User = props => {

    console.log('in User');

    const formatData = (name,age) =>  name+" (" + age + "years old )" 

      
    return (
        <div>
            {formatData(props.name, props.age)}
        </div>
    )


}

export default User;