

const Input = props => {

    return (

        <div>

            <label for={props.inputId}>{props.children}</label>
            <input type={props.type} id={props.inputId} min={props.min} max={props.max} step={props.step} />
        </div>



    )
    
}

export default Input