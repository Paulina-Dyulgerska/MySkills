import { useState } from 'react';

import './InputField.css';

import InputError from '../InputError/InputError';

const InputFieldWithLabel = ({
    wrapperClassName,
    type,
    id,
    name,
    className,
    autoComplete,
    children,
    validateFieldFunction,
    errorMessage,
    onChangeShowPasswordToggler,
}) => {

    const [minimise, setMinimise] = useState('');
    const [hasError, setHasError] = useState(false);

    const minimiseInputInternalLabel = (e) => {
        if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
            onChangeShowPasswordToggler(e.target.value);
        }
        setMinimise('minimise');
    }

    const checkUserCurrentInputString = (e) => {
        const userCurrentInputString = e.target.value;
        if (userCurrentInputString === '') {
            setMinimise('');
        }

        if (userCurrentInputString) {
            const isInputValid = validateFieldFunction(userCurrentInputString);
            if (!isInputValid) {
                setHasError(errorMessage);
            } else {
                setHasError('');
            }
        }
    }

    return (
        <article className={wrapperClassName}>
            <input type={type} id={id} name={name} className={className} autoComplete={autoComplete}
                onChange={minimiseInputInternalLabel}
                onFocus={minimiseInputInternalLabel}
                onPaste={minimiseInputInternalLabel}
                onKeyDown={minimiseInputInternalLabel}
                onBlur={checkUserCurrentInputString}
            />
            <label htmlFor={id} className={`placeLabel ${minimise}`}>
                {children}
            </label>
            {hasError ? <InputError>{errorMessage}</InputError> : null}
        </article>
    )
}

export default InputFieldWithLabel;