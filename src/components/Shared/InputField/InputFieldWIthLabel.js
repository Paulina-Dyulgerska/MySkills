import { useState, useEffect } from 'react';

import './InputField.css';

import InputError from '../InputError/InputError';

const InputFieldWithLabel = ({
    wrapperClassName,
    type,
    id,
    name,
    className,
    autoComplete,
    defaultValue,
    // onValueChange,
    children,
    validateFieldFunction,
    errorMessage,
    onChangeShowPasswordToggler,
    setValidationErrors,
}) => {

    const [minimise, setMinimise] = useState('');
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (defaultValue) {
            setMinimise('minimise');
            // setCurrentValue(defaultValue)
            // onValueChange(name, currentValue)
        }
    }, [defaultValue])

    const checkUserCurrentInputString = (e) => {
        if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
            onChangeShowPasswordToggler(e.target.value);
        }

        const userCurrentInputString = e.target?.value;
        if (userCurrentInputString) {
            setMinimise('minimise');

            const isInputValid = validateFieldFunction(userCurrentInputString);
            // console.log(isInputValid + ' hi from isInputValid');
            if (!isInputValid) {
                setHasError(true);
                setValidationErrors(ca => ({ ...ca, [e.target.name]: errorMessage }));
            } else {
                setHasError(false);
                setValidationErrors(ca => ({ ...ca, [e.target.name]: '' }));
            }
        }
    }

    const setMinimiseLabel = (e) => {
        const userCurrentInputString = e.target?.value;
        if (!userCurrentInputString) {
            setMinimise('');
        } else {
            setMinimise('minimise');
        }
    }

    return (
        <article className={wrapperClassName}>
            <input type={type} id={id} name={name} className={className} autoComplete={autoComplete}
                defaultValue={defaultValue}
                onFocus={checkUserCurrentInputString}
                onPaste={checkUserCurrentInputString}
                onBlur={checkUserCurrentInputString}
                onChange={setMinimiseLabel}
                onKeyDown={setMinimiseLabel}
                onKeyPress={setMinimiseLabel}
            />
            <label htmlFor={id} className={`placeLabel ${minimise}`}>
                {children}
            </label>
            {hasError ? <InputError>{errorMessage}</InputError> : null}
        </article>
    )
}

export default InputFieldWithLabel;