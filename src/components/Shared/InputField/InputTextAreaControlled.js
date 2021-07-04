import { useState } from 'react';

import './InputField.css';

import InputError from '../InputError/InputError';

const InputTextAreaControlled = ({
    wrapperClassName,
    id,
    name,
    className,
    rows,
    placeholder,
    validateFieldFunction,
    errorMessage,
    onValueChange,
    setValidationErrors,
}) => {
    const [hasError, setHasError] = useState(false);

    const checkUserCurrentInputString = (e) => {
        const userCurrentInputString = e.target?.value;
        const isInputValid = validateFieldFunction(userCurrentInputString);
        console.log(isInputValid + ' hi from isInputValid');
        if (!isInputValid) {
            setHasError(true);
            setValidationErrors(ca => ({...ca, [e.target.name]: errorMessage}));
        } else {
            setHasError(false);
            setValidationErrors(ca => ({...ca, [e.target.name]: ''}));
        }
        onValueChange(e);
    }

    return (
        <article className={wrapperClassName}>
            <textarea
                id={id}
                name={name}
                className={className}
                rows={rows}
                placeholder={placeholder}
                onBlur={checkUserCurrentInputString}
            >
            </textarea>
            {hasError ? <InputError>{errorMessage}</InputError> : null}
        </article>
    )
}

export default InputTextAreaControlled;