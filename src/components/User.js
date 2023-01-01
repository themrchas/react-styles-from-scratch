import React from 'react'

import styles from './User.module.css';


const User = props => {

    console.log('in User with props', props);

    const formatData = (name,age) =>  name+" (" + age + "years old )" 

      
    return (
        <div onClick={props.deleteItem} data-id={props.id} className={styles.displayItem}>
            {formatData(props.name, props.age)}
        </div>
    )


}

export default User;