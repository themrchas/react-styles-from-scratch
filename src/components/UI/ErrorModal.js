import React from 'react';
import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';

import Card from './Card';
import Button from './Button'

import styles from './ErrorModal.module.css';

const Backdrop = props => {
    return (
        <div className={styles.backdrop} onClick={props.clearError}/>
    )
} //Backdrop

const ModalOverlay = props => {

    return (
        <div>
            
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className={styles.actions}>
                    <Button type="button" onClick={props.clearError}>Okay</Button>
                </footer>
            </Card>
        </div>

    )

} //ModalOverlay

const ErrorModal = props => {

    return (

        <React.Fragment>
            {createPortal(<Backdrop clearError={props.clearError} />,document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} clearError={props.clearError} />,document.getElementById("modal-root"))}
        </React.Fragment>
   

    )
}

export default ErrorModal;