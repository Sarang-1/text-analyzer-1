import React from 'react'

function Alert(props) {

    const capitalise=(word)=>{
        const newWord = word.toLowerCase();
        return newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }
    return (
      props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalise(props.alert.type)}:</strong> {props.alert.message}
      </div>
    )
}

export default Alert
