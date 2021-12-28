import { useState } from 'react';

import './InputField.css';

import InputError from '../InputError/InputError';

const InputTextArea = ({
    wrapperClassName,
    id,
    name,
    className,
    rows,
    placeholder,
    validateFieldFunction,
    errorMessage,
    setValidationErrors,
}) => {

    const [hasError, setHasError] = useState(false);

    const checkUserCurrentInputString = (e) => {
        const userCurrentInputString = e.target?.value;

        const isInputValid = validateFieldFunction(userCurrentInputString);
        if (!isInputValid) {
            setHasError(true);
            setValidationErrors(ca => ({...ca, [e.target.name]: errorMessage}));
        } else {
            setHasError(false);
            setValidationErrors(ca => ({...ca, [e.target.name]: ''}));
        }
    }

    return (
        <article className={wrapperClassName}>
            <textarea
                id={id}
                name={name}
                className={className}
                rows={rows}
                placeholder={placeholder}
                // onFocus={checkUserCurrentInputString}
                // onChange={checkUserCurrentInputString}
                onPaste={checkUserCurrentInputString}
                onBlur={checkUserCurrentInputString}
            >
            </textarea>
            {hasError ? <InputError>{errorMessage}</InputError> : null}
        </article>
    )
}

export default InputTextArea;