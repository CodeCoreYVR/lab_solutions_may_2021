import React from 'react'

export default function FormErrors(props) {
    const { formField, errors = {} } = props;
    console.log(errors);
    let filteredErrors = [];
    if (errors[formField]) {
        filteredErrors = errors[formField];
    }
    function displayErrors(errorArray) {
        if (errorArray) {
            const newArray = errorArray.map((error, i) =>
                <li key={i}>{error}</li>
            )
            return newArray;
        }
    }
    return (
        <ul>
            {displayErrors(filteredErrors)}
        </ul>
    )
}
